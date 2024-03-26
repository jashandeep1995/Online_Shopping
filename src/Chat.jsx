import Message from "./Message";
import SendMessage from "./SendMessage";
import './Chat.css';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect,useRef,useState } from "react";
import {query,collection,orderBy,onSnapshot,limit, QuerySnapshot} from "firebase/firestore";
import {db} from "./firebase";
import {auth} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Products from "./Products";


const Chat=()=>{

    const[messages,setMessages]=useState([]);
    const [showed, setShowed] = useState(false);
   
    const[user]=useAuthState(auth);
   
   
    const scroll=useRef();

    const Login=()=>{

        alert("Please Sign in First using your Gmail account to chat with us");

    }
    useEffect(()=>{
        const q= query(
            collection(db,"messages"),
            orderBy("createdAt","desc"),
            limit(50)
           );

           const unsubscribe=onSnapshot(q, (QuerySnapshot) =>{
            const fetchedMessages=[];
            QuerySnapshot.forEach((doc)=>{
                fetchedMessages.push({ ...doc.data(), id: doc.id});
            });
            const sortedMessages=fetchedMessages.sort((a,b)=> a.createdAt - b.createdAt);
            setMessages(sortedMessages);
        });
        return ()=> unsubscribe;

    },[]);

  

    return(
        <>
     
    <div className="chat-box" style={showed ? {display: "block"} : {display: "none"}}>
    <div className="close">   <CloseIcon onClick={(e)=>setShowed(false)}/> </div>
    <h1>Welcome</h1>
   
       {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
   
    <div ref={scroll}></div>
    <SendMessage scroll={scroll} />
   
    </div>
     {
        user?
        ( <div className='chat' onClick={(e)=>setShowed(true)} >Chat with us <ChatBubbleIcon/></div>):
        ( <button className='chat' type="button" onClick={Login}>Signin to Chat with us <ChatBubbleIcon /> </button>)
        
    }
    </>
    );
}

export default Chat;