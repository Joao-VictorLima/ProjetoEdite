using ProjetoEdite.Server.Models.Usuarios;

namespace ProjetoEdite.Server.GraphQl.Types
{
    public class UsuarioType : ObjectType<Usuario>
    {
        protected override void Configure(IObjectTypeDescriptor<Usuario> descriptor)
        {
            descriptor.Field(f => f.Id).Type<IdType>();
            descriptor.Field(f => f.Login).Type<StringType>();
            descriptor.Field(f => f.Password).Type<StringType>();
        }
    }
}
