using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Application
{
    public abstract class DtoBase : DtoBase<int>
    {

    }

    public abstract class DtoBase<TPrimaryKey> : IDto<TPrimaryKey>
    {
        public TPrimaryKey Id { get; set; }
    }
}
