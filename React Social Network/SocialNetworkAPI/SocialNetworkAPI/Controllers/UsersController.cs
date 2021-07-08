using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialNetworkAPI.Model;
using SocialNetworkAPI.Models;
using System;
using System.Collections.Generic;
using System.IO;
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

        [Route("getfriends")]
        [HttpGet]
        // GET: Friends
        public async Task<ActionResult<IEnumerable<User>>> GetFriends(int userId)
        {
            var friends = await _context.Friends
                                    .Where(f => f.UserId == userId)
                                    .Join(_context.Users,
                                          f => f.FriendId,
                                          u => u.Id,
                                          (f, u) => new User
                                          {
                                              Id = u.Id,
                                              FirstName = u.FirstName,
                                              LastName = u.LastName,
                                              Username = u.Username,
                                              Email = u.Email,
                                              Password = u.Password,
                                              Gender = u.Gender,
                                              Age = u.Age,
                                              City = u.City,
                                              About = u.About,
                                              Followers = u.Followers,
                                              Avatar = u.Avatar,
                                              Role = u.Role,
                                              Articles = u.Articles
                                          })
                                          .ToListAsync();
            return friends;
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

        [HttpGet("getavatar/{id}")]
        public async Task<ActionResult<byte[]>> GetAvatar(int? id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

            if (user.Avatar == null)
            {
                return NotFound();
            }

            byte[] data = user.Avatar;

            // сохраним первый файл из списка
            using (FileStream fs = new FileStream($"wwwroot/Avatar_{user.Username}", FileMode.OpenOrCreate))
            {
                fs.Write(data, 0, data.Length);
            }

            return data;
        }

        [Route("followfriend")]
        [HttpPost]
        public async Task<ActionResult<User>> FollowFriend(int userId, int friendId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            var friend = await _context.Users.FirstOrDefaultAsync(f => f.Id == friendId);

            if (user.Id == friend.Id)
            {
                return NotFound();
            }

            var isAlreadyExists = await _context.Friends.FirstOrDefaultAsync((u) => u.UserId == user.Id && u.FriendId == friendId);

            if (isAlreadyExists != null)
            {
                return NotFound();
            }

            Friend newFriend = new();
            newFriend.UserId = user.Id;
            newFriend.FriendId = friend.Id;

            _context.Friends.Add(newFriend);
            await _context.SaveChangesAsync();

            return user;
        }

        [Route("register")]
        [HttpPost]
        public async Task<ActionResult<User>> AddUser([Bind("FirstName", "LastName", "Username", "Password", "Email", "City", "Age")]  User user, IFormFile avatar)
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

            if (avatar != null)
            {
                byte[] imageData = null;
                // считываем переданный файл в массив байтов
                using (var binaryReader = new BinaryReader(avatar.OpenReadStream()))
                {
                    imageData = binaryReader.ReadBytes((int)avatar.Length);
                }
                // установка массива байтов
                newUser.Avatar = imageData;
            }

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
        public async Task<ActionResult<User>> Edit([Bind("FirstName", "LastName", "Username", "Email", "City", "About")] User user, IFormFile avatar)   //string firstname, string username
        {
            var tempUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);
            try
            {
                tempUser.FirstName = user.FirstName;
                tempUser.LastName = user.LastName;
                tempUser.Email = user.Email;
                tempUser.City = user.City;
                tempUser.About = user.About;

                if (avatar != null)
                {
                    byte[] imageData = null;
                    // считываем переданный файл в массив байтов
                    using (var binaryReader = new BinaryReader(avatar.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)avatar.Length);
                    }
                    // установка массива байтов
                    tempUser.Avatar = imageData;
                }

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

        private bool UserExists(int id)
        {
            return _context.Users.Any(u => u.Id == id);
        }
    }
}
