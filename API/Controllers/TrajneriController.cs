using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.UserTrajneri;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;



namespace API.Controllers
{
    [AllowAnonymous]
    public class TrajneriController: BaseApiController
    { 
        [HttpGet]
        public async Task<IActionResult> GetTrajnerin()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTrajnerinSipasId(string id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateTrajneri(Trajneri trajneri)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Trajneri = trajneri}));
        }

         [HttpPut("{id}")]
        public async Task<IActionResult>EditTrajneri(string id, Trajneri trajneri)
        {
            trajneri.Id = id;
            // ------------------------------------------  Trajneri = trajneri
            return Ok(await Mediator.Send(new Edit.Command{Trajneri = trajneri}));
        }

   
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrajneri(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }

    }

}