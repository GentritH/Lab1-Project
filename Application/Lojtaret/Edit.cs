using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Lojtaret
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Lojtari Lojtari { get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var result = await context.Lojtaret.FindAsync(request.Lojtari.Id);
                mapper.Map(request.Lojtari, result);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}