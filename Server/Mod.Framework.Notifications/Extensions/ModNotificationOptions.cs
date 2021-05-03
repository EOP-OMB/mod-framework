using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Notifications.Extensions
{
    public class ModNotificationOptions
    {
        /// <summary>
        /// The frequency, in milliseconds, in which the system will poll for new notifications and send them out
        /// </summary>
        public int PollingFrequency { get; set; } = 300000;
    }
}
