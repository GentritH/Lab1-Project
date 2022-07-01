using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Njoftimet
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {

            public Njoftim Njoftim { get; set; }
        }

//        public class CommandValidator : AbstractValidator<Command>
//        {
//            public CommandValidator()
//            {
//                RuleFor(x => x.Njoftim).SetValidator(new ActivityValidator());
//           }
//        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var njoftim = await _context.Njoftimet.FindAsync(request.Njoftim.Id);

                if (njoftim == null) return null;

                _mapper.Map(request.Njoftim, njoftim);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}