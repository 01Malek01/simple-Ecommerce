import { Link } from "react-router-dom";
import "./external styles/NavbarEl.css";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, queryFilter } from "../Rtk/slices/products-slice";

//-----------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------
export default function NavbarEl() {
  const dispatch = useDispatch();
  const cartLength = useSelector((state) => state.cart.length);
  const handleQuerySearch = (e) => {
    dispatch(queryFilter(e.target.value));
  };
  // useEffect(() => {
  //   console.log(query);
  // })

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
            <div className="col-md-3 col-12">
          <Link to={"/"} className="navbar-brand">
            {" "}
            <img
              className="logo "
              src={require("../assets/1x/Asset 1.png")}
              alt="logo"
            />
          </Link>
          </div>
          
          <div className="searchbar-container container col-md-6 col-12">
            <input
              type="text"
              placeholder="Search"
              className="searchbar"
              onChange={handleQuerySearch}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav-settings-box">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN
                  </a>
                  <ul className="dropdown-menu" >
                    <li>
                      <a className="dropdown-item">Arabic</a>
                    </li>
                    <li>
                      <a className="dropdown-item">English</a>
                    </li>
                  </ul>
                </li>
                  <li className="nav-item">
                <Link className="link-btn" to={"/cart"}>
                    <img className=""
                      src={require("../assets/shopping-cart_2838838.png")}
                      width={"30px"}
                      height={"30px"}
                      alt="img"
                    />
                    {cartLength}
                </Link>
                  </li>
              </ul>
            </div>
          </div>
          </div>
         
        
      </nav>
      
    </>
  );
}
