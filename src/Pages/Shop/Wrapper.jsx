import React, { useEffect, useState } from "react"
import "./shop.css"

import { FaShoppingCart, AiFillShop ,FcShop ,FaStore} from 'react-icons/fa';
// import user from '../../images/userProfile.png'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import sellerServices from "../../Services/SellerServices";
import { Image } from 'antd'

const Wrapper = ({content,shopName}) => {

  const Loginprofile = useSelector((state) => state.userDetail)
  let   inputValue = "";
  return (
    <>
      <section className='wrapper background'>
      <div className='productList1'>
            <div key={content?.id} className='productCard1'>
                <div className='cardTop1'>
                    <div style={{display:"flex"}}>
                    </div>
                      <div className="productCard__content1">
                      <p ><FaStore />{shopName}</p>
                      <p style={{color:"green"}}>Instock</p>
                    </div>
                </div>
               <div className='imgContainer1'>
                {/* <img src={`http://localhost:8080${content?.ProductImage}`} alt='product-img1' className='productImage'></img> */}
                <Image
                      width={200}
                      src={`http://localhost:8080${content?.ProductImage}`}
                    />
                </div>
                <div className='productCard__content1'>
                    <h6>{content?.productName}</h6>
                    <div className='displayStack__1'>
                        <div className='productPrice'><h6>Rs/{content?.productAmount}</h6></div>
                    </div >
                </div>
                <div className='postCardBtn'>
                    <Link to="/Productview" state={content} style={{ color: "white", textDecoration: "inherit" }} className='postCard-btn1' >Open</Link>
                    {
                      Loginprofile.userType === "buyer" &&
                      <Link className='postCard-btn1' style={{color:"inherit", textDecoration: "inherit" }} ><FaShoppingCart /></Link>
                    }
                    </div>
            </div>
        </div>  
      </section>
    </>
  )
}

export default Wrapper
