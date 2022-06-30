using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Lojtaret;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace API.Controllers
{

    public class LojtariController : BaseApiController
    {
        

        [HttpGet]
        public async Task<IActionResult> GetLojtaret()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLojtariSipasId(string id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }
        

        [HttpPost]
        public async Task<IActionResult> CreateLojtari(Lojtari lojtari)
        {
            return HandleResult(await Mediator.Send(new Create.Command{Lojtari = lojtari}));
        }

            

         [HttpPut("{id}")]
        public async Task<IActionResult> EditLojtari(string id, Lojtari lojtari)
        {
            lojtari.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Lojtari = lojtari}));
        }

   

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLojtari(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }

        // [HttpGet("grupmosha&{emriGrupmoshes}")]
        // public async Task<ActionResult<List<Lojtari>>> GetLojtaretByGrupmosha(string emriGrupmoshes)
        // {
        //     return await Mediator.Send(new ListByClass.Query{EmriGrupmoshes=emriGrupmoshes});
        // }

    }
}

