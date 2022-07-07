using System;

namespace Domain
{
    public class Raporti
    {

        public Guid Id {get; set;}
        public Guid GrupmoshaId  {get; set;}
        public Grupmoshat Grupmosha {get; set;}
        public Guid UshtrimiId {get; set;}
        public Ushtrimi Ushtrimi {get; set;}
        public string LojtariId {get; set;}
        public Lojtari Lojtari {get; set;}
        public string Muaji {get; set;}
        public string Java {get; set;}
        public string Angazhimi {get; set;}
        public string Performanca {get; set;}
        public string Aktivititeti {get; set;}
        public string Komenti {get; set;}


    }
}