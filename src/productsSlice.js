
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    products:[]
};

const productsSlice=createSlice({

    name:'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products=action.payload;
        }

    }

});

export const fetchProducts=()=>{
    return(dispatch,getState)=>{
        axios.get('https://fakestoreapi.com/products')
       .then(response => {
   
          dispatch(setProducts(response.data));
  })
  .catch(error => {
   
    console.log(error);
  });
    }
}

export const{setProducts}=productsSlice.actions;
export default productsSlice.reducer;