using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Trajneri, Trajneri>();
            CreateMap<Lojtari, Lojtari>();
            CreateMap<Njoftim, Njoftim>();
        }
    }
}