using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoEditeDomain.Entities;

namespace ProjetoEditeData.Map
{
    public class LikeMap : IEntityTypeConfiguration<Like>
    {
        public void Configure(EntityTypeBuilder<Like> builder)
        {
            builder.ToTable("Likes");
            builder.HasKey(l => l.Id);
            builder.HasOne(l => l.Post)
                   .WithMany(p => p.Likes)
                   .HasForeignKey(l => l.PostId);
            builder.HasOne(l => l.LikedBy)
                   .WithMany()
                   .HasForeignKey(l => l.UserId);
        }
    }
}