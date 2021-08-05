using Blog_WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Blog_WebAPI.Configurations
{
    public class UsersConfiguration : IEntityTypeConfiguration<User>
    {
        private SHA256Managed sha256 = new();

        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(
                new User[]
                {
                    new User { Id = 1, FirstName = "Dmitry", LastName = "Podelnik", Username = "dmitrypodelnik", Email = "dmitrypodelnik.developer@gmail.com",
                               Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("123123"))), Role = "admin"},
                });
        }
    }
}
