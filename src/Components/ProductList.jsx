import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-4">Loading products...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h4>6.Fetch and Display Product from API</h4>
      <h2 className="mb-4 text-center">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div
              className="p-3 h-100"
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '12px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="d-block mx-auto"
                style={{
                  height: '150px',
                  width: '150px',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  marginBottom: '12px',
                }}
              />
              <h6 className="text-truncate">{product.title}</h6>
              <p className="fw-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
