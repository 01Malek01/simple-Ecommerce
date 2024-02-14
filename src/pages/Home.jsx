import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import "../components/external styles/home.css";
import ProductSlider from '../components/ProductSlider.jsx';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../Rtk/slices/products-slice.js';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts())

  }, [])
  return (
    <>
      <div className="container-fluid">

        <div className='container'>
          <Slider />
          <div className="container my-5">
            <h2>Trending Products</h2>
            <ProductSlider products={products.slice(8, 20)} />
          </div>
          <div className="container my-5">
            <h2>For you</h2>
            <ProductSlider products={products.slice(0, 8)} />
          </div>

        </div>
        <div className='container-fluid'>
          <Footer mt={"100px"} />
        </div>
      </div>
    </>
  );
}
