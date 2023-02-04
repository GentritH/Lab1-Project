using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace API.Controllers
{
//    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class LojtariAccountController : ControllerBase
    {
        private readonly UserManager<Lojtari> _userManager;
        private readonly SignInManager<Lojtari> _signInManager;

        private readonly TokenService _tokenService;

        public LojtariAccountController(

          UserManager<Lojtari> userManager, SignInManager<Lojtari> signInManager, TokenService tokenService
      
      )
        {
             _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;

        
        }

        
        [AllowAnonymous]
        [HttpPost("loginLojtari")]
        public async Task<ActionResult<LojtariDto>> LoginLojtari(LoginDto loginDto)
        {
            var lojtari = await _userManager.FindByEmailAsync(loginDto.Email);

            if(lojtari == null) return Unauthorized();
            var result = await _signInManager.CheckPasswordSignInAsync(lojtari, loginDto.Password, false);

            if(result.Succeeded)
            {
               return CreateUserLojtari(lojtari);
            }
            return Unauthorized();
        }

       
    
        [HttpPost("registerLojtari")]
        public async Task<ActionResult<LojtariDto>> Register(RegisterLojtariDto registerDto)
        {
            if(await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
            }
            if(await _userManager.Users.AnyAsync(x => x.UserName == registerDto.Username))
            {
                 ModelState.AddModelError("username", "Username taken");
                return ValidationProblem();
            }

            var lojtari = new Lojtari
            {
                Emri = registerDto.Emri,
                Mbiemri =  registerDto.Mbiemri,
                Email = registerDto.Email,
                UserName = registerDto.Username,
                EmriPrindit = registerDto.EmriPrindit,
                DataLindjes = registerDto.DataLindjes,
                Grupmosha = registerDto.Grupmosha,
                VitiRegjistrimit = registerDto.VitiRegjistrimit
            };

            var result = await _userManager.CreateAsync(lojtari, registerDto.Password);

            if(result.Succeeded)
            {
                return CreateUserLojtari(lojtari);
            }
            return BadRequest("Problem registering lojtar!");
        }

           

        [Authorize]
         [HttpGet("currentLojtari")]
           public async Task<ActionResult<LojtariDto>> GetCurrentLojtari()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreateUserLojtari(user);
        }
         
               private LojtariDto CreateUserLojtari(Lojtari lojtari)
        {
            return new LojtariDto
            {
                Id =  lojtari.Id,
                Emri =  lojtari.Emri,
                Mbiemri = lojtari.Mbiemri,
                Token = _tokenService.CreateTokenLojtari(lojtari),
                EmriPrindit = lojtari.EmriPrindit,
                DataLindjes = lojtari.DataLindjes,
                Grupmosha = lojtari.Grupmosha,
                VitiRegjistrimit = lojtari.VitiRegjistrimit,
            };
        }

    }
}