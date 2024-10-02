import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from './apis'; 

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts(); // Fetch products 
                setProducts(data); 
            } catch (error) {
                setError("Error fetching products");
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return (
        <div>
            <h2>Human clothes</h2>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {products.map(product => (
                        <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '5px', margin: '10px', padding: '10px', width: '200px' }}>
                            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <p>{product.description.substring(0, 50)}...</p>
                            <Link to={`/product-details/${product.id}`} style={{ textDecoration: 'none', color: 'blue' }}>View Details</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;