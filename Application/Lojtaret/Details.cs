using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Lojtaret
{
    public class Details
    {
        public class Query : IRequest<Result<Lojtari>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Lojtari>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Lojtari>> Handle(Query request, CancellationToken cancellationToken)
            {
                var lojtari = await _context.Lojtaret.FindAsync(request.Id);
                return Result<Lojtari>.Success(lojtari);
            }
        }
    }
}