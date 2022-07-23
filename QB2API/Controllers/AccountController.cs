using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QB2API.Model;

namespace QB2API.Controllers
{
    [Route("api")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        [HttpPost("login")]
        public UserState login([FromBody] UserState _state)
        {


            Model.QBDBContext c = new QBDBContext();
            if (c.Users.Where(x => x.Email == _state.EmailID).Count() > 0)
            {

                _state.Authkey = c.Users
                       .Where(x => x.Email == _state.EmailID).Select(x => x.Guid)
                       .ToString().GetHashCode().ToString();



            }

            return _state;
        }
    }

    public class UserState
    {
        public string? EmailID { get; set; }
        public string? Authkey { get; set; }

    }
}
