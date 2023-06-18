import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/AddToCartReducer";
import Button from 'react-bootstrap/Button';
import authServices from "../../Services/AuthServices";
function AddToCart() {

  const cartDetail = useSelector((state)=> state.cart)
  const navigate  = useNavigate();
  const dispatch = useDispatch();

  const clearCartProducts =()=>{
    dispatch(clearCart())
  }

  const makeCartPayment =  ()=>{
    authServices.makeCartPayment(cartDetail).then((res)=>{
      if(res.url){
        window.location.href = res.url;
      }
    }).catch((err)=>{
      console.log(err)
    })
  }





  return (
    <>
      {/* <div className="addToCartContainer"> */}
        <section className="cart" style={{ backgroundColor: "#eee", marginTop:"80px"}}>
          <MDBContainer className="py-2 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol size="12">
                <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography tag="h4" className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </MDBTypography>
                            <MDBTypography className="mb-0 text-muted">
                            {cartDetail.itemsCounter} items
                            </MDBTypography>
                          </div>

                          <hr className="my-4" />

                          {
                            cartDetail?.selectedItems?.map((data)=>(
                              <Item  product={data} key={data._id}/>
                            ))
                          }

                          <hr className="my-4" />

                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              <MDBCardText  className="text-body" onClick={()=>navigate("/Shop")} style={{cursor:"pointer"}}>
                                <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                                to shop
                              </MDBCardText>
                            </MDBTypography>
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol lg="4" className="bg-grey">
                        <div className="p-5">
                          <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                            Summary
                          </MDBTypography>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              items 
                            </MDBTypography>
                            <MDBTypography tag="h5">{cartDetail.itemsCounter}</MDBTypography>
                          </div>

                    

                          <MDBTypography tag="h5" className="text-uppercase mb-3">
                            Give code
                          </MDBTypography>

                          <div className="mb-5">
                            <MDBInput size="lg" label="Enter your code" />
                          </div>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Total price
                            </MDBTypography>
                            <MDBTypography tag="h5">RS {cartDetail.total}</MDBTypography>
                          </div>

                    
                          <Button variant="success" onClick={()=>makeCartPayment()}>Check out</Button>
                          <Button variant="danger" style={{marginLeft:"3px"}} onClick={()=>clearCartProducts()}>Clear cart</Button>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      {/* </div> */}

    </>
  )
}

export default AddToCart