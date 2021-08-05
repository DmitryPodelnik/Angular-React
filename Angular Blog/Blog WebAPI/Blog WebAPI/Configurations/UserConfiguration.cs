using Blog_WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace Blog_WebAPI.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        private SHA256Managed sha256 = new();

        public void Configure(EntityTypeBuilder<User> builder)
        {

        }
    }
}
