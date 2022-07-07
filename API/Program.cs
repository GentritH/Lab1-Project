using System;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            using var scope = host.Services.CreateScope();

            var services = scope.ServiceProvider;

            try 
            {
                var context = services.GetRequiredService<DataContext>();
                var userManager = services.GetRequiredService<UserManager<AppUser>>();
                var userManagerTrajneri = services.GetRequiredService<UserManager<Trajneri>>();
                var lojtariManager = services.GetRequiredService<UserManager<Lojtari>>();

                await context.Database.MigrateAsync();
                // -------> x ------------> userManager
                await Seed.SeedData(context, userManager);
                await Seed.SeedDataNjoftim(context, userManager);
                await Seed.SeedDataTrajneri(context, userManagerTrajneri);
                await Seed.SeedDataLojtari(context, lojtariManager);
                await Seed.SeedDataGrupmoshat(context);
                await Seed.SeedDataUshtrimi(context);
            }
            catch (Exception ex)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occured during migraiton");
            }

            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
