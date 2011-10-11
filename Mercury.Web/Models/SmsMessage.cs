using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Mercury.Web.Models
{
    public class SmsMessage
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Body { get; set; }
        public string Name { get; set; }
    }
}