using System;

namespace Mod.Framework.Application
{
    public class CrudEventArgs<TDto, TEntity> : EventArgs
    {
        public bool Cancel { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; } 

        public TDto Dto { get; set; }
        public TEntity Entity { get; set; }

        public TimeSpan Duration { 
            get 
            { 
                return new TimeSpan(EndTime.Ticks - StartTime.Ticks);  
            } 
        }

        public CrudEventArgs() : base()
        {
            this.StartTime = DateTime.Now;
            this.Cancel = false;
        }
    }
}