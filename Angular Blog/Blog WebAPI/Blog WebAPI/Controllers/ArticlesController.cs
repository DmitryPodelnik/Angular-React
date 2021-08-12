using Blog_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog_WebAPI.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class ArticlesController : Controller
    {
        private readonly BlogDbContext _context;

        public ArticlesController(BlogDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        // GET: Articles
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            return await _context.Articles.ToListAsync();
        }

        [HttpGet("{id}")]
        // GET: Articles/Details/5
        public async Task<ActionResult<Article>> GetArticle(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var article = await _context.Articles
                .FirstOrDefaultAsync(m => m.Id == id);
            if (article == null)
            {
                return NotFound();
            }

            return article;
        }

        [Route("add")]
        [HttpPost]
        public async Task<ActionResult<Article>> AddArticle(string title, string content, string tags, IFormFile image) // [Bind("Id,Title,Content,Date,Username")]
        {
            Article newArticle = new();

            if (title != null && content != null)
            {
                newArticle.Title = title;
                newArticle.Content = content;
                newArticle.Date = DateTime.Now.ToShortDateString();
                newArticle.UserId = 1;
                newArticle.Username = (await _context.Users.FirstOrDefaultAsync(u => u.Id == newArticle.UserId)).Username;

                tags = tags.Replace(",", " ");
                tags = tags.Replace("  ", " ");
                var tempTags = tags.Split(" ");


                StringBuilder stringTags = new("");

                foreach (var tag in tempTags)
                {
                    stringTags.Append(tag + ", ");
                }
                newArticle.Tags = stringTags.ToString();

                if (image != null)
                {
                    byte[] imageData = null;
                    // считываем переданный файл в массив байтов
                    using (var binaryReader = new BinaryReader(image.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)image.Length);
                    }
                    // установка массива байтов
                    newArticle.Image = imageData;
                }

                _context.Articles.Add(newArticle);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetArticle", new { id = newArticle.Id }, newArticle);
            }

            return NotFound();
        }

        [Route("edit")]
        [HttpGet]
        public async Task<ActionResult<Article>> Edit(Article article, IFormFile image)
        {
#pragma warning disable CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
            if (article == null)
#pragma warning restore CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
            {
                return NotFound();
            }

            var editArticle = await _context.Articles.FirstOrDefaultAsync(a => a.Id == article.Id);
            if (editArticle == null)
            {
                return NotFound();
            }

            try
            {
                editArticle.Title = article.Title;
                editArticle.Content = article.Content;
                editArticle.Date = article.Date;
                editArticle.Username = article.Username;
                editArticle.Tags = article.Tags;

                if (image != null)
                {
                    byte[] imageData = null;
                    // считываем переданный файл в массив байтов
                    using (var binaryReader = new BinaryReader(image.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)image.Length);
                    }
                    // установка массива байтов
                    editArticle.Image = imageData;
                }

                _context.Update(editArticle);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(editArticle.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(GetArticles));
        }

        [Route("edit")]
        [HttpPost]
        public async Task<ActionResult<Article>> Edit (Article article)
        {
#pragma warning disable CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
            if (article == null)
#pragma warning restore CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
            {
                return NotFound();
            }

            var editArticle = await _context.Articles.FirstOrDefaultAsync(a => a.Id == article.Id);
            if (editArticle == null)
            {
                return NotFound();
            }

            try
            {
                editArticle.Title = article.Title;
                editArticle.Content = article.Content;
                editArticle.Date = article.Date;
                editArticle.Username = article.Username;
                editArticle.Tags = article.Tags;

                _context.Update(editArticle);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(editArticle.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(GetArticles));
        }

        [Route("delete/{id:int}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var article = await _context.Articles
                .FirstOrDefaultAsync(m => m.Id == id);
            if (article == null)
            {
                return NotFound();
            }

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(GetArticles));
        }

        private bool ArticleExists(int id)
        {
            return _context.Articles.Any(e => e.Id == id);
        }

        [Route("search")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> SearchArticlesByName(string articleName)
        {
            return await _context.Articles
                                    .Where(p => p.Title.ToLower().Contains(articleName.ToLower()))
                                    .ToListAsync();
        }
    }
}
