import React from "react";
function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart-section">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price} × {item.quantity}</p>
              </div>

              <div className="quantity-buttons">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </aside>
  );
}

export default Cart;
