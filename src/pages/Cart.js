import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import '../components/external styles/cart.css';
import { clearCart, removeItem } from "../Rtk/slices/cart-slice";
export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
  return (
<>
<table className="table table-striped">
  <thead>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Image</th>
  </thead>
  <tbody>
  {
    cart.map((item,index)=>{
      return(
        <tr key={item.id}>
          <th scope="row">{index+1}</th>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td><img src={item.image} width='50px' height='50px'/></td>
          <td><Button title={'remove from cart'} className={'remove-btn'} onClick={()=>dispatch(removeItem(item))} /></td>
        </tr>
        
      )
    })
  }
  </tbody>
</table>
{
  cart.length > 0 && <div className="total-price">
  <span>Total Price: {cart.reduce((acc,current)=>acc+current.price * current.quantity,0)}</span>
  <Button title={'proceed to checkout'} className={'checkout-btn'} />
  <Button title={'clear cart'} className={'clear-btn'} onClick={()=>dispatch(clearCart())} />
</div>
}
</>
  );
}