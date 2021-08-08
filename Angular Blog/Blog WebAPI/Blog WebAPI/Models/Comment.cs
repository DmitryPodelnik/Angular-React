using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_WebAPI.Models
{
    [Table("Comments")]
    public class Comment
    {
        [Column("Id")]  // Можно было не указывать потому, что так было бы по умолчанию, благодаря соглашению о наименованиях EF
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string Content { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public string Date { get; set; }

        public int? UserId { get; set; }
        // Навигационное свойство
        //
        // По умолчанию для навигационного свойства использовалось бы название ****
        // в соответствии с соглашениями об именах полей в EF. Но поскольку я хочу,
        // чтобы поле, являющееся внешним ключом, называлось в таблице не ****,
        // а GroupId, то использую атрибут [ForeignKey] с нужным мне именем.
        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        public int ArticleId { get; set; }
        // Навигационное свойство
        //
        // По умолчанию для навигационного свойства использовалось бы название ****
        // в соответствии с соглашениями об именах полей в EF. Но поскольку я хочу,
        // чтобы поле, являющееся внешним ключом, называлось в таблице не ****,
        // а GroupId, то использую атрибут [ForeignKey] с нужным мне именем.
        [ForeignKey("ArticleId")]
        public virtual Article Article { get; set; }
    }
}
