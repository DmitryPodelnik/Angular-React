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

        [StringLength(60)]
        [Required]
        public string Username { get; set; }

        [StringLength(100)]
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        // [Compare("Password", ErrorMessage = "Password confirmation is incorrect")]
        // [NotMapped]
        public string PasswordConfirmation { get; set; }

        [StringLength(50)]
        public string Gender { get; set; }

        [Required]
        public byte Age { get; set; }

        [StringLength(50)]
        [Required]
        public string City { get; set; }

        public string About { get; set; }

        public short Followers { get; set; }

        [NotMapped]
        public Image Avatar { get; set; }

        [Required]
        public string Role { get; set; }

        public List<Article> Articles { get; set; } = new();
    }
}
