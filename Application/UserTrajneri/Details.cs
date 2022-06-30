using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.UserTrajneri
{
    public class Details
    {
        public class Query : IRequest<Result<Trajneri>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Trajneri>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Trajneri>> Handle(Query request, CancellationToken cancellationToken)
            {
                var trajneret = await _context.Trajneret.FindAsync(request.Id);

                return Result<Trajneri>.Success(trajneret);
            }
        }
    }
}