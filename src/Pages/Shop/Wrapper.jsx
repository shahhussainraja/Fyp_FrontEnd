import React, { useEffect, useState } from "react"
import "./shop.css"

import { FaShoppingCart, AiFillShop ,FcShop ,FaStore} from 'react-icons/fa';
// import user from '../../images/userProfile.png'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import sellerServices from "../../Services/SellerServices";
import { Image, message } from 'antd'
import user from '../../images/userProfile.png'
import { addProduct } from "../../Redux/AddToCartReducer";

const Wrapper = ({content,shopName , sellerId}) => {


  const Loginprofile = useSelector((state) => state.userDetail)
  const dispatch = useDispatch();
  const addToProduct = ()=>{
    dispatch(addProduct({...content,sellerId,shopName,buyerId : Loginprofile.id}))
    message.success("Added to Cart!");
  }

  return (
    <>
      <section className='wrapper background'>
      <div className='productList1'>
            <div key={content?.id} className='productCard1'>
                <div className='cardTop1'>
                      <div className="productCard__content1">
                      <p style={{marginLeft:"10px"}} ><FaStore style={{marginRight:"2px"}} />{shopName}</p>
                      <p style={{color:"green"}}>Instock</p>
                    </div>
                </div>
               <div className='imgContainer1'>
                <img src={`http://localhost:8080${content?.ProductImage}`} alt='product-img1' className='productImage'></img>
                {/* <Image
                      width={200}
                      src={`http://localhost:8080${content?.ProductImage}`}
                    /> */}
                </div>
                <div className='productCard__content1'>
                    <h6>{content?.productName}</h6>
                    <div className='displayStack__1'>
                        <div className='productPrice'><h6>Rs.{content?.productAmount}</h6></div>
                    </div >
                </div>
                <div className='postCardBtn'>
                    <Link to="/Productview" state={{...content,shopName}} style={{ color: "white", textDecoration: "inherit" }} className='postCard-btn1' >Open</Link>
                    {
                      Loginprofile.userType === "buyer" &&
                      <button className='postCard-btn1' style={{color:"inherit", textDecoration: "inherit" }} onClick={()=>addToProduct()} ><FaShoppingCart  /></button>
                    }
                    </div>
            </div>
        </div>  
      </section>
    </>
  )
}

export default Wrapper
