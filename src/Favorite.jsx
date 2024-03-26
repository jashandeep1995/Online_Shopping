import {
    COffcanvas,
    COffcanvasBody,
    COffcanvasHeader,
    COffcanvasTitle,
    CButton,
    CCloseButton,
  } from "@coreui/react";
  
  import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBTypography,
  } from "mdb-react-ui-kit";
  
  import { showOffcanvas, remFav } from "./favSlice";
  import { useDispatch, useSelector } from "react-redux";
  import { AddProduct } from "./cartSlice";
  import './Favorite.css';
 

  const Favorite=()=>{
    const dispatch = useDispatch();
    const favItems = useSelector(state => state.fav.fav);
    const visible = useSelector(state => state.fav.show);
    console.log(favItems);
    
    function show()
    {
        dispatch(showOffcanvas(false));
    }

    const addProduct = (prod) =>{
    
        const newItem = {
            pId: prod.pId,
            name: prod.name,
            thumb: prod.thumb,
            rate: prod.rate,
            itemCount: 1,
          };
          dispatch(AddProduct(newItem));
          console.log(newItem);
      }

      const removeItem = (id, i) => {
     
        dispatch(remFav({ id, i }));
      };

      return (
        <>
          <COffcanvas placement="end" visible={visible} onHide={show}>
            <COffcanvasHeader>
              <COffcanvasTitle> </COffcanvasTitle>
              <CCloseButton className="text-reset" onClick={show} />
              
            </COffcanvasHeader>
    
            <COffcanvasBody>
            <div className="favitems">Add Favorite Items Here </div>
              {

                
              favItems.map((item, i) => (
                <MDBCard className="mb-3" key={i}>
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <MDBCardImage
                            src={item.thumb}
                            fluid
                            className="rounded-3"
                            style={{ width: "65px" }}
                            alt="Shopping item"
                          />
                        </div>
    
                        <div className="ms-3" style={{ width: "76%" }}>
                          <MDBTypography tag="h5">{item.name}</MDBTypography>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon
                          fas
                          icon="cart-plus"
                          className="mx-5"
                          onClick={() => addProduct(item)}
                          title="Add To Cart"
                        />
                        <MDBIcon
                          fas
                          icon="trash-alt"
                          onClick={() => removeItem(item.pId, i)}
                        />
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </COffcanvasBody>
          </COffcanvas>
        </>
      );

  }

  export default Favorite;