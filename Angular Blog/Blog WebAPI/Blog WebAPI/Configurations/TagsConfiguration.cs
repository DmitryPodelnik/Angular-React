using Blog_WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_WebAPI.Configurations
{
    public class TagsConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.HasData(
                new Tag[]
                {
                    new Tag { Id = 1, Content = "C#"},
                    new Tag { Id = 2, Content = "C++"},
                    new Tag { Id = 3, Content = "C"},
                    new Tag { Id = 4, Content = "WPF"},
                    new Tag { Id = 5, Content = "NET"},
                    new Tag { Id = 6, Content = "ADO"},
                    new Tag { Id = 7, Content = "ASP"},
                });
        }
    }
}
