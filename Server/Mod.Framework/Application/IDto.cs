namespace Mod.Framework.Application
{
    public interface IDto : IDto<int>
    {
    }

    public interface IDto<TPrimaryKey>
    {
        TPrimaryKey Id { get; set; }
    }
}
