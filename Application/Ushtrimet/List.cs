using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Ushtrimet
{
    public class List
    {
        public class Query : IRequest<List<Ushtrimi>>{}
        public class Handler : IRequestHandler<Query, List<Ushtrimi>>
        {
        private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;

            }

            public async Task<List<Ushtrimi>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Ushtrimet.ToListAsync(cancellationToken);
            }
        }
    }
}