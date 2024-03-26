import './Login.css';
import { Link } from 'react-router-dom';
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import firebase from './firebase';
import {auth,db} from "./firebase";
import React, { useState } from 'react';
import { query, where, getDocs } from "firebase/firestore";

const Login = ()=>{

    const [user,setUser]=useState(false);
    const[data,setData]=useState([]);
    const[info,setInfo]=useState({email:"",password:""});
    const [showed, setShowed] = useState(false);
   
   
    const handleChange=(evt)=>{
        setInfo({...info,[evt.target.name]:evt.target.value});
      
    }
   
  
    const handleLoginn= async(event)=>{

      event.preventDefault();
     
     const q = query(collection(db, "registerdata"), where("email", "==", info.email));
        
     
          
        const querySnapshot = await getDocs(q);

       
        
         
        querySnapshot.forEach((doc) => {
            
            if(doc.data())
            {
            if(doc.data().email===info.email)
            {

              alert("Login successfully");
             
            
              setUser(true);
             
              setData({name:doc.data().name,email:doc.data().email,isLogged:true});
              
               
           
            }

          return;

          }
         

          })

        }
        
        

    const handleLogin=()=>{

        setUser(true);
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({
          'login_hint': 'username@gmail.com'
        });
    
        const auth = getAuth();
    
        signInWithPopup(auth, provider)
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
       
        const user = result.user;
       
        
       
        setData({name:user.displayName,email:user.email,isLogged:true});


      }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
       
        //const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
        
      });
    
       
      } 

    return(
        <>

        <div className="loginpage">

            {
                
                user?(<p>Welcome {data.name}!!</p>):(<p>Login to Shop!!</p>)

            }

            
          
            <button className='loginbutton' onClick={handleLogin}>
                Login with Google
            </button>
            
            <h5>OR</h5>
            <span>Login using Your Registered Email Address</span>

            <form>

                <label for="email" className='emailll'>Email</label>
                <input type="email" name="email" className='emaill' value={info.email} onChange={handleChange}/>
               
                <label for="password" className='emailll'>Password</label>
                <input type="password" name="password" className='emaill' value={info.password} onChange={handleChange}/>

                <button className='buttondesign' onClick={handleLoginn}>
                Login
            </button>

               
            </form>

            <span className='noaccount'>Don't have an account?  <Link to="/register">Sign up</Link> </span>
           
        </div>
       
        </>
    );
}

export default Login;