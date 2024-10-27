using ProjetoEditeDomain.Entities;

namespace ProjetoEditeDomain.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }

        // ID e referência ao post que recebeu o comentário
        public int PostId { get; set; }
        public virtual Post Post { get; set; }

        // ID e referência ao usuário que criou o comentário
        public long UserId { get; set; }
        public virtual User CommentedBy { get; set; } // Usuário que comentou

        public virtual ICollection<Like> Likes { get; set; } = new List<Like>(); // Curtidas no comentário
    }
}
