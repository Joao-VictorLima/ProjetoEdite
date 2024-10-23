using ProjetoEditeDomain.Entities.Core;
using ProjetoEditeDomain.Types;

namespace ProjetoEditeDomain.Entities.User
{
    public class User
    {
        public long Id { get; set; }
        public long IdPerson { get; set; }
        public UserTypeEnum UserType { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public virtual Person Person { get; set; }
    }
}
