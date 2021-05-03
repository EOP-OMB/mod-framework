using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Runtime
{
    public interface IAmbientScopeProvider<T>
    {
        T GetValue(string contextKey);

        IDisposable BeginScope(string contextKey, T value);
    }
}
