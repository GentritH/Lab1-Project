using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Orari
    {
        public Guid Id { get; set; }
        public Guid GrupmoshaId { get; set; }
        public Grupmoshat Grupmosha { get; set; }

        public Guid UshtrimiId { get; set; }

        public Ushtrimi Ushtrimi { get; set; }

        public string Hene { get; set; }

        public string Marte { get; set; }

        public string Merkure { get; set; }

        public string Enjte { get; set; }

        public string Premte { get; set; }


    }
}