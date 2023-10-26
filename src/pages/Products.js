import { useEffect, useState } from "react";
import '../components/external styles/products.css';
import Card from "../components/Card";
import { fetchByCategory, fetchProducts } from "../Rtk/slices/products-slice";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import FilterBtns from "../components/FilterBtns";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { addToCart } from "../Rtk/slices/cart-slice";


export default function Products() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());    
  },[] );

  // function handleAddToCart(e) {
  //   dispatch(addToCart(e.target.value()));

  // }

  return (
    <>
      <div className="filter-btns">
      <FilterBtns />
      </div>
      <div className="container">
      <div className="row">
      { 
      products.map((prod) => {
        return (
            
            <div key={prod.id} className="col-md-3 col-12">
          <Card prod ={prod}
            title={prod.title.slice(0,50)+'.....'}
            price={prod.price + '$'}
            image={prod.image}
            >
          </Card>
          </div>
          
        );
      })}
      </div>
      </div>
    </>

  );
}
