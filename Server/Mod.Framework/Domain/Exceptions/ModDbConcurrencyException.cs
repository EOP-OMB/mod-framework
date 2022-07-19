using Mod.Framework.Exceptions;
using System;
using System.Runtime.Serialization;

namespace Mod.Framework.Domain.Exceptions
{
    [Serializable]
    public class ModDbConcurrencyException : ModException
    {
        /// <summary>
        /// Creates a new <see cref="ModDbConcurrencyException"/> object.
        /// </summary>
        public ModDbConcurrencyException()
        {

        }

        /// <summary>
        /// Creates a new <see cref="ModException"/> object.
        /// </summary>
        public ModDbConcurrencyException(SerializationInfo serializationInfo, StreamingContext context)
            : base(serializationInfo, context)
        {

        }

        /// <summary>
        /// Creates a new <see cref="ModDbConcurrencyException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        public ModDbConcurrencyException(string message)
            : base(message)
        {

        }

        /// <summary>
        /// Creates a new <see cref="ModDbConcurrencyException"/> object.
        /// </summary>
        /// <param name="message">Exception message</param>
        /// <param name="innerException">Inner exception</param>
        public ModDbConcurrencyException(string message, Exception innerException)
            : base(message, innerException)
        {

        }
    }
}