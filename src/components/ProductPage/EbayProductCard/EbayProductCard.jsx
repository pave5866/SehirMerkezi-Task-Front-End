import React from "react";
import "./ebayProductCard.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../utils/ScrollToTop";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
function EbayProductCard({ product }) {
  console.log(product);

  const { cart, addToCart, removeFromCart, clearCart } = useShoppingCart();

  return (
    <div className="ebays-container">
      <ScrollToTop />
      <div className="ebay-card-container">
        <div className="left-0">
          <Link to="/#Product">
            <img src="/arrow_left.png" alt="" />
          </Link>
        </div>
        <p>Back to previous page | Listed in category:</p>
        <p className="ebay-accessories">
          Cell Phones & Accessories Cell Phones & Smartphones
        </p>
      </div>
      <div className="ebay-producttss">
        <div className="pngss">
          <div className="ebay-imgs">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className="ebay-imagess">
            <img src="/arrow_left.png" alt="" />
            {product?.images?.slice(0, 3).map((image, index) => (
              <img
                width={"140px"}
                height={"120px"}
                src={image}
                alt=""
                key={index}
              />
            ))}
            <img src="/arrow_right.png" alt="" />
          </div>
        </div>
        <div className="ebay-texts">
          <div className="title-star">
            <p>{product.title}</p>
            <p className="starlightt">Starlight</p>
          </div>
          <div className="free2">
            <p>Free 2 Days Shipping | 1 Year Warranty</p>
          </div>
          <div className="ebay-reviews">
            <img src="/review_star.png" alt="" />
            <img src="/review_star.png" alt="" />
            <img src="/review_star.png" alt="" />
            <img src="/review_star.png" alt="" />
            <img src="/emptystar.png" alt="" />
            <p>{product.rating}</p>
            <p>from 392 Reviews</p>
          </div>
          <div className="ebay-price">
            <img src="/$.png" alt="" />
            <div className="priceess">
              <p>{product.price}</p>
            </div>
          </div>
          <div className="ulli-none">
            <ul>
              <li>
                <img src="/check_mark.png" alt="" />
                Free return
              </li>
              <li>
                <img src="/check_mark.png" alt="" />
                Chat with us 24 hours
              </li>
              <li>
                <img src="/check_mark.png" alt="" />
                Comes with a Package
              </li>
            </ul>
          </div>
          <div className="soldlast24">
            <img src="/Group-human.png" alt="" />
            <p>1,241 Sold in the last 24 hours</p>
          </div>
          <div className="ebay-btn">
            <button className="btnbuy-it">Buy it Now</button>
            <button onClick={() => addToCart(product)} className="btncart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EbayProductCard;
