
namespace SampleWorkAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("SameDomainPolicy",
                                       builder =>
                                       {
                                           builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
                                               .AllowAnyHeader()
                                               .AllowAnyMethod();
                                       });
            });

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("SameDomainPolicy");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
