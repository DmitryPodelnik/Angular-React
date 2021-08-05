using Blog_WebAPI.Configurations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_WebAPI.Models
{
    public class BlobContextDb : DbContext
    {
        public BlobContextDb(DbContextOptions<BlobContextDb> options)
         : base(options)
        {
            if (Database.CanConnect())
            Database.EnsureDeleted();

            //Создаем БД
            Database.EnsureCreated();
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Image> Images { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsersConfiguration());
            modelBuilder.ApplyConfiguration(new ArticlesConfiguration());
        }
    }
}
