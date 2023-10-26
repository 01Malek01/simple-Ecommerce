import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function ProductsByCategory() {
    const [products , setProducts] = useState([]);
  const params = useParams();
  const categoryName = params.categoryName;
 useEffect(() => {
 
  fetch(`https://fakestoreapi.com/products/category/${categoryName}`).then(res => res.json()).then(data => setProducts(data))
  
  }, [])
  
  return <>
   <div className="container">
      <div className="row">
  {
  products.map((prod) => {
        return (
            
            <div key={prod.id} className="col-md-3 col-12">
          <Card prod ={prod}
            title={prod.title.slice(0,50)+'.....'}
            price={prod.price + '$'}
            image={prod.image}
            >
          </Card>
          </div>
          
        );
      })}
      </div>
      </div>
      
      
  
  
  </>;
}
