import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[]
}

const cartSlice=createSlice({

    name:'cart',
    initialState,
    reducers:{
        AddProduct:(state,action)=>{
            const newItem = action.payload;

            const existingItemIndex = state.cart.findIndex(
                item => item.pId === newItem.pId
              );
              if (existingItemIndex !== -1) {
                // If item already exists, update its item count
                const updatedCartItems = [...state.cart];
                updatedCartItems[existingItemIndex].itemCount += 1;
        
                state.cart = updatedCartItems;
              } else {
                // If item is new, add it to the Cart
                state.cart.push(action.payload);
              }
        },
        RemoveProduct:(state,action)=>{
            state.cart.splice(action.payload.i,1);
        }
    }

});

export const{AddProduct,RemoveProduct}=cartSlice.actions;
export default cartSlice.reducer;