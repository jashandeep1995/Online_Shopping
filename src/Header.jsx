

import React, { useState } from 'react';
import './Home.css';
import Login from "./Login";
import Register from "./Register";
import Menubar from "./Menubar";

import { useSelector,useDispatch } from "react-redux";
import Cart from "./Cart";
import firebase from './firebase';
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from "firebase/auth";
import { Link } from 'react-router-dom';

import { showOffcanvas } from './favSlice';

const Header=()=>{

    const kart=useSelector(state=>state.cart.cart);
    const favItems=useSelector(state=>state.fav.fav);

   
   const [user,setUser]=useState(false);
   const [showchat, setshowchat] = React.useState(false);
   const dispatch = useDispatch();
   let cartCount = 0;
   let favCount = 0;
   kart.map((item) => {
     cartCount = cartCount + item.itemCount;
   });

   favItems.map((item) => {
      favCount = favCount + item.itemCount;
    });
  
   const options=[
      {label:'CAD', value:'CAD'},
      {label:'USA', value:'USA'},
      {label:'AUD', value:'AUD'}
   ];

   const[value,setValue]=React.useState("CAD");

   const handleChange = (event)=>{
    
      setValue(event.target.value);
     
   }

  
    const handleLogout=()=>
    {
      setUser(false);
      const auth = getAuth();
      signOut(auth).then(() => {
  
       setData({name:"",email:"",isLogged:false});
       setshowchat(true);
    
  }).catch((error) => {
   
  });
    }
    return(
    <>
    <header className="headerp">
         <div className="topbar">
            <div className="items">
             <form>
                  
                <label>
                <select value={value} onChange={handleChange} className="currency">
                  {

                     options.map((option)=>(

                       
                        <option value={option.value} key={option.id}>
                           {option.label}
                        </option>
                     ))
                    }
              </select> 
                  </label> 

                  </form>
         
               <div className="account">
               
                  {
                     
                     user?(
                        <button onClick={handleLogout} className="buttondesign" type="button">Sign Out</button>
                        
                     ):
                     (
 
                        <Link to="login" className='signin'>Login</Link>
   
                     )
                     }
                  
               <Link to="register" className='signin'> Create an Account</Link>
                    
             </div>

            
          
            </div>
         </div>

         <div>
         
            <div>
            <Menubar cartCount={cartCount} favCount={favCount}/>
            </div>
         </div>
       </header>

      
    </>
    )
}

export default Header;
