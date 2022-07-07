using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Oraret
{
    public class Create
    {
        public class Command : IRequest
        {
            public Orari Orari{ get; set; }
            public Guid ushtrimiId { get; set; }
            public Guid GrupmoshaId { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var grupmosha = await _context.GrupmoshatT.FirstOrDefaultAsync(x => x.Id == request.GrupmoshaId);
                var ushtrimi = await _context.Ushtrimet.FirstOrDefaultAsync(x => x.Id == request.ushtrimiId);
                request.Orari.Ushtrimi=ushtrimi;
                request.Orari.Grupmosha= grupmosha;
                _context.Oraret.Add(request.Orari);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}