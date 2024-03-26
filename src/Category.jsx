import { useParams,Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {AddProduct} from './cartSlice';
import './Products.css';

const Category=()=>{

    const data=useSelector(state=>state.products.products);
    const dispatch = useDispatch();

    const {category} = useParams();
    
    useEffect(() => {
        if (data.length == 0) {
          dispatch(fetchProducts());
        }
      }, [category]);
    
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
      <ul className="collections">     
        {
            data.map(product=>{
                
                if(product.category==category){
                
                return(
            
              
                   
                        
                      <li className="innerItems" key={product.id}>
           <Link to={`/product-details/${product.id}`}><img src={product.image} alt="Product Photo" title="Click here to see more Product details"/></Link>
                      <div className="productTitle">{product.title}</div>
                      <div className="productPrice">&#8377;{product.price}</div>   
                      <div className="orderButton"><input type="button" className="button" value="Add to Cart" onClick={()=> addProduct(product)}/></div>    
                      </li>
                      
         
                  

            )
}})
        }
          </ul>
    </>
    );
    
}

export default Category;