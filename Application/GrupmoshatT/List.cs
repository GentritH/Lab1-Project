using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using Microsoft.Extensions.Logging;

namespace Application.GrupmoshatT
{
    public class List
    {
        public class Query : IRequest<List<Grupmoshat>>{}

        public class Handler : IRequestHandler<Query, List<Grupmoshat>>
        {
        private readonly DataContext context;
        
            public Handler(DataContext context)
            {
            this.context = context;
            }

            public async Task<List<Grupmoshat>> Handle(Query request, CancellationToken cancellationToken)
            {

                return await context.GrupmoshatT.ToListAsync(cancellationToken);
            }

          
        }
    }
}