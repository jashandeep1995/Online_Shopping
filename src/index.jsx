import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import { BrowserRouter } from 'react-router-dom';
import productsReducer from './productsSlice.js';
import cartReducer from './cartSlice.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import favReducer from "./favSlice";




const store=configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer,
        fav: favReducer,
    }

});

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Provider store={store}>
      <BrowserRouter>
    <Home />

    </BrowserRouter>
    
    </Provider>
);

