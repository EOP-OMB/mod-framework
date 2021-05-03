using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Threading;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Serilog;
using Serilog.Events;

using Mod.ExampleApp.EfCore;
using Mod.Framework.Configuration;
using Mod.Framework.Runtime.Session;

namespace Mod.ExampleApp.EfCore.Migrations
{
    class Program
    {
        static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                         .MinimumLevel.Information()
                         .Enrich.WithCorrelationId()
                         .Destructure.ByTransforming<ExpandoObject>(e => new Dictionary<string, object>(e)) // see https://stackoverflow.com/questions/48958444/serilog-and-expandoobject
                         .WriteTo.Console(outputTemplate: "{Timestamp:yyyy-MM-ddTHH:mm:ss.ffffff} {Level} {CorrelationId} {SourceContext} {Message:lj} {NewLine}")
                         .CreateLogger();

            ILoggerFactory loggerFactory = LoggerFactory.Create(builder =>
            {
                builder.AddSerilog();
            });

            try
            {
                var connectionString = ConfigurationManager.Secrets["MOD.ExampleApp.ConnectionString"];

                var optionsBuilder = new DbContextOptionsBuilder<ExampleAppContext>();

                optionsBuilder
                    .UseSqlServer(connectionString)
                    .UseLoggerFactory(loggerFactory)
                    .EnableDetailedErrors()
                    .EnableSensitiveDataLogging()
                    .UseLazyLoadingProxies();

                var context = new ExampleAppContext(optionsBuilder.Options, NullModSession.Instance);
                Log.Information("--------------------------- Starting Migration --------------------------");

                var t0 = DateTime.Now;
                context.Database.Migrate();

                var t1 = DateTime.Now;
                if (ConfigurationManager.RunningInContainer)
                {
                    // Make sure this takes long enough for the orchestrator to think it's stable (20s?)
                    Thread.Sleep(Math.Max(20000 - Convert.ToInt32((t1 - t0).TotalMilliseconds), 0));
                }
            }
            catch (Exception ex)
            {
                Log.Fatal("An exception occurred: {Exception}", ex.Message);
                Log.Fatal("{@Exception}", ex);
                // sleep for two minutes, to allow someone to shell into the container and diagnose.
                Thread.Sleep(120000);
            }

            Log.Information("--------------------------- Migration Complete --------------------------");
        }
    }
}
