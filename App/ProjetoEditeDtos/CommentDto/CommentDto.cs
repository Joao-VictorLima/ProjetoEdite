public class CommentDto
{
    public int Id { get; set; }
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public long UserId { get; set; }
    public string UserName { get; set; } // Nome do usuário que comentou
    public int LikeCount { get; set; }
}