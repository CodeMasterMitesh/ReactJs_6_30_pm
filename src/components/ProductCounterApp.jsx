import { useState } from "react";
import "./ProductCounterApp.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "/images/im1.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2199,
    image: "/images/im2.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 999,
    image: "/images/im3.jpg",
  },
];

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setIsAdded(false);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setIsAdded(false);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setIsAdded(true);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="product-price">Price: Rs. {product.price}</p>

        <div className="quantity-box">
          <button onClick={decreaseQuantity}>-</button>
          <span>Quantity: {quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        <button className="cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {isAdded && (
          <p className="success-message">
            {quantity} {product.name} added to cart!
          </p>
        )}

        {quantity === 0 && (
          <p className="warning-message">Please select quantity first.</p>
        )}
      </div>
    </div>
  );
};

export const ProductCounterApp = () => {
  return (
    <section className="product-counter-page">
      <h1>Product Counter App</h1>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
