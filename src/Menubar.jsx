import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Home.css';
import { showOffcanvas } from "./favSlice";
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';


const Menubar=(props)=>
{
  const dispatch = useDispatch();
 
   return(
     <>
   
     <div className='menubr'>
     <div> <MenuIcon className='menuiconn'/></div>

        <div className='menuitems'>
      
        <Link to="/products/category/men's clothing" className='categories'> Mens</Link>
        <Link to="/products/category/women's clothing" className='categories'> Women's</Link>  
        <Link to="/products/category/jewelery" className='categories'> Jewelery</Link>
        <Link to="/products/category/electronics" className='categories'>Electronics</Link> 
      
         </div>
        
         <div className="menubar">

           <div className="cart">
          <button className='favi' onClick={() => {
                    dispatch(showOffcanvas(true));
                  }}>
            
          <span className="fa-solid fa-heart heartt"></span><span className="itemcount">({props.favCount})</span>
            
            
            </button>  

             </div>




           <div className="cart">
        <Link to="cart"><ShoppingCartIcon className='carticon'/></Link><span className="itemcount">({props.cartCount})</span>
     

</div>

</div>  

</div>

   

</>
        
    )
}
export default Menubar;