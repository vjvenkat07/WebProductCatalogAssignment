import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-secondary bg-opacity-25 p-3 text-center rounded">
      <img src={product.image} alt={product.title} className="pb-4 product-img"/>
      <h4>{product.title}</h4>
      <p><strong>${product.price}</strong></p>
      <p className="small">{product.description.slice(0, 100)}...</p>
    </div>
  );
}

export default ProductCard;
