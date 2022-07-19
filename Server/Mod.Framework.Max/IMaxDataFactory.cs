using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Max
{
    public interface IMaxDataFactory<T>
    {
        IEnumerable<T> GetAll();
    }
}
