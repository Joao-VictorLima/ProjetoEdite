using ProjetoEditeDomain.Entities;

namespace ProjetoEditeDomain.Entities
{
    public class Save
    {
        public int Id { get; set; }

        // ID e referência ao post que foi salvo
        public int PostId { get; set; }
        public virtual Post Post { get; set; }

        // ID e referência ao usuário que salvou o post
        public long UserId { get; set; }
        public virtual User SavedBy { get; set; } // Usuário que salvou o post
    }
}
