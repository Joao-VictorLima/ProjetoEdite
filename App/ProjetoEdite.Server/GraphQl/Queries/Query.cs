using Microsoft.EntityFrameworkCore;
using ProjetoEdite.Server.Data.Context;
using ProjetoEdite.Server.Models.Usuarios;

namespace ProjetoEdite.Server.GraphQl.Queries
{
    public class Query
    {
        private readonly ProjetoEditeDbContext _context;

        public Query(ProjetoEditeDbContext context)
        {
            _context = context;
        }

        public async Task<List<Usuario>> GetUsuariosAsync()
        {
            var usuarios = await _context.Usuarios.ToListAsync();
            return usuarios;
        }
    }
}
