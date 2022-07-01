using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
namespace Application.GrupmoshatT
{
    public class Details  
    {
        public class Query : IRequest<Grupmoshat>
          {
            public Guid Id { get; set; }
        }


        public class Handler : IRequestHandler<Query, Grupmoshat>
        {
        private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;
            }

            public async Task<Grupmoshat> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.GrupmoshatT.FindAsync(request.Id);
            }
        }
    }
}