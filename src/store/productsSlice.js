import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  seleectedPrducts: null,
  searchedProducts:products,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProducts: (state, { payload }) => {
     
      const prodctId = payload;
      state.seleectedPrducts = state.products.find(
        (product) => product.id === prodctId
      );
    },
    searchQuery: (state, action) => {
  
      const query=action.payload.toLocaleLowerCase()
    
      const products=state.products
 
      const queryData=products.filter(product=>{
        if(product.name.toLocaleLowerCase().includes(query)){
          return product
        }
      })
      
      state.searchedProducts=queryData
      
     },
     searchQueryBackToEmpty: (state, action) => {
    
       state.searchedProducts=state.products
       
      },
  },
});
export const productsFromRedux=(state)=>state.products.searchedProducts