using Microsoft.EntityFrameworkCore;
using ProjetoEdite.Server.Models.Usuarios;
using System.Reflection;

namespace ProjetoEdite.Server.Data.Context
{
    public class ProjetoEditeDbContext : DbContext
    {
        public ProjetoEditeDbContext(DbContextOptions<ProjetoEditeDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()).ToList().ForEach(x => x.DeleteBehavior = DeleteBehavior.Restrict);
        }
    }
}
