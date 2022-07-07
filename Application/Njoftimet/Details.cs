using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Njoftimet
{
    public class Details
    {
        public class Query : IRequest<Result<Njoftim>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Njoftim>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Njoftim>> Handle(Query request, CancellationToken cancellationToken)
            {
                var njoftim = await _context.Njoftimet.FindAsync(request.Id);

                return Result<Njoftim>.Success(njoftim);
            }
        }
    }
}