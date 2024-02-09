import React from "react";
import "./eBayFooter.css";

function EbayFooter() {
  return (
    <footer className="product_footer">
      <div className="product_footer_container">
        <div className="footer_links">
          <img src="/ebaylogo.png" alt="" />

          <div className="footer_item">
            <h5>Account</h5>
            <ul>
              <li>Wishlist</li>
              <li>Cart</li>
              <li>Track Order</li>
              <li>Shipping Details</li>
            </ul>
          </div>

          <div className="footer_item">
            <h5>Useful Links</h5>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Hot deatails</li>
              <li>Promotions</li>
              <li>New Products</li>
            </ul>
          </div>

          <div className="footer_item">
            <h5>Help Center</h5>
            <ul>
              <li>Payments</li>
              <li>Refund</li>
              <li>Checkout</li>
              <li>Shipping</li>
              <li>Q&A</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright_field">
        <p>© 2022, All rights reserved</p>
        <img className="paymentt" src="/payment.png" alt="" />
      </div>
    </footer>
  );
}

export default EbayFooter;
