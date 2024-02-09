import React, { useState, useEffect } from "react";
import "./products.css";
import { Link } from "react-router-dom";
export default function Products() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const result = await response.json();
        setCategory(result);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchData();
  }, []);

  console.log(category);

  return (
    <div id="Product" className="product-container">
      <h1>Products</h1>
      <div className="category">
        <h3 className="all">All</h3>
        {category?.slice(0, 7).map((category, i) => (
          <div key={i}>
            <h3>{category}</h3>
          </div>
        ))}
      </div>
      <div className="products">
        {data?.products?.slice(0, 8).map((product) => (
          <Link to={`/product/${product.id}`} className="card" key={product.id}>
            <img className="product-img" src={product.thumbnail} alt="" width={180} height={180} />
            <h3>{product.title}</h3>
            <div className="price-container">
              <p>${product.price}</p>
              <img src="/arrow-right.svg" alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
