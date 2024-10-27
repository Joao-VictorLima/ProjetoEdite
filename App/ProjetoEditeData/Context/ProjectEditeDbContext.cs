using Microsoft.EntityFrameworkCore;
using ProjetoEditeDomain.Entities.Core;
using System.Reflection;
using ProjetoEditeDomain.Entities;

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
        public DbSet<Post> Posts { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Save> Saves { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Image> Images { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()).ToList().ForEach(x => x.DeleteBehavior = DeleteBehavior.Restrict);
        }
    }
}
