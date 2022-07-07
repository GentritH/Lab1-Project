using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        
        public DbSet<Activity> Activities { get; set; }
        public DbSet<Trajneri> Trajneret {get; set;}
        public DbSet<Lojtari> Lojtaret {get;set;}
        public DbSet<Njoftim> Njoftimet { get; set; }
        public DbSet<Grupmoshat> GrupmoshatT { get; set; }
        public DbSet<Orari> Oraret{ get; set; }
        public DbSet<Ushtrimi> Ushtrimet {get; set;}
        public DbSet<Raporti> Raportet{ get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Raporti>()
                .HasKey(pk => new { pk.Id });
                builder.Entity<Raporti>()
                .HasOne(p => p.Grupmosha)
                .WithMany(p => p.Raportet)
                .HasForeignKey(pp => pp.GrupmoshaId);
                builder.Entity<Raporti>()
                .HasOne(p => p.Ushtrimi)
                .WithMany(p => p.Raportet)
                .HasForeignKey(pp => pp.UshtrimiId);
                builder.Entity<Raporti>()
                .HasOne(p => p.Lojtari)
                .WithMany(p => p.Raportet)
                .HasForeignKey(pp => pp.LojtariId);


                builder.Entity<Orari>()
                .HasKey(pk => new { pk.Id });
                 builder.Entity<Orari>()
                .HasOne(p => p.Grupmosha)
                .WithMany(p => p.Oraret)
                .HasForeignKey(pp => pp.GrupmoshaId);
                builder.Entity<Orari>()
                .HasOne(p => p.Ushtrimi)
                .WithMany(p => p.Oraret)
                .HasForeignKey(pp => pp.UshtrimiId);

        }
    }
}