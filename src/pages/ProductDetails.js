import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../components/external styles/productDetails.css';

export default function ProductDetails({}) {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  })
  return( 
  <>

  <div className="container">
    <div className="card">
      <img  src={product.image} className="card-img-top product-img" alt={product.title}/>
      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <h5 className="card-text m-2">Price : {product.price}</h5>
        <p className="card-text m-2">{product.description}</p>
      </div>
    </div>
  </div>
  
  
  </>);
}
