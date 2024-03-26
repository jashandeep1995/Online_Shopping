import {auth,db} from "./firebase";
import firebase from './firebase';
import { useEffect, useState } from "react";
import { query, where, getDocs, QuerySnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";


import './Appointment.css';
const Appointment =  () =>{

    const[record,setRecord]=useState([]);
    const[info,setInfo]=useState({namee:"",desc:"",phone:""});

    
   

        const fetchData= async()=>{

          
          await getDocs(collection(db, "appointment")).then((querySnapshot)=>{
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(), id:doc.id}))

                setRecord(newData);
                console.log(record);
          })   
           
        }
        
      useEffect(()=>{
        fetchData();
      },[])
            
  const appointbook = (e) =>{
    e.preventDefault();
    alert("Slot has been Selected for an Appointment");
  }

  const confirmbook = (e) =>{
    e.preventDefault();
    alert("A Booking Confirmation has been sent to an email");
    setInfo({namee:"",desc:"",phone:""});
  
  }

  const handleChange=(evt)=>{
    setInfo({...info,[evt.target.name]:evt.target.value});
   

}
        
    return(
    <div className="appointpage">
    
    <p className="slott">Please select the Time Slot for the Appointment. Otherwise, we will assign a random slot.</p> <p className="slott">You will receive an email Confirmation in your registered account.</p>
       <form className="appoint" onSubmit={confirmbook} >

        

<label for="email">Who Are You Booking For?</label>
<input type="text" name="namee" required value={info.namee} onChange={handleChange}/>

<label for="desc">Description</label>
<textarea name="desc" value={info.desc} onChange={handleChange} rows="5" cols="95" placeholder='Enter any special requests to share with the store!!'/>

<label for="phone">Phone Number</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required value={info.phone} onChange={handleChange}/>
<p>Pick a Time Slot</p>
{
    record.map((row,i)=>{
        return(

            <div key={i}>
            <button onClick={appointbook} className="slot">{row.Date}  {row.Time}</button>
         </div>

        )
       
       
    })


}
<button className='buttondesign'>
    Book an Appointment
</button>

</form>
<h2>Cancellation Policy</h2>
<p className="notice">Please reschedule or cancel att least 24 hours before the appointment. Otherwise, we may charge a Cancellation fee of 50% the price of your scheduled appointment. Please provide us 24 hours notice for Cancellation.</p>
    </div>
    );
}

export default Appointment;