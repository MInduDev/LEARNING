import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const shoes = [
  {
    id: 1,
    name: "Campus Men's Sneakers",
    price: 50,
    image: "/images/shoe1.png"
  },
  {
    id: 2,
    name: "Campus Men's OG-03 Sneakers",
    price: 75,
    image: "/images/shoe2.png"
  },
  {
    id: 3,
    name: "ASIAN Men's Thar-13 Sneaker",
    price: 120,
    image: "/images/shoe3.png"
  },
  {
    id: 4,
    name: "ASIAN Men's AIRWEAVE-02 Sports Shoes",
    price: 40,
    image: "/images/shoe4.png"
  },
  {
    id: 5,
    name: "White Casual Sneaker",
    price: 70,
    image: "/images/shoe5.png"
  },
  {
    id: 6,
    name: "MACTREE Men's Mid Top Ankle Boots",
    price: 90,
    image: "/images/shoe6.png"
  },
  {
    id: 7,
    name: "U.S. POLO ASSN. Men's PanalSneaker",
    price: 99,
    image: "/images/shoe7.png"
  },
  {
    id: 8,
    name: "ASIAN Men's Sports Shoes",
    price: 68,
    image: "/images/shoe8.png"
  }
];

  const [cart, setCart] = useState([]);

  function addToCart(shoe) {
    const shoeInCart = cart.find((item) => item.id === shoe.id);

    if (shoeInCart) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main className="store-layout">
        <section className="products-section">
          <div className="products-grid">
            {shoes.map((shoe) => (
              <ProductCard
                key={shoe.id}
                shoe={shoe}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </main>
    </div>
  );
}

export default App;
