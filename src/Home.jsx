
import Header from './Header';
import Footer from "./Footer";
import Products from "./Products";
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Chat from './Chat';
import Login from './Login';
import ErrorMsg from './ErrorMsg';
import Category from './Category';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Favorite from './Favorite';
import Appointment from './Appointment';

const Home=()=>{
 
    return(
       <>


       <Header />

       <Favorite />
       <Routes>
              
               <Route path="/" element={<Products />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login />} />
               <Route path="/appointment" element={<Appointment/>} />
               <Route path="*" element={<ErrorMsg />} />
               <Route
                  path="/products/category/:category"
                  element={<Category />}
                />
                <Route
                  path="/product-details/:id"
                  element={<ProductDetails />}
                />
                <Route path="/cart" element={<Cart />} />
            
       </Routes>

     
<Footer />




      
      </>
    );

}
export default Home;
