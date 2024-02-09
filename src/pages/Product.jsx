import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EbayHeader from "../components/ProductPage/EbayHeader/EbayHeader";
import EbayProductCard from "../components/ProductPage/EbayProductCard/EbayProductCard";
import EbayAbouts from "../components/ProductPage/EbayAbouts/EbayAbouts";
import EbaySmilarItems from "../components/ProductPage/EbaySmilarItems/EbaySmilarItems";
import EbayFooter from "../components/ProductPage/EbayFooter/EbayFooter";

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
     <EbayHeader/>
     <EbayProductCard product={product}/>
     <EbayAbouts product={product}/>
     <EbaySmilarItems/>
     <EbayFooter/>
    </div>
  );
}

export default Product;
