using System;
using System.Threading.Tasks;
using Application.Njoftimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
//    [AllowAnonymous]
    public class NjoftimetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetNjoftimet()
        {
            return Ok(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetNjoftim(Guid id)
        {
            return Ok(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateNjoftim(Njoftim njoftim)
        {
            return Ok(await Mediator.Send(new Create.Command {Njoftim = njoftim}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditNjoftim(Guid id, Njoftim njoftim)
        {
            njoftim.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Njoftim = njoftim}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNjoftim(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}