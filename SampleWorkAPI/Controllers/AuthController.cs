using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SampleWorkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login()
        {
            return Ok("Login successful");
        }

        [HttpPost("register")]
        public IActionResult Register()
        {
            return Ok("Registration successful");
        }
    }
}
