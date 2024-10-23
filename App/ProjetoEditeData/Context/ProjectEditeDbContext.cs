using Microsoft.EntityFrameworkCore;
using ProjetoEditeDomain.Entities.Core;
using ProjetoEditeDomain.Entities.User;
using System.Reflection;

namespace ProjetoEditeData.Context
{
    public class ProjectEditeDbContext : DbContext
    {
        public ProjectEditeDbContext(DbContextOptions<ProjectEditeDbContext> options)
            : base(options)
        {
        }

        public DbSet<Person> People { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()).ToList().ForEach(x => x.DeleteBehavior = DeleteBehavior.Restrict);
        }
    }
}
