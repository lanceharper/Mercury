using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SignalR.Hubs;
using Mercury.Hubs;
using Twilio.TwiML;
using Twilio;
using Mercury.Web.Models;

namespace Mercury.Web.Controllers
{
    public class FakePhoneController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(SmsMessage message)
        {
            var messageHubClients = Hub.GetClients<Messagehub>();
            message.Name = "Some Name";
            messageHubClients.addChat(message);

            return RedirectToAction("Index");
        }

    }
}
