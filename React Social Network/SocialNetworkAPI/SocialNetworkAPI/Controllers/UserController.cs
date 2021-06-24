using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using SocialNetworkAPI.Model;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SocialNetworkAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
		private readonly SocialNetworkDbContext _context;

		public UserController(SocialNetworkDbContext context)
		{
			_context = context;

			if (_context.Users.Count() == 0)
			{

				var sha256 = new SHA256Managed();
				var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("qqq")));

				_context.Users.Add(new Model.User
				{
					FirstName = "",
					LastName = "",
					Email = "",
					Username = "",
					Age = 20,
					Gender = "",
					Password = passwordHash,
				});
				_context.SaveChanges();
			}

		}

		[Route("token")]
		[HttpPost]
		public async Task<IActionResult> Token([FromBody] User user)
		{
			var claims = await GetIdentity(user.Username, user.Password);
			if (claims == null)
			{
				return Unauthorized();
			}

			var now = DateTime.UtcNow;
			var jwt = new JwtSecurityToken(
					issuer: AuthOptions.ISSUER,
					audience: AuthOptions.AUDIENCE,
					notBefore: now,
					claims: claims,
					expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
					signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

			return Json(encodedJwt);
		}
		private async Task<IReadOnlyCollection<Claim>> GetIdentity(string username, string password)
		{
			List<Claim> claims = null;

			var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);

			if (user != null)
			{
				var sha256 = new SHA256Managed();
				var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));

				if (passwordHash == user.Password)
				{
					claims = new List<Claim>
					{
						new Claim(ClaimsIdentity.DefaultNameClaimType, user.Username),
						new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
					};
				}
			}

			return claims;
		}
	}
}
