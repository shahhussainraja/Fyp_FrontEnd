import React from 'react'
import "./ProductView.css"
import { useLocation } from 'react-router-dom'

function ProductView() {
  const {state} = useLocation();

  return (
<div className="app">
              
            <div className="details" >
              <div className="big-img">
                <img src={`http://localhost:8080${state.ProductImage}`} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{state.productName}</h2>
                  <span>Rs {state.productAmount}</span>
                </div>

                <p>{state.productDetail}</p>
                <p>{state?.productExtraInformation}</p>

                <button className="cart">Add to cart</button>

              </div>
            </div>
      </div>
  )
}

export default ProductView