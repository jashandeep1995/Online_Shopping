import './Cart.css';
import { useSelector,useDispatch } from "react-redux";
import { RemoveProduct } from './cartSlice';
import { Link } from 'react-router-dom';


import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
  
  
  const Cart=()=> {

    const cart=useSelector(state=>state.cart.cart);
    let cartcount=0;

   
    cart.map((item) =>{
      cartcount =  cartcount + item.itemCount;
    })
    let total=0;
    for(let row of cart)
    {
      total = total + row.rate * row.itemCount;
    }
  
    const dispatch=useDispatch();

    const removeItem = (id, i) => {
     
      dispatch(RemoveProduct({ id, i }));
    };
  return (
  <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol lg="7">
                  <MDBTypography tag="h5">
                    <Link to="/" className="text-body">
                      <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                      shopping
                    </Link>
                  </MDBTypography>
  
                  <hr />
  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">You have {cartcount} items in your cart</p>
                    </div>
                    <div>
                      <p>
                        <span className="text-muted">Sort by:</span>
                        <a href="#!" className="text-body">
                          price
                          <MDBIcon fas icon="angle-down mt-1" />
                        </a>
                      </p>
                    </div>
                  </div>
  
              
              

                   {
                    cart.map((product,i) => (

                    
                  <MDBCard className="mb-3" key={product.pId}>

                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src={product.thumb}
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Product Photo" />
                          </div>

                          
                          <div className="ms-3">

                          
                            <MDBTypography tag="h5">
                            {product.name}
                            </MDBTypography>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                              {product.itemCount}
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                            {product.rate * product.itemCount}
                            </MDBTypography>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" 
                               
                               onClick={()=> removeItem(product.pId,i)}
                            
                            />
                          </a>
                            
                        </div>
                      </div>
                          
                    </MDBCardBody>
                  </MDBCard>
  
                   ))}
  
  
             
                </MDBCol>
  
                <MDBCol lg="5">
                  <MDBCard className="bg-primary text-white rounded-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h5" className="mb-0">
                          Card details
                        </MDBTypography>
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                      </div>
  
                      <p className="small">Card type</p>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-visa fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-amex fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                      </a>
  
                      <form className="mt-4">
                        <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                          placeholder="Cardholder's Name" contrast />
  
                        <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                          minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
  
                        <MDBRow className="mb-4">
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                              minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                          </MDBCol>
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                              maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                          </MDBCol>
                        </MDBRow>
                      </form>
  
                      <hr />
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total</p>
                        <p className="mb-2">{total.toFixed(2)}</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$20.00</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Grand Total(Incl. taxes)</p>
                        <p className="mb-2">{total.toFixed(2)}</p>
                      </div>
  
                      <MDBBtn color="info" block size="lg">
                        <div className="d-flex justify-content-between">
                          <span>${total.toFixed(2)} + $20.00</span>
                          <span>
                            Checkout{" "}
                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                          </span>
                        </div>
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  );
  }

  export default Cart;




  {
    /*
    
    
    import { useSelector,useDispatch } from "react-redux";
import { removeProduct } from "./cartSlice";

const Cart=()=>{

    const cart=useSelector(state=>state.cart.cart);
    const dispatch=useDispatch();
    return(
        <>
        <ul className="collections">     
      {
          cart.map(product=>{return(
          
            
                 
                      
                    <li className="innerItems" key={product.id}>
                    <img src={product.image} alt="Product Photo" />
                    <div className="productTitle">{product.title}</div>
                    <div className="productPrice">{product.price}</div>   
                    <div className="orderButton"><input type="button" className="button" value="Remove" onClick={()=>dispatch(removeProduct(product))}/></div>    
                    </li>
                    
       
                

          )})
      }
        </ul>
        
  </>
    );
}

export default Cart;
    
    */
  }