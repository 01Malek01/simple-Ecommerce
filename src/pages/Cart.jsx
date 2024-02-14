import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import '../components/external styles/cart.css';
import { clearCart, removeItem } from "../Rtk/slices/cart-slice";
import { Link } from 'react-router-dom';
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <>
    <div className="container-fluid mt-8">

      <table className="table table-striped cart-table">
        {cart.length > 0 ?
          (
            <thead>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Image</th>
            </thead>
          ) : (
            <div className='container mx-auto'>
              <h1 className='text-center mt-10 ' >Your cart is empty</h1>
              <div className='text-center'>
                <Link to={'/products'}><Button title={'continue shopping'} className={`continue-btn mt-10 `} /> </Link>
              </div>
            </div>
          )

        }
        <tbody>
          {
            cart.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td><img src={item.image} width='50px' height='50px' alt={item.title} /></td>
                  <td><Button title={'Remove'} classNames={'bg-red'} onClick={() => dispatch(removeItem(item))} style={{ backGroundColor: 'red' }} /></td>
                </tr>

              )
            })
          }
        </tbody>
      </table>
      {
        cart.length > 0 && <div className="total-price">
          <span>Total Price: {cart.reduce((acc, current) => acc + current.price * current.quantity, 0).toFixed(2)}</span>
          <Button title={'proceed to checkout'} className={'checkout-btn'} />
          <Button title={'clear cart'} classNames={'bg-red'} onClick={() => dispatch(clearCart())} />
        </div>
      }
      </div>
    </>
  );
}