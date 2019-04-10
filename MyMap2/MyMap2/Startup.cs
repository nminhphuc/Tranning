using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyMap2.Startup))]
namespace MyMap2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
