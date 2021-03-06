using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;


namespace Application.Lojtaret
{
    public class List
    {
        public class Query : IRequest<Result<List<Lojtari>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Lojtari>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context =  context;
            }

            public async Task<Result<List<Lojtari>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Lojtari>>.Success(await _context.Lojtaret.ToListAsync(cancellationToken));
            }
        }
    }
}