using System.Collections.Generic;
using System.Web.Http;

namespace AngularDemoApp.Controllers
{
    public class ListController : ApiController
    {
        [HttpGet]
        [Route("api/v1/lists")]
        public List<ListView> Get()
        {
            return new List<ListView>
            {
                new ListView{ Id = 1, Name = "api list 1", Items = new List<string>{"api item 1", "api item 2"}},
                new ListView{ Id = 2, Name = "api list 2", Items = new List<string>{"api item 3", "api item 4"}},
            };
        } 
    }

    public class ListView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<string> Items { get; set; } 
    }
}