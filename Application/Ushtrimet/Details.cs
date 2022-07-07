using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Ushtrimet
{
    public class Details
    {
        public class Query : IRequest<Ushtrimi>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Ushtrimi>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Ushtrimi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Ushtrimet.FindAsync(request.Id);
            }
        }
    }
}