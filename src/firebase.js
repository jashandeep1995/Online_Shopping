
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWoCtyJ9Wf67I1wc4taH6uO05YZoARu5A",
  authDomain: "react-chat-4daf7.firebaseapp.com",
  projectId: "react-chat-4daf7",
  storageBucket: "react-chat-4daf7.appspot.com",
  messagingSenderId: "904817172443",
  appId: "1:904817172443:web:4b5f06c3b23068532351fe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;