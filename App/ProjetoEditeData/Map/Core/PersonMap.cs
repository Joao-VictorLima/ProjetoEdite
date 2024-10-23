using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoEditeDomain.Entities.Core;

namespace ProjetoEditeData.Map.Core
{
    public class PersonMap : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> builder)
        {
            //Table
            builder.ToTable("Person");

            //PrimaryKey
            builder.HasKey(x => x.Id);

            //Property
            builder.Property(x => x.Id)
                .IsRequired()
                .HasColumnName("Id");

            builder.Property(x => x.Name)
                .IsRequired()
                .HasColumnName("Name")
                .HasMaxLength(244);

            builder.Property(x => x.DocumentNumber)
                .IsRequired()
                .HasColumnName("DocumentNumber")
                .HasMaxLength(50); ;

            builder.Property(x => x.BithDate)
                .IsRequired()
                .HasColumnName("BithDate");

        }
    }
}
