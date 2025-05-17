import React, { useState } from 'react';
import img from"../assets/Image/image1.png"

function ProductDetail() {
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    name: 'Indoor Plants',
    price: '$100',
    image: img,
    description: 'Plants that require a low amount of light and water to thrive are typically known as indoor plants.Good indoor plants will tolerate lower light and humidity.',
    reviews: [
      'Great quality and looks beautiful!',
      'Love the design and material!',
      'Perfect for my balcony garden.',
    ],
    specifications: {
      Material: 'Plastic',
      Height: '15 cm',
      Diameter: '12 cm',
      Color: 'Green',
    },
  };

  return (
    <>
    <div className="container mt-5" style={{backgroundColor:"rgb(196, 183, 183)"}} >
      <h4>3.Product Detail Page with Tabs</h4>
      <div className="row g-4">
        <div className="col-md-6 text-center mb-4">
          <img src={product.image} alt="Product" className="img-fluid rounded shadow" />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-success">{product.price}</h4>

          <ul className="nav nav-tabs mt-4" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'description' ? 'active' : ''} text-success`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'reviews' ? 'active' : ''} text-success`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </li>
            <li className="nav-item ">
              <button
                className={`nav-link ${activeTab === 'specs' ? 'active' : ''} text-success` }
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
            </li>
          </ul>

          <div className="tab-content p-3 border border-top-0 rounded-bottom bg-light">
            {activeTab === 'description' && <p>{product.description}</p>}

            {activeTab === 'reviews' && (
              <ul className="list-group list-group-flush">
                {product.reviews.map((review, index) => (
                  <li key={index} className="list-group-item bg-light">
                    {review}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'specs' && (
              <table className="table table-bordered table-striped bg-white">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} >
                      <th className='text-success'>{key}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
