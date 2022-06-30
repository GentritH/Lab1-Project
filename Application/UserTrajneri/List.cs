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

namespace Application.UserTrajneri
{
    public class List
    {
        public class Query : IRequest<Result<List<Trajneri>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Trajneri>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Trajneri>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Trajneri>>.Success(await _context.Trajneret.ToListAsync(cancellationToken));
            }
        }
    }
}