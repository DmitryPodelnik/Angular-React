using Blog_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        [HttpGet]
        public async Task<ActionResult<Article>> AddArticle(string title, string content, string tags) // [Bind("Id,Title,Content,Date,Username")]
        {
            Article newArticle = new();

            if (title != null && content != null)
            {
                newArticle.Title = title;
                newArticle.Content = content;
                newArticle.Date = DateTime.Now.ToShortDateString();
                newArticle.UserId = 1;
                newArticle.Username = (await _context.Users.FirstOrDefaultAsync(u => u.Id == newArticle.UserId)).Username;

                tags = tags.Replace(",", "");
                var tempTags = tags.Split(" ");


                StringBuilder stringTags = new("");

                foreach (var tag in tempTags)
                {
                    stringTags.Append(tag + ", ");
                }
                newArticle.Tags = stringTags.ToString();

                _context.Articles.Add(newArticle);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetArticle", new { id = newArticle.Id }, newArticle);
            }

            return NotFound();
        }

        [Route("edit/{id:int}")]
        public async Task<ActionResult<Article>> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var article = await _context.Articles.FindAsync(id);
            if (article == null)
            {
                return NotFound();
            }

            try
            {
                _context.Update(article);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(article.Id))
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
