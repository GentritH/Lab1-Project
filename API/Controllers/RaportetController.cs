using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Raportet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class RaportetController : BaseApiController
    {
      
        [HttpPost("{UshtrimiId},{GrupmoshaId},{LojtariId}")]
        public async Task<IActionResult> CreateRaportet(Raporti raporti ,Guid UshtrimiId, Guid GrupmoshaId,string LojtariId)
        {
            return Ok(await Mediator.Send(new Create.Command {raporti = raporti, ushtrimiId=UshtrimiId, GrupmoshaId=GrupmoshaId, LojtariId = LojtariId}));
        }


     
      [HttpGet]
        public async Task<ActionResult<List<Raporti>>>getRaportet(){
            return await Mediator.Send(new List.Query());
        }   

      
        [HttpGet("{id}")]
        public async Task<ActionResult<Raporti>> getRaportin(Guid id)
        {
            return await Mediator.Send(new Details.Query{RaportiId = id});
        }

      
        [HttpPut("{id}")]


            public async Task<IActionResult> EditRaportin(Guid id,Raporti raporti){

            raporti.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{raportet = raporti}));
        }

       
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRaportin(Guid id){
            return Ok(await Mediator.Send(new Delete.Command{RaportetId = id}));
        }

    }
}