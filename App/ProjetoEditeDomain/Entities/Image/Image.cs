using ProjetoEditeDomain.Entities;


namespace ProjetoEditeDomain.Entities
{
    public class Image
    {
        public int Id { get; set; }
        public string Url { get; set; } // URL opcional caso as imagens também possam ser armazenadas externamente
        public byte[] Data { get; set; } // Armazena a imagem em formato binário

        // ID e referência ao post que contém a imagem
        public int PostId { get; set; }
        public virtual Post Post { get; set; }
    }
}
