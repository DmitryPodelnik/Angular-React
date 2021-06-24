using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkAPI.Model
{
    public class SocialNetworkDbContext : DbContext
    {
        public SocialNetworkDbContext(DbContextOptions<SocialNetworkDbContext> options)
          : base(options)
        {
            if (Database.CanConnect())
                Database.EnsureDeleted();

            // Создаем БД
            Database.EnsureCreated();
        }
        public DbSet<User> Users { get; set; }
    }
}
