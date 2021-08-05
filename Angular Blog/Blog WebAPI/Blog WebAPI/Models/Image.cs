using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_WebAPI.Models
{
    public class Image
    {
        public Image() { }
        public Image(int id, string filename, string title, byte[] data)
        {
            Id = id;
            FileName = filename;
            Title = title;
            Data = data;
        }
        public int Id { get; set; }
        public string FileName { get; set; }
        public string Title { get; set; }
        public byte[] Data { get; set; }
    }
}
