using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Application.GrupmoshatT;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{

    [AllowAnonymous]
    public class GrupmoshatTController : BaseApiController
    {
        
      
        [HttpGet]

        public async Task<ActionResult<List<Grupmoshat>>> GetGrupmoshatT() 
        {
             return await Mediator.Send(new List.Query());
        }    
    
        [HttpGet("{id}")]

        public async Task<ActionResult<Grupmoshat>> GetGrupmoshat(Guid id)
        {
              return  await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult>CreateGrupmoshat([FromBody]Grupmoshat grupmoshat)
        {
            return Ok(await Mediator.Send(new Create.Command {Grupmoshat = grupmoshat}));
        }

             [HttpPut("{id}")]

        public async Task<IActionResult>EditGrupmoshat(Guid id,Grupmoshat grupmoshat)
        {
            grupmoshat.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Grupmoshat=grupmoshat}));
        }

         [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteGrupmoshat(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }


    } 
}