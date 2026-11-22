import React from "react";
function ProductCard({ shoe, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={shoe.image} alt={shoe.name} />
      </div>

      <div className="product-details">
        <h3>{shoe.name}</h3>
        <p className="product-price">${shoe.price}</p>
        <button onClick={() => addToCart(shoe)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
