public class PostWithDetailsDto
{
    public int Id { get; set; }
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public IEnumerable<ImageDto> Images { get; set; }
    public int LikeCount { get; set; }
    public int SaveCount { get; set; }
    public IEnumerable<CommentDto> Comments { get; set; }

    public long UserId { get; set; }
    public string UserName { get; set; } // Nome do usuário que criou o post
}