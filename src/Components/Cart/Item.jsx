import React from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem, removeProduct } from '../../Redux/AddToCartReducer';
import { message } from 'antd';

function Item({product}) {
    const cartDetail = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    const removeItem = ()=>{
        dispatch(removeProduct({id : product._id}));
        message.success("Item removed!")
    }

    const incrementcartItems = ()=>{
        dispatch(incrementItem({id : product._id}))
    }

  const decrementcartItems = ()=>{
        dispatch(decrementItem({id : product._id}))
    }



    return (
        <div>

            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage
                        src={`http://localhost:8080${product?.ProductImage}`}
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3">
                    <MDBTypography tag="h6" className="text-muted">
                        {product?.productName}
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                    {/* <MDBBtn color="link" className="px-2"> */}
                        <MDBIcon fas icon="minus" onClick={()=>decrementcartItems()} style={{cursor:"pointer"}} />
                    {/* </MDBBtn> */}

                    <MDBInput type="number" min="0" defaultValue={1} value={product.quantity} size="xs" style={{marginLeft:"2px",marginRight:"5epx"}} />

                    {/* <MDBBtn color="link" className="px-2" >  */}
                        <MDBIcon fas icon="plus" onClick={()=>incrementcartItems()} style={{cursor:"pointer"}} />
                    {/* </MDBBtn> */}
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="text-end">
                    <MDBTypography tag="h6" className="mb-0">
                        {product.productAmount}
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <a  className="text-muted" style={{cursor:"pointer"}} onClick={()=>removeItem()}>
                        <MDBIcon fas icon="times" />
                    </a>
                </MDBCol>
            </MDBRow>

            <hr className="my-4" />
        </div>
    )
}

export default Item