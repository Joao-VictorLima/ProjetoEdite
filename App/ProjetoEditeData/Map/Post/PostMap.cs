using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoEditeDomain.Entities;

namespace ProjetoEditeData.Map
{
    public class PostMap : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.ToTable("Posts");
            builder.HasKey(p => p.Id);
            builder.HasMany(p => p.Images)
                   .WithOne(i => i.Post)
                   .HasForeignKey(i => i.PostId);
            builder.HasMany(p => p.Likes)
                   .WithOne(l => l.Post)
                   .HasForeignKey(l => l.PostId);
            builder.HasMany(p => p.Saves)
                   .WithOne(s => s.Post)
                   .HasForeignKey(s => s.PostId);
            builder.HasMany(p => p.Comments)
                   .WithOne(c => c.Post)
                   .HasForeignKey(c => c.PostId);
        }
    }
}