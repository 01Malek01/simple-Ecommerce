import React from 'react';
import { Link } from 'react-router-dom';

import './external styles/card.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Rtk/slices/cart-slice';
import Button from './Button';
import { ToastContainer, toast, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import { fetchTargetProduct } from '../Rtk/slices/products-slice';
export default function Card({ title, image, description, price, prod }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const notify = () => {
    toast.success(`Item  added to cart successfully `, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
      transition: Slide,
    })



  }
  function handleAddToCart() {
    dispatch(addToCart(prod));
    notify();

  }
  return (
    <>
      <div className="container">
        <div
          className=" m-2 p-3"
          style={{
            width: "18rem",
            height: "25rem"
          }}
        >
          <img
            src={image}
            className="card-img-top"
            alt={title}
            height={'200px'}

          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text m-0" style={{ fontWeight: 'bold' }}>Price : {price}</p>
            <p className="card-text m-0">{description}</p>
            <div className="card-btns">
              <Button value={prod} onClick={handleAddToCart} className="btn btn-success card-btn">
                Add To Cart
              </Button>

              <Link to={`/products/${prod.id}`}>
                <Button title={'Show Details'} className={'btn btn-success card-btn link-btn '} />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
