import React, { Suspense } from 'react';
import { useEffect } from "react";
import '../components/external styles/products.css';
import Card from "../components/Card";
import {  fetchProducts } from "../Rtk/slices/products-slice";
import { useDispatch, useSelector } from "react-redux";
import SideFilterMenu from '../components/FilterMenu';
import { ToastContainer, toast } from 'react-toastify';

export default function Products() {

  const dispatch = useDispatch();
  const stateProducts = useSelector((state) => state.products)
  const query = useSelector((state) => state.searchQuery.query);
  const searchResult = useSelector((state) => state.searchQuery.searchResults);
  let products = query ? searchResult : stateProducts;
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Slide
      />
      <div className="container mt-10">
        <div className='row'>
          <div className="col-12 col-lg-3">
            <SideFilterMenu />
          </div>
          <div className="col-12 card col-lg-9">
            <div className="row">
              {
                products.map((prod) => {
                  return (

                    <div key={prod.id} className="col-lg-4 col-md-6  col-sm-12 product-container">
                      <Card prod={prod}
                        title={prod.title.slice(0, 50) + '.....'}
                        price={prod.price + '$'}
                        image={prod.image}
                      >
                      </Card>
                    </div>

                  );
                })}
            </div>
          </div>

        </div>
      </div>
    </>

  );
}
