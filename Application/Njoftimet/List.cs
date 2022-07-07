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

namespace Application.Njoftimet
{
    public class List
    {
        public class Query : IRequest<Result<List<Njoftim>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Njoftim>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Njoftim>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Njoftim>>.Success(await _context.Njoftimet.ToListAsync(cancellationToken));
            }
        }
    }
}