using SampleWorkAPI.Models;
using System.Text.Json;
using System.Linq;

namespace SampleWorkAPI.Repository
{
    public class JsonProductRepository: IProductRepository
    {
        private Dictionary<int, Product> _products;
        public JsonProductRepository()
        {
              
        }

        public async Task InitializeAsync()
        {
            _products = (await LoadProductsAsync()).ToDictionary<int, Product>(p=>p.Id, p=>p);
        }

        private async Task<IDictionary<int, Product>> LoadProductsAsync()
        {
            var products = new List<Product>();
            using (var reader = new StreamReader("mockProducts.json"))
            {
                var json = await reader.ReadToEndAsync();
                products = JsonSerializer.Deserialize<List<Product>>(json);
            }
            if (products == null)
            {
                throw new Exception("Failed to load products");
            }

            return products.ToDictionary<int, Product>(p => p.Id);
        }


        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return _products.;
        }
    }
}
