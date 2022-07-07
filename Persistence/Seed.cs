using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            // if (!userManager.Users.Any())
            // {
            //     var users = new List<AppUser>
            //     {
            //         new AppUser{DisplayName = "Bob", UserName = "bob", Email = "bob@test.com"},
            //         new AppUser{DisplayName = "Tom", UserName = "tom", Email = "tom@test.com"},
            //         new AppUser{DisplayName = "Jane", UserName = "jane", Email = "jane@test.com"},
            //         new AppUser{DisplayName = "Gentrit", UserName = "gentrit", Email = "gentrit@gmail.com"},
            //     };

            //     foreach (var user in users)
            //     {
            //         await userManager.CreateAsync(user, "Pa$$w0rd");
            //     }
            // }

            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Kampion - Champions League",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Fitues i finales se kompeticionit te Champions League",
                    Category = "Ekipa-A",
                    City = "Paris",
                    Venue = "Le Parc des Princes",
                },
                new Activity
                {
                    Title = "Kampion",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Kampion ne Ligen e grupmoshave U-16",
                    Category = "Grupmoshat-U16",
                    City = "Prishtine",
                    Venue = "Fadil Vokrri",
                },
                new Activity
                {
                    Title = "Nenkampion",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Nenkampion i kupes se Grupmoshave U-14",
                    Category = "Grupmoshat-U14",
                    City = "Gjilan",
                    Venue = "Gjilan",
                },
                new Activity
                {
                    Title = "Kampion",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Kampion ne Ligen e grrupmoshave U-12",
                    Category = "Grupmoshat-U12",
                    City = "Ferizaj",
                    Venue = "Ferizaj",
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }


        public static async Task SeedDataTrajneri(DataContext context, UserManager<Trajneri> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<Trajneri>
                {
                    new Trajneri{Emri = "Bob", UserName = "bob", Email = "bob@test.com"},
                    new Trajneri{Emri = "Tom", UserName = "tom", Email = "tom@test.com"},
                    new Trajneri{Emri = "Jane", UserName = "jane", Email = "jane@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
        }

        
        public static async Task SeedDataLojtari(DataContext context, UserManager<Lojtari> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<Lojtari>
                {
                    new Lojtari{Emri = "Lionel", UserName = "lionel", Email = "lionel@player.com"},
                    new Lojtari{Emri = "Cristiano",UserName = "cristiano",  Email = "cristiano@player.com"},
                    new Lojtari{Emri = "Mohamed",UserName = "mohamed", Email = "mohamed@player.com"},
                };

                foreach (var user in users)
                {
                    await  userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
        }


        public static async Task SeedDataGrupmoshat(DataContext context)
        {
         
            if (context.GrupmoshatT.Any()) return;
            var grupmoshatT = new List<Grupmoshat>
            {
                new Grupmoshat
                {
                    EmriGrupmoshes = "Ekipa A"
                  
                },
                new Grupmoshat
                {
                    EmriGrupmoshes = "Grupmosha U18"
                },
                 new Grupmoshat
                {
                    EmriGrupmoshes = "Grupmosha U16"
                },
                 new Grupmoshat
                {
                    EmriGrupmoshes = "Grupmosha U14"
                },
                  new Grupmoshat
                {
                    EmriGrupmoshes = "Grupmosha U12"
                }
            };
                
            await context.GrupmoshatT.AddRangeAsync(grupmoshatT);
            await context.SaveChangesAsync();
        }


        public static async Task SeedDataUshtrimi(DataContext context)
        {
             if(context.Ushtrimet.Any()) return;
            var ushtrimet = new List<Ushtrimi>
            {
                new Ushtrimi
                {
                    EmriUshtrimit = "Gjuajtje te lira",
                    Pershkrimi="Sot.............",
                },
                new Ushtrimi
                {
                    EmriUshtrimit = "Penallti",
                    Pershkrimi="Sot.............",
                },
                new Ushtrimi
                {
                    EmriUshtrimit = "Fittnes",
                    Pershkrimi="Sot.............",
                }
            };
             await context.Ushtrimet.AddRangeAsync(ushtrimet);
            await context.SaveChangesAsync();        
        }



        public static async Task SeedDataNjoftim(DataContext context, UserManager<AppUser> userManager)
        {
             if(context.Njoftimet.Any()) return;
            var njoftimet = new List<Njoftim>
            {
                new Njoftim
                {
                    Title = "Njoftim1....",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Kampion ne Ligen e grupmoshave U-16",
                    Category = "Grupmoshat-U16",
                },
                new Njoftim
                {
                    Title = "Njoftim2...",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Kampion ne Ligen e grupmoshave U-16",
                    Category = "Grupmoshat-U16",
                },
                new Njoftim
                {
                    Title = "Njoftim3...",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Kampion ne Ligen e grupmoshave U-16",
                    Category = "Grupmoshat-U16",
                }
            };
             await context.Njoftimet.AddRangeAsync(njoftimet);
            await context.SaveChangesAsync();        
        }
    }
}