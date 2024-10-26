using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoEditeDomain.Entities;

namespace ProjetoEditeData.Map
{
    public class ImageMap : IEntityTypeConfiguration<Image>
    {
        public void Configure(EntityTypeBuilder<Image> builder)
        {
            builder.ToTable("Images");
            builder.HasKey(i => i.Id);
            builder.HasOne(i => i.Post)
                   .WithMany(p => p.Images)
                   .HasForeignKey(i => i.PostId);
        }
    }
}
