import { createSlice } from "@reduxjs/toolkit";

// Define your initial state
const initialState = {
  query: "",
  searchResults: [],
};

// Create the query search slice
const querySearchSlice = createSlice({
  name: "querySearch",
  initialState, //the initial state above
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    updateSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

// Export actions and reducer
export const { updateQuery, updateSearchResults } = querySearchSlice.actions;
export default querySearchSlice.reducer;
