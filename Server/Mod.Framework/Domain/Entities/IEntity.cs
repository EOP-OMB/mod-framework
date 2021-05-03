using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Domain.Entities
{
    public interface IEntity : IEntity<int>
    {
    }

    public interface IEntity<TPrimaryKey>
    {
        TPrimaryKey Id { get; set; }

        bool Equals(object obj);
        bool IsTransient();
    }
}
