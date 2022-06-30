using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.Lojtaret
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public String Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context =  context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var lojtari =  await _context.Lojtaret.FindAsync(request.Id);
                _context.Remove(lojtari);
                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed to delete lojtari");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}