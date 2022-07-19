namespace Mod.Framework.Domain.Entities
{
    public interface IHasConcurrencyToken
    {
        byte[] ConcurrencyToken { get; set; }
    }
}
