import React from "react";
import {auth} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './Message.css';



const Message=({message})=>{
    const[user]=useAuthState(auth);
   
    return(

        <div className="chat-bubble">
            <div className="chat-user">
            <p className="user-name">{message.name}</p>
            <p className="userMessage">{message.text}</p>
           </div>

        </div>
    );
}

export default Message;