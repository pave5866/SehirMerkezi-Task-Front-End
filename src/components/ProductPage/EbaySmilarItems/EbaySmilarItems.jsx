import React, { useEffect, useState } from "react";
import "./eBaySmilarItems.css";

function EbaySmilarItems() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div className="smilar-items-container">
      <div>
        <h2 className="smilar-title">Similar Sponsored items</h2>
        <div className="smilar-items-wraps">
          <div></div>
          {products?.products?.slice(0, 5).map((product) => (
            <div key={product.id}>
              <img
                className="smilar-img-container"
                width={86}
                height={86}
                src={product.thumbnail}
                alt=""
              />
              <div className="smilar-title-brand">
                <p className="smilar-item-title">{product.title}</p>
                <p className="smilar-brand">{product.brand}</p>
              </div>
              <div className="price-rating-container">
              <p className="smilar-price">${product.price}</p>
                <div className="rating-container">
                  <div className="review-star-smilar">
                    
                    <img
                      src="/review_star.svg"
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                </div>
                <div>
                  <p>{product.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EbaySmilarItems;
