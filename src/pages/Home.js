import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import "../components/external styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="container mt-5">
        {/* <Link to={`/products/category/jewelery`} >jewelery</Link>
        <Link to={`/products/category/men's clothing`} >Men's Clothing</Link>
        <Link to={`/products/category/women's clothing`} >Women's Clothing</Link>
        <Link to={`/products/category/electronics`} >Electronics</Link> */}
        <h1 className="mb-5">Featured Categories</h1>

        <div className="row">
          <div className="col-md-3 col-12 ">
            <Link className="link" to={`/products/category/jewelery`} >
            <div class="card card-category" style={{ width: "18rem" }}>
              <img src={require("../assets/top-view-gold-chains-still-life.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                Explore our exquisite collection of timeless necklaces, bracelets, and earrings. Elevate your style with stunning jewelry that adds a touch of elegance to any occasion.
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <Link className="link" to={`/products/category/women's clothing`} >
            <div class="card card-category" style={{ width: "18rem" }}>
              <img src={require("../assets/lady-poses-dressing-room-with-bright-clothes-shoes-girl-beret-lilac-blouse-looking-camera-pink-background.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                Explore our elegant women's clothing collection, featuring timeless styles and modern trends. From chic dresses to versatile separates, discover the perfect pieces to elevate your wardrobe.
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <Link className="link" to={`/products/category/men's clothing`} >
            <div class="card card-category" style={{ width: "18rem" }}>
              <img src={require("../assets/portrait-handsome-smiling-stylish-young-man.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                Explore our curated collection of men's fashion, where style meets sophistication. From timeless classics to contemporary trends, discover the perfect wardrobe essentials for every occasion at our shop.
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-3 col-12">
            <Link className="link" to={`/products/category/electronics`} >
            <div class="card card-category" style={{ width: "18rem" }}>
              <img src={require("../assets/modern-stationary-collection-arrangement.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                Explore our vast electronics emporium, offering cutting-edge gadgets, home appliances, and entertainment systems. Discover innovation and convenience at your fingertips in our electronics haven.
                </p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer mt={"100px"} />
    </>
  );
}
