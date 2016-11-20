using System.Web.Http;

namespace AngularDemoApp
{
    public class WebApiConfig
    {
        public static void Configure(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
        }
    }
}