using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialNetworkAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : Controller
    {
        private readonly SocialNetworkDbContext _context;

        public UsersController(SocialNetworkDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        // GET: Users
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [Route("getuserid")]
        [HttpGet]
        public async Task<ActionResult<User>> GetUserId(string username)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
        }

        [HttpGet("{id}")]
        // GET: Users/5
        public async Task<ActionResult<User>> GetUser(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostArticle(User user)
        {
            var tempUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);
            tempUser.FirstName = user.FirstName;
            tempUser.LastName = user.LastName;
            tempUser.Email = user.Email;
            tempUser.City = user.City;
            tempUser.About = user.About;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = tempUser.Id }, tempUser);
        }

        // GET: Users/Edit/5
        public async Task<ActionResult<User>> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Route("edituser")]
        [HttpPost]
        public async Task<ActionResult<User>> Edit(string firstname, string username)   //([FromBody] User user)
        {
            var tempUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            try
            {
                tempUser.FirstName = firstname;

                _context.Update(tempUser);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(tempUser.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return tempUser;
        }

        // GET: Users/Delete/5
        public async Task<ActionResult<User>> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var user = await _context.Users.FindAsync(id);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(GetUsers));
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(u => u.Id == id);
        }
    }
}
