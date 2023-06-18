import React from 'react'
import "./ProductView.css"
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {FaStore} from 'react-icons/fa';
import { addProduct } from '../../Redux/AddToCartReducer';
import { message } from 'antd';
function ProductView() {
  const { state } = useLocation();
  console.log(state)
  const user = useSelector((state) => state.userDetail)

  const dispatch = useDispatch();
  const addToProduct = ()=>{
    dispatch(addProduct({...state}))
    message.success("Added to Cart!");
  }




  return (
    <div className="app">
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <h3>Product Requirements</h3>
      </div>
      <div className="details" >
        <div className="big-img">
          <img src={`http://localhost:8080${state.ProductImage}`} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{state.productName}</h2>
            <span>Rs.{state.productAmount}</span>
            <p ><FaStore style={{ marginRight: "5px" }} />{state.shopName}</p>
          </div>

          <p>{state.productDetail}</p>
          <p>{state?.productExtraInformation}</p>

          {
            user.userType === "buyer" ? <>
              <button className="cart"  onClick={()=>addToProduct()}>Add to cart</button>
            </> : <></>
          }

        </div>
      </div>
    </div>
  )
}

export default ProductView