using SampleWorkAPI.Models;
using System.Text.Json;

namespace SampleWorkAPI.Repository
{
    public class JsonProductRepository: IProductRepository
    {
        private List<Product> _products;
        public JsonProductRepository()
        {
              
        }

        public async Task InitializeAsync()
        {
            _products = (await LoadProductsAsync()).ToList();
        }

        private async Task<IEnumerable<Product>> LoadProductsAsync()
        {
            var products = new List<Product>();
            try
            {
                using (var reader = new StreamReader("mockProducts.json"))
                {
                    var json = await reader.ReadToEndAsync();
                    products = JsonSerializer.Deserialize<List<Product>>(json);
                }
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("File not found.");
            }
            catch (JsonException)
            {
                Console.WriteLine("Invalid JSON format.");
            }
            

            if (products == null)
            {
                throw new Exception("Failed to load products");
            }

            return products;
        }


        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            if (_products == null)
            {
                await InitializeAsync();
            }
            return _products;
        }
    }
}
