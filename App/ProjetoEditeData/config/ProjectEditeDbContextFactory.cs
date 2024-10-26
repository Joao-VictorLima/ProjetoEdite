using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace ProjetoEditeData.Context
{
    public class ProjectEditeDbContextFactory : IDesignTimeDbContextFactory<ProjectEditeDbContext>
    {
        public ProjectEditeDbContext CreateDbContext(string[] args = null)
        {
            // Define a configuração de ambiente
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ProjetoEdite/ProjetoEdite.Server")) // Diretório atual
                .AddJsonFile("appsettings.json") // Adiciona o arquivo de configuração
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<ProjectEditeDbContext>();
            // Usa a string de conexão definida no arquivo de configuração
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));

            return new ProjectEditeDbContext(optionsBuilder.Options);
        }
    }
}