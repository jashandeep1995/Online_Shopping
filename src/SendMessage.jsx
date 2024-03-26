import { useState } from "react";
import {auth,db} from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import './SendMessage.css';

const SendMessage = () => {

const[message,setMessage]=useState("");

const sendMessage= async (event)=>{

  event.preventDefault();
  /*if(message.trim()==="")
  {
    alert("Enter Valid Message");
    return;
  }
*/

const {uid, displayName} = auth.currentUser;

await addDoc(collection(db, "messages"), {
   text:message,
   name:displayName,
   createdAt: serverTimestamp(),
   uid,
});
setMessage("");

scroll.current.scrollIntoView({ behavior: "smooth" })

};
 
    return(
    
    <form className="send-message" onSubmit={(event)=>sendMessage(event)}>
       <label>Enter Message:</label>
       <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input" value={message}
        placeholder="type message..." onChange={(e)=>setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    
    );
}

export default SendMessage;