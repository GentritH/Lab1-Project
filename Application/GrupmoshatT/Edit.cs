using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.GrupmoshatT
{
    public class Edit
    {
         public class Command : IRequest
        {
            public Grupmoshat Grupmoshat { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext context;
        private readonly IMapper mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            this.mapper = mapper;
            this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                 var grupmoshat = await context.GrupmoshatT.FindAsync(request.Grupmoshat.Id);

                   mapper.Map(request.Grupmoshat, grupmoshat);
                 
                  await context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}