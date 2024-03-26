import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';
import StarRating from "./StarRating";
import {AddProduct} from './cartSlice';
import { useDispatch } from "react-redux";
import { addFav } from "./favSlice";
import { useSelector } from "react-redux";

const ProductDetails=()=>{

    const[data,setData]=useState([]);
    const favItems=useSelector(state=>state.fav.fav);

    const dispatch=useDispatch();
    const {id}=useParams();

    useEffect(()=>{
        
        getData();
    },[])

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

      const replaceFavIcon = (prod) => {

        const newItem = {
            pId: prod.id,
            name: prod.category,
            thumb: prod.image,
            rate: prod.price,
            itemCount: 1,
          };

        dispatch(addFav(newItem));
      };


    const getData=()=>
    {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) =>
        {
            const rcds=[...data];
            rcds.push(response.data);
            setData(rcds);
        })
        .catch((error) =>
        {
            console.log(error);
        })
    }

    

    return(
        <>
        
        {
            data.map(prod =>{
                return(
                    <div key={prod.id} className="data">
                        <div className="cols">
                            <div className="img_div">
                                <img src={prod.image} alt={prod.title} width="500" height="600" />
                            </div>

                            <div className="details">
                              <div className="single-product">
                                <h2>{prod.title}</h2>
                              </div>
                              <div className="description">
                                {prod.description}
                              </div>
                              <div className="price">
                                Price: &#8377;{prod.price}
                              </div>
                              <div className="category">
                                Category: {prod.category}
                              </div>
                              <div className="rating">
                              Rating: &nbsp; {prod.rating.rate}
                              <StarRating rating= { prod.rating.rate > 2.5 ||
                                   prod.rating.rate > 3.5 ||
                                   prod.rating.rate > 4.5
                                   ?
                                   Math.ceil(prod.rating.rate)
                                   :
                                   Math.floor(prod.rating.rate)} />
                                   <button className="btn" type='submit' onClick={() => replaceFavIcon(prod)}> Add To Favorite</button>
                                   <input type="button" className="btn" value="Add to Cart" onClick={()=> addProduct(prod)}/>
                              </div>
                               
                            </div>
                        </div>
                    </div>
                );
            })
        }
        
        </>
    );
}
export default ProductDetails