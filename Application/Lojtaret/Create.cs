using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Lojtaret
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Lojtari Lojtari { get; set; }
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
                _context.Lojtaret.Add(request.Lojtari);
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("Failed to create lojtari");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}