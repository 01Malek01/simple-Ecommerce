import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/products-slice";
import cartSlice from "../slices/cart-slice";
import searchQuerySlice from "../slices/searchQuerySlice";

const store = configureStore({
    reducer:{
        products:productsSlice,
        cart:cartSlice,
        searchQuery:searchQuerySlice
    }
})

export default store;