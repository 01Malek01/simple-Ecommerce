import { Link } from "react-router-dom";
import "./external styles/megaMenus.css";
import { useDispatch } from "react-redux";
import {
  fetchByCategory, fetchProducts,
  
} from "../Rtk/slices/products-slice";
import Button from "./Button";

export default function MegaMenus() {
  const dispatch = useDispatch();

  const handleButtonFilter = (e) => {
dispatch(fetchByCategory(e.target.value))
  };
  return (
    <>
      <div className="container">
        <div className="nav mega-menus">
            <Link className="link-btn" to={"/"}>
          <button className="nav-item">
              Home
          </button>
            </Link>
          <Link className="link-btn nav-item" to={"/products"}>
            <Button
              title={"All Products"}
              value={"all"}
              onClick={() => {
                dispatch(fetchProducts())
              }}
            />
          </Link>{" "}
        </div>
        <div className="nav-item alert d-flex alert-success justify-content-center">
          <h5>
            Free delivery on your first order!{" "}
            <span
              style={{
                fontSize: "14px",
                opacity: "0.7",
                cursor: "pointer",
              }}
            >
              See more..
            </span>{" "}
          </h5>
        </div>
      </div>
    </>
  );
}
