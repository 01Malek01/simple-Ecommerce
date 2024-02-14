import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    return data;
  }
);
export const fetchByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);
const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(fetchByCategory.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default productsSlice.reducer;
// export const {  } = productsSlice.actions;
