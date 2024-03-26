import { useReducer, useState } from "react";
import React from "react";
import Products from "./Products";
import {iss,filterReducerr} from "./filterReducerr";
export const MyContext=React.createContext();


const usefiltercontext=()=>{

  console.log("data:");
    //const[state,dispatch]=useReducer(filterReducerr,iss);
    const[data,setData]=useState("jashan");
  
    console.log(data);
   
   
     const sorting = () =>{

        console.log("jashan");
  
      
        dispatch({type: "GET_SORT_VALUE"});
  

     }

     return (


     
      <MyContext.Provider value="LIGHT">
        <Products />
      </MyContext.Provider>
      
     
     );
     
   

}

export default usefiltercontext;


