using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoEditeDomain.Entities.User;

namespace ProjetoEditeData.Map.Users
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            //Table
            builder.ToTable("User");

            //PrimaryKey
            builder.HasKey(x => x.Id);

            //Property
            builder.Property(x => x.Id)
                .IsRequired()
                .HasColumnName("Id");

            builder.Property(x => x.IdPerson)
                .IsRequired()
                .HasColumnName("IdPerson");

            builder.Property(x => x.UserType)
                .IsRequired()
                .HasColumnName("IdUserType");

            builder.Property(x => x.Login)
                .IsRequired()
                .HasColumnName("Login")
                .HasMaxLength(500);

            builder.Property(x => x.Password)
                .IsRequired()
                .HasColumnName("Password")
                .HasMaxLength(250);

            //Relationship
            builder.HasOne(x => x.Person)
                .WithOne()
                .HasForeignKey<User>(x => x.IdPerson);
        }
    }
}
