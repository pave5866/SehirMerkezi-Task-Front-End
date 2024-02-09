import React, { useState } from "react";
import "./eBayHeader.css";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
function EbayHeader() {
  const { cart } = useShoppingCart();

  const sum = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="ebay-header">
      <img className="ebay-logo" src="/ebaylogo.png" alt="" />
      <div className="ebay-search">
        <div className="all-categories">
          All Categories <img src="/arrow_down.svg" alt="" />
        </div>
        <p>|</p>
        <div>
          <input
            className="ebay-input"
            type="text"
            placeholder="Search for items..."
          />
        </div>
        <div className="ebay-search-img">
          <img src="/search.svg" alt="" />
        </div>
      </div>
      <div className="wishlist-other">
        <div>
          <img src="/heart.png" alt="" />
          <p>Wishlist</p>
        </div>
        <div>
          <img src="/li_shopping-cart.svg" alt="" />
          <Link target="_blank" to="/cart">
            <p className="my-cart-text">My Cart</p>
            <p>${sum}</p>
            <p className="my-cart-length">{cart?.length}</p>
          </Link>
        </div>
        <div>
          <img src="/profileimage.png" alt="" />
          <img src="/arrow_down.svg" alt="" />
        </div>
      </div>
      <div>
        <button className="browse-btn">
          <img
            style={{ color: "red" }}
            src="/public/li_layout-grid.png"
            alt=""
          />
          <p>Brows All Categories</p>
        </button>
      </div>
    </div>
  );
}

export default EbayHeader;
