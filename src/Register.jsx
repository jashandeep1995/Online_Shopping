import Header from "./Header";
import './Register.css';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import firebase from './firebase';
import { useState } from "react";
import {auth,db} from "./firebase";
import { query, where, getDocs } from "firebase/firestore";



const Register = ()=>{

    const[info,setInfo]=useState({namee:"",email:"",password:""});
   
    const handleChange=(evt)=>{
        setInfo({...info,[evt.target.name]:evt.target.value});
       
  
    }
    const handleSave= async (event)=>{

        event.preventDefault();
        
      /*  const q = query(collection(db, "registerdata"), where("email", "==", info.email));
        
     
          
        const querySnapshot = await getDocs(q);

       
        
         
        querySnapshot.forEach((doc) => {
          console.log("ghj");
            console.log(doc.id, " => ", doc.data());
            console.log(doc.data().email);
            if(doc.data())
            {
            if(doc.data().email===info.email)
            {
              console.log("woddajs");
              console.log("Email Already exist");
            }
          }
          else
          {
          }

          })
        
        */
   await addDoc(collection(db, "registerdata"), {
          name:info.namee,
          email:info.email,
          password:info.password,
          createdAt: serverTimestamp(),
       });
       setInfo({namee:"",email:"",password:""});
  
       alert("User has been Created");
  
      
    }
    return(
       
        <div className="registerform">
          
          <form className="register">
          <p>Register Here...</p>

             <label for="email">Name</label>
             <input type="text" name="namee" required value={info.namee} onChange={handleChange}/>

             <label for="email">Email</label>
             <input type="email" name="email" required value={info.email} onChange={handleChange}/>

             <label for="password">Password</label>
             <input type="password" name="password" required value={info.password} onChange={handleChange}/>

            <button className='buttondesign' onClick={handleSave}>
                 Login
            </button>


         </form>
         
         <div className="banner"><img src="/register.jpg" alt="shopping" /></div>
         </div>
      
    );
}

export default Register;