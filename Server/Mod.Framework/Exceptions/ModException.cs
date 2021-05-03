using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Mod.Framework.Exceptions
{
    [Serializable]
    public class ModException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="ModException"/> object.
        /// </summary>
        public ModException()
        {

        }

        /// <summary>
        /// Creates a new <see cref="ModException"/> object.
        /// </summary>
        public ModException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {

        }

        /// <summary>
        /// Creates a new <see cref="ModException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        public ModException(string message)
            : base(message)
        {

        }

        /// <summary>
        /// Creates a new <see cref="ModException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        /// <param name="innerException">Inner exception</param>
        public ModException(string message, Exception innerException)
            : base(message, innerException)
        {

        }
    }
}
