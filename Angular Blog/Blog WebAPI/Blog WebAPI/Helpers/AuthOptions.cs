using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog_WebAPI.Helpers
{
    public class AuthOptions
    {
		public const string ISSUER = "PodelnikSocialNetwork";
		public const string AUDIENCE = "PodelnikSocialNetworkUser";
		const string KEY = "authentification_security_key!qwe123";
		public const int LIFETIME = 5;
		public static SymmetricSecurityKey GetSymmetricSecurityKey()
		{
			return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
		}
	}
}
