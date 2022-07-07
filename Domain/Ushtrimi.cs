using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Ushtrimi
    {
        public Guid Id {get; set;}
        public string EmriUshtrimit { get; set; }
        public string Pershkrimi {get; set;}
         public ICollection <Orari> Oraret {get; set;}
        public ICollection<Raporti> Raportet {get; set;}
    }
}