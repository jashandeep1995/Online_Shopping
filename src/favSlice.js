import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fav: [],
    show: false,
};

const favSlice = createSlice({

    name:'fav',
    initialState,
    reducers: {
      addFav: (state, action) => {
        const newItem = action.payload;
        
  
        const existingItemIndex = state.fav.findIndex(
          item => item.pId === newItem.pId
        );
  
        if (existingItemIndex !== -1) {
          // If item already exists, update its item count
         
        
          state.fav.splice(existingItemIndex, 1);
        } else {
          // If item is new, add it to the Fav
          state.fav.push(action.payload);
        
        }
      },

        remFav: (state, action) => {
            state.fav.splice(action.payload, 1);
          },
      
          showOffcanvas: (state, action) => {
            state.show = action.payload;
          },

    },
});

export const { addFav, showOffcanvas, remFav } = favSlice.actions;
export default favSlice.reducer;
