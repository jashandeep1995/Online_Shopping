import { useSelector,useDispatch } from "react-redux";
import { fetchProducts} from "./productsSlice";

import {AddProduct} from './cartSlice';
import { useContext, useEffect } from "react";
import './Products.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

import { MyContext } from "./UseFilterContext";
const Products=()=>{

   
  const dispatch=useDispatch();
    const products=useSelector(state=>state.products.products);
    
    const xyz = useContext(MyContext);
    console.log(xyz);
    const[value,setValue]=useState("Alphabetically, Z-A");
    
    
    
    const sort=[
      {label:'Price, Low to High', value:'Price, Low to High'},
      {label:'Price, High to Low', value:'Price, High to Low'},
      {label:'Alphabetically, A-Z', value:'Alphabetically, A-Z'},
      {label:'Alphabetically, Z-A', value:'Alphabetically, Z-A'}
   ];
    useEffect(()=>{

        dispatch(fetchProducts());
        
      
    },[]);

    /*useEffect(()=>{

      const sortingData=()=>{

        products.map(product=>{

          return(
            console.log(product.title)
          );


        });
       
        if(value=='Alphabetically, A-Z')
        {
          sortData =[...products].sort((a,b)=>{
            return b.title.localeCompare(a.title);
          });
        }
        else if(value=='Alphabetically, Z-A')
        {
          sortData = [...products].sort((a,b)=>{
            return a.title.localeCompare(b.title);
          });
        } 
        else
        {
          return products;
        }
  
        console.log("sorting data");

        sortData.map(product=>{
          return(
            console.log(product.title)
          );
        })
        console.log(sortData);

      }

     sortingData();
      
    
  },[value]); */

  
  
 

   




    

    const addProduct = (prod) =>{
        const newItem = {
            pId: prod.id,
            name: prod.category,
            thumb: prod.image,
            rate: prod.price,
            itemCount: 1,
          };
          dispatch(AddProduct(newItem));
   
      }

     
    return(
   
      <>
     
    
     
      <select value={value} className="sorting" id="sort">
      <option disabled value="default">SORT BY</option>
                  {

                     sort.map((option)=>(

                       
                        <option value={option.value} key={option.id}>
                           {option.label}
                        </option>
                     ))
                    }
              </select> 

          <ul className="collections">    
          
        {
            products.map(product=>{return(
              
            
            
              
                   
                        
                      <li className="innerItems" key={product.id}>
           <Link to={`/product-details/${product.id}`}><img src={product.image} alt="Product Photo" title="Click here to see more Product details"/></Link>
                      <div className="productTitle">{product.title}</div>
                      <div className="productPrice">&#8377;{product.price}</div>   
                      <div className="orderButton"><input type="button" className="button" value="Add to Cart" onClick={()=> addProduct(product)}/></div>    
                      </li>
                      
         
                  

            )})
        }
          </ul>
          
    </>
    )
}
export default Products;