import React from 'react';
import { useSelector } from 'react-redux';
import './external styles/sideMenu.css';
export default function SideMenu() {

    const toggleMenu = () => {
        let toggleBtn = document.querySelector('.side-menu');
        toggleBtn.classList.toggle('menu-open');
    }
    const cartLength = useSelector((state) => state.cart.length);

    return (
        <>
            <section className='side-menu'>
                <div className="custom-loader" onClick={toggleMenu}></div>
                <div className="container">
                    <div className='m-2'>
                        <span>Your Cart</span>
                        <img className="m-1"
                            src="../assets/shopping-cart_2838838.png"
                            width={"30px"}
                            height={"30px"}
                            alt="img"
                        />
                        <span>{cartLength}</span>
                    </div>
                    <h2>Categories</h2>
                    <ul>
                        <li>electronics</li>
                        <li>jewelery</li>
                        <li>men's clothing"</li>
                        <li>women's clothing</li>
                    </ul>

                    <h2>Features</h2>
                    <ul>
                        <li>Today's Deals</li>
                        <li>Our shop Outlet</li>
                    </ul>
                    <h2>Account settings</h2>
                    <ul>
                        <li>Sign In</li>
                        <li>Help</li>
                    </ul>
                </div>

            </section>
        </>
    );
}