using SampleWorkAPI.Models;

namespace SampleWorkAPI.Repository
{
    public interface IProductRepository
    {

        public Task InitializeAsync();
        public Task<IEnumerable<Product>> GetAllProductsAsync();
    }
}
