using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Ushtrimet
{
    public class Delete
    {
         public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var ushtrimi = await context.Ushtrimet.FindAsync(request.Id);

                context.Remove(ushtrimi);

                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}