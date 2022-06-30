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
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class TrajneriAccountController : ControllerBase
    {

        private readonly UserManager<Trajneri> _userManager;
        private readonly SignInManager<Trajneri> _signInManager;
     
        private readonly TokenService _tokenService;

        public TrajneriAccountController(UserManager<Trajneri> userManager, SignInManager<Trajneri> signInManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;

        }
      

      

         [AllowAnonymous]
         [HttpPost("loginTrajneri")]
        public async Task<ActionResult<TrajneriDto>> LoginTrajneri(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized();

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
            {
                return CreateUserTrajneri(user);
            }

            return Unauthorized();
        } 

        
        

        [HttpPost("registerTrajneri")]
        public async Task<ActionResult<TrajneriDto>> Register(RegisterTrajneriDto registerTrajneriDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerTrajneriDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
            }
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerTrajneriDto.UserName))
            {
                ModelState.AddModelError("username", "Username taken");
                return ValidationProblem();
            }

            var user = new Trajneri
            {
               
                Emri = registerTrajneriDto.Emri,
                Roli = registerTrajneriDto.Roli,
                Mbiemri = registerTrajneriDto.Mbiemri,
                Email = registerTrajneriDto.Email,
                UserName = registerTrajneriDto.UserName
            
               
            };

            var result = await _userManager.CreateAsync(user, registerTrajneriDto.Password);

            if (result.Succeeded)
            {
                return CreateUserTrajneri(user);
            }

            return BadRequest("Problem registering user");
        }
    
       
    

         [Authorize]
         [HttpGet("currentTrajneri")]
       
           public async Task<ActionResult<TrajneriDto>> getcurrent()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreateUserTrajneri(user);
    
        }
   

            private TrajneriDto CreateUserTrajneri(Trajneri trajneri)
        {
            return new TrajneriDto
            {
                Id = trajneri.Id,
                Emri = trajneri.Emri,
                Email = trajneri.Email,
                Token = _tokenService.CreateTokenTrajner(trajneri),
            };
        }

    }
}