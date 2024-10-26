using ProjetoEditeDomain.Entities;


namespace ProjetoEditeDomain.Entities
{
    public class Post
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public virtual ICollection<Image> Images { get; set; } = new List<Image>();
        public virtual ICollection<Like> Likes { get; set; } = new List<Like>();
        public virtual ICollection<Save> Saves { get; set; } = new List<Save>();
        public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
        public long UserId { get; set; } // ID do usuário que criou o post
        public virtual User CreatedBy { get; set; }  // Usuário que criou o post
    }
}