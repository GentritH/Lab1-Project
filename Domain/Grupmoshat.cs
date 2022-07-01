using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Grupmoshat
    {
        public Guid Id { get; set; }
        
        public string EmriGrupmoshes  { get; set; }
        
        public ICollection <Orari> Oraret {get; set;}

        public ICollection<Raporti> Raportet {get; set;}

    }
}  