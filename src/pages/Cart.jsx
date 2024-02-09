import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useShoppingCart();

  const handleDownload = () => {
    const jsonData = JSON.stringify(cart, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sepet.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="cart-basket">
      <h2 className="cart-title">Alışveriş Sepeti</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li className="cart-item" key={item.id}>
            <div>
            {item.title}
            </div>
            <div>${item.price}</div>
            <button onClick={() => removeFromCart(item)}>Sepetten Çıkar</button>
          </li>
        ))}
      </ul>
      <button className="clear-cart" onClick={clearCart}>Sepeti Temizle</button>
      <button className="download-cart" onClick={handleDownload}>Sepeti İndir</button>
    </div>
  );
};

export default Cart;
