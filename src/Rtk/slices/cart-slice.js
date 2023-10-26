import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState:[],
    name:'cartSlice',
    reducers:{
        addToCart(state,action){
           const found = state.find(prod => prod.id===action.payload.id);
           if(found){
            found.quantity++
           }else{
          const productClone = {...action.payload , quantity:1}
          state.push(productClone);
           }
        },
        removeItem(state,action){
            return state.filter(prod => prod.id !== action.payload.id)
        }
        ,
        clearCart(state){
            return state = []
        }
    }
})

export default cartSlice.reducer;
export const {addToCart,clearCart,removeItem} = cartSlice.actions;