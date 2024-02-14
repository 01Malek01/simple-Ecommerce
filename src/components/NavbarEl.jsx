import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import "./external styles/NavbarEl.css";
import { useLocation } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from "react-redux";
import { updateQuery, updateSearchResults } from "../Rtk/slices/searchQuerySlice";

export default function NavbarEl() {
  const [pathname, setPathname] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); //products in the state
  const query = useSelector((state) => state.searchQuery.query);
  const queryRef = useRef(null);
  const location = useLocation();

  const handleQuerySearch = (e) => {
    dispatch(updateQuery(queryRef.current.value));
  };

  //use useEffect to make sure the result changes when the query changes
  useEffect(() => {
    if (queryRef.current.value === "") {
      dispatch(updateSearchResults(products));
      return;
    }

    const filteredData = products.filter((product) => {
      return product.title.toLowerCase().includes(queryRef.current.value.toLowerCase());
    });
    console.log(' filteredData ', filteredData)
    dispatch(updateSearchResults(filteredData));
  }, [query, products]);



  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, pathname]);


  return (
    <>

      <nav className="my-navbar bg-tertiary container ">
        <div className="logo">
          <Link to={"/"} className="nav-link">
            <img
              className="logo-img"
              src="../assets/1x/Asset 1.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="" >
          <div className={`searchbar-container ${pathname === "/cart" || pathname === "/" ? "d-none" : ""}`}>
            <input
              ref={queryRef}
              type="text"
              placeholder="Type to search"
              className="form-control me-2 searchbar"
              onChange={handleQuerySearch}
            />
          </div>
        </div>
        <div className='nav-links'>
          <NavLinks />
        </div>
      </nav>
    </>
  );
}
