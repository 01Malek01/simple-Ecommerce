import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import '../components/external styles/productDetails.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../Rtk/slices/cart-slice.js";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  const memoizedProduct = useMemo(() => product, [product]);

  return (
    <>
      <div className="container mt-8">
        <div className="card pt-3">
          <img src={memoizedProduct.image} className="card-img-top product-img" alt={memoizedProduct.title} />
          <div className="card-body">
            <h4 className="card-title">{memoizedProduct.title}</h4>
            <h5 className="card-text m-2">Price : {memoizedProduct.price}</h5>
            <p className="card-text m-2">{memoizedProduct.description}</p>
            <button className='button' onClick={() => dispatch(addToCart(memoizedProduct))}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
