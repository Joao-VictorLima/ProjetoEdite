using ProjetoEditeDomain.Entities;

namespace ProjetoEditeDomain.Entities
{
    public class Like
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public virtual Post Post { get; set; }
        public long UserId { get; set; } // ID do usuário que curtiu
        public virtual User LikedBy { get; set; }
    }
}