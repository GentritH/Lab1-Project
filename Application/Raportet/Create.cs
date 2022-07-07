using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Raportet
{
    public class Create
    {
        public class Command : IRequest 
        {
            public Raporti raporti {get; set;}
            
             public Guid ushtrimiId { get; set; }
              public Guid GrupmoshaId { get; set; }
              public string LojtariId { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
            this.context = context;
                
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)

            
            {
               
                var grupmosha = await context.GrupmoshatT.FirstOrDefaultAsync(x => x.Id == request.ushtrimiId);
                var ushtrimi = await context.Ushtrimet.FirstOrDefaultAsync(x => x.Id == request.GrupmoshaId);
                var lojtari = await context.Lojtaret.FirstOrDefaultAsync(x => x.Id == request.LojtariId);
                request.raporti.Ushtrimi=ushtrimi;
                request.raporti.Grupmosha= grupmosha;
                request.raporti.Lojtari= lojtari;
                context.Raportet.Add(request.raporti);
                await context.SaveChangesAsync();
                return Unit.Value;
               
            }
        }
    }
}