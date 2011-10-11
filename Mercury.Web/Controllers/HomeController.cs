using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mercury.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetData()
        {
            var jsonData = new
            {
                total = 1,//pageCount,
                page = 1,
                records = 100, // implement later 
                rows = (from n in Enumerable.Range(0, 25)
                        select new
                        {
                            id = n,
                            cell = new[]
                                      {
                                          "","First", "Last", "Phone", "Kansas City", "KS", "66109"
                                      }
                        }).ToArray()
            };
            return Json(jsonData);
        }
    }
}
