using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SignalR.Hubs;

namespace Mercury.Hubs
{
    public class Messagehub : Hub
    {
        public void Hey() {
            //this.Clients.echo("sup");
        }
    }
}