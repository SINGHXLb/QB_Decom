using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QB2API.Helper;
using QB2API.Model;
using QB2API.Model.Security;

namespace QB2API.Controllers
{
    [Route("api")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly JwtSettings jwtSettings;
        public AccountController(JwtSettings jwtSettings)
        {
            this.jwtSettings = jwtSettings;
        }


        [HttpPost("login")]
        public IActionResult login([FromBody] UserStateDTO _state)
        {

        Model.QBDBContext c = new QBDBContext();

            try
            {
                var Token = new UserTokens();
                var Valid = (c.Users.Where(x => x.Email == _state.EmailID).Count() > 0);
                if (Valid)
                {
                    var user = c.Users.Where(x => x.Email == _state.EmailID).First();
                    Token = JwtHelpers.GenTokenkey(new UserTokens()
                    {
                        EmailId = user.Email,
                        Guid = user.Guid,
                        UserName = user.FirstName,
                        Id = user.Email,
                    }, jwtSettings);
                }
                else
                {
                    return BadRequest();
                }
                return Ok(Token);
            }
            catch (Exception ex)
            {
                throw;
            }
          
        }
    }

    public class UserStateDTO 
    {
      public string? EmailID { get; set; }
      public string? Authkey { get; set; }

    }
}
