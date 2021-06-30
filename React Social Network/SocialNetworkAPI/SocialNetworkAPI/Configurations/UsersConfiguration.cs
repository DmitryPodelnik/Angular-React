using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SocialNetworkAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SocialNetworkAPI.Configurations
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
                               Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("123123"))), Gender = "Male", Age = 20 },
                    new User { Id = 2, FirstName = "Dmitry2", LastName = "Podelnik2", Username = "dmitrypodelnik2", Email = "dmitrypodelnik2.developer@gmail.com",
                               Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("1231232"))), Gender = "Male", Age = 22 },
                    new User { Id = 3, FirstName = "Dmitry3", LastName = "Podelnik3", Username = "dmitrypodelnik3", Email = "dmitrypodelnik3.developer@gmail.com",
                               Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("1231233"))), Gender = "Male", Age = 24 },
                });
        }
    }
}
