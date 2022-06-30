using System;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Domain
{
    public class Lojtari : IdentityUser
    {
       
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public string EmriPrindit { get; set; }
        public DateTime DataLindjes { get; set; }
        public string Grupmosha { get; set; }
        public int VitiRegjistrimit{ get; set; }
        public ICollection<Raporti> Raportet {get; set;}
    

    }

}