import React from 'react';
import { useDispatch } from "react-redux";
import Button from "./Button";
import { fetchByCategory } from "../Rtk/slices/products-slice";


export default function FilterBtns() {
  const dispatch = useDispatch();

  const handleButtonFilter = (e) => {
    dispatch(fetchByCategory(e.target.value))
  };
  return (
    <>
      <Button
        title={`jewelery`}
        value={"jewelery"}
        onClick={handleButtonFilter}
      />


      <Button
        title={`electronics`}
        value={"electronics"}
        onClick={handleButtonFilter}
      />
      <Button
        title={`men's clothing`}
        value={`men's clothing`}
        onClick={handleButtonFilter}
      />
      <Button
        title={`women's clothing`}
        value={`women's clothing`}
        onClick={handleButtonFilter}
      />
    </>
  )
}
