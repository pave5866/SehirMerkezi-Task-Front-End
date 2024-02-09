import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useShoppingCart();

  const handleDownload = () => {
    if (cart.length === 0) {
      alert("Basket is empty. Add items to download.");
      return;
    }

    const jsonData = JSON.stringify(cart, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "basket.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="cart-basket">
      <h2 className="cart-title">Basket</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li className="cart-item" key={item.id}>
            <div>{item.title}</div>
            <div>${item.price}</div>
            <button onClick={() => removeFromCart(item)}>
              Basket to Remove
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-cart" onClick={clearCart}>
        Basket All Remove
      </button>
      <button className="download-cart" onClick={handleDownload}>
        Basket Download to JSON
      </button>
    </div>
  );
};

export default Cart;