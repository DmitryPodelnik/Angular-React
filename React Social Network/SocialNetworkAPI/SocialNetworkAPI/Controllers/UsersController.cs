using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialNetworkAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SocialNetworkAPI.Controllers
{
    [Route("api/[controller]")]

    public class UsersController : Controller
    {
        private readonly SocialNetworkDbContext _context;
        private SHA256Managed sha256 = new();

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

        [Route("register")]
        [HttpPost]
        public async Task<ActionResult<User>> AddUser([Bind("FirstName", "LastName", "Username", "Password", "Email", "City", "Age")]  User user)
        {
            var tempUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);

            if (tempUser != null)
            {
                return NotFound();
            }

            var isExist = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            
            if (isExist != null)
            {
                return NotFound();
            }

            User newUser = new();
            newUser.FirstName = user.FirstName;
            newUser.LastName = user.LastName;
            newUser.Username = user.Username;
            newUser.Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(user.Password)));
            newUser.Email = user.Email;
            newUser.City = user.City;
            newUser.Age = user.Age;
            newUser.Role = "user";
            //newUser.Avatar = user.Avatar;

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = newUser.Id }, newUser);
        }

        // GET: Users/Edit/5
        [Route("edituserfollowers")]
        public async Task<ActionResult<User>> EditFollowers([Bind("Username", "Followers")] User user)
        {
            var tempUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);
            tempUser.Followers = user.Followers;
  
            if (tempUser == null)
            {
                return NotFound();
            }

            _context.Update(tempUser);
            await _context.SaveChangesAsync();

            return user;
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Route("edituser")]
        [HttpPost]
        public async Task<ActionResult<User>> Edit([Bind("FirstName", "LastName", "Username", "Email", "City", "About")] User user)   //string firstname, string username
        {
            var tempUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);
            try
            {
                tempUser.FirstName = user.FirstName;
                tempUser.LastName = user.LastName;
                tempUser.Email = user.Email;
                tempUser.City = user.City;
                tempUser.About = user.About;

                _context.Update(tempUser);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(user.Id))
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
