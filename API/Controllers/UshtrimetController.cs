using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Ushtrimet;
using Microsoft.AspNetCore.Mvc;
using Domain;

namespace API.Controllers
{
    public class UshtrimetController : BaseApiController
    {
        [HttpGet]

        public async Task<ActionResult<List<Ushtrimi>>>GetUshtrimet(){
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Ushtrimi>>GetUshtrimi(Guid id){
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateUshtrimi(Ushtrimi ushtrimi)
        {
            return Ok(await Mediator.Send(new Create.Command {Ushtrimi = ushtrimi}));
        }

          [HttpPut("{id}")]
        public async Task<IActionResult>EditUshtrimi(Guid id, Ushtrimi ushtrimi)
        {
            ushtrimi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Ushtrimi = ushtrimi}));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteUshtrimet(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}