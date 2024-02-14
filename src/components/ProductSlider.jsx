import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./external styles/productSlider.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";



// Custom arrow components
const NextArrow = ({ onClick }) => (
 <div className="custom-arrow next" onClick={onClick}>
  <GrNext />
 </div>
);

const PrevArrow = ({ onClick }) => (
 <div className="custom-arrow prev" onClick={onClick}>
  <GrPrevious /> 
 </div>
);
function Responsive({ products }) {
 const handleProductClick = (e) => {
  console.log(e.target.dataset.value);
 }
 var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  pauseOnHover: true,
  pauseOnFocus: true,

  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: true,
     dots: true
    }
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 2
    }
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: false
    }
   }
  ]
 };
 return (
  <div className="slider-container ">
   <Slider {...settings}>
    {products.map((product) => (
     <Link className="slider-product-link" key={product.id} to={`/products/${product.id}`} >
      <div className="product-card card p-4 " onClick={(e) => handleProductClick(e)}  >
       <img src={product.image} alt={product.title} style={{ objectFit: "contain", width: "100%", height: "200px" }} />
       <h3 style={{ textAlign: "center", fontSize: "14px" }}>{product.title.slice(0, 20)}....</h3>
      </div>
     </Link>
    ))}
   </Slider>
  </div>
 );
}

export default Responsive;
