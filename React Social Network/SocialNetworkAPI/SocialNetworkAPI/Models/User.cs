using SocialNetworkAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkAPI.Model
{
    [Table("Users")]
    public class User
    {
        [Column("Id")]  // Можно было не указывать потому, что так было бы по умолчанию, благодаря соглашению о наименованиях EF
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(50)]
        [Required]
        public string FirstName { get; set; }

        [StringLength(50)]
        [Required]
        public string LastName { get; set; }

        [StringLength(50)]
        [Required]
        public string Username { get; set; }

        [StringLength(50)]
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [StringLength(20)]
        [Required]
        public string Gender { get; set; }

        [Required]
        public byte Age { get; set; }

        [StringLength(30)]
        [Required]
        public string City { get; set; }

        [Required]
        public string About { get; set; }

        [NotMapped]
        public Image Avatar { get; set; }

        public string Role { get; set; }

        public List<Article> Articles { get; set; } = new();
    }
}
