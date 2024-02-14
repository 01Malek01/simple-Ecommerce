import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./external styles/navLinks.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchByCategory, fetchProducts,
} from "../Rtk/slices/products-slice";
import { useLocation } from "react-router-dom";


export default function NavLinks() {
  const cartLength = useSelector((state) => state.cart.length);
  const [pathname, setPathname] = useState('');
  // const products = useSelector((state) => state.products);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname)
  }, [location, pathname])

  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid">
        <div className="nav flex row">
          <Link className="link-btn col-4" to={"/"}>
            <span className={`nav-item nav-btn ${pathname === '/' ? 'active' : ''} `}>
              Home
            </span>
          </Link>
          <Link className="link-btn nav-item col-4" to={"/products"}>
            <span className={` nav-btn ${pathname === '/products' ? 'active' : ''}`} onClick={dispatch(fetchProducts)} > Shop</span>
          </Link>{" "}
          <Link className="link-btn nav-link col-4" to={"/cart"}>
            <img
              className=""
              src='/src/assets/shopping-cart_2838838.png'
              width={"30px"}
              height={"30px"}
              alt="img"
            />
            {cartLength}
          </Link>
        </div>
      </div>
    </>
  );
}
