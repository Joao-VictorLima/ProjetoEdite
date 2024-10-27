using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoEditeDomain.Entities;

namespace ProjetoEditeData.Map
{
    public class SaveMap : IEntityTypeConfiguration<Save>
    {
        public void Configure(EntityTypeBuilder<Save> builder)
        {
            builder.ToTable("Saves");
            builder.HasKey(s => s.Id);
            builder.HasOne(s => s.Post)
                   .WithMany(p => p.Saves)
                   .HasForeignKey(s => s.PostId);
            builder.HasOne(s => s.SavedBy)
                   .WithMany()
                   .HasForeignKey(s => s.UserId);
        }
    }
}
