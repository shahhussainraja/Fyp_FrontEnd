import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useFormik } from "formik";
import { Calendar4Event, GeoAlt, Clipboard2 } from 'react-bootstrap-icons';
import "./PostDetails.css";
import Swal from 'sweetalert2'
import 'animate.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'timeago.js'
import { bidSchema } from '../../Schemas/index';
import { useSelector } from 'react-redux';
import user from '../../images/userProfile.png'
import sellerServices from '../../Services/SellerServices';
import Contact from "../../Components/Contact/Contact"

const initialValues = {
  amount: ""
};

function PostDetails(props) {

  const { state } = useLocation();
  const navigate = useNavigate()
  const Loginprofile = useSelector((state) => state.userDetail)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: bidSchema,
      onSubmit: (values, action) => {
        // alert(JSON.stringify(values, null, 2));
        // const data = Object.fromEntries(formData);
        const message = `Dear ${state.buyerName} I’m writing this to hear back from you about My offer ${values.amount} On your post ${state.postTitle}. We would like to know if you’re still interested and how you’d like to move forward. Looking forward to hearing back from you soon. `
        sellerServices.newConversation({ senderId: Loginprofile.id, receiverId: state.buyerId }).then((res) => {
          if (res) {
            sellerServices.sendBidMessage({ senderId: Loginprofile.id, message: message, conversationId: res._id, offerMessage: true, sellerId: Loginprofile.id, sellerName: Loginprofile.name, buyerId: state.buyerId, buyerName: state.buyerName, postTitle: state.postTitle, postDetail: state.postDetail, amount: values.amount, city: state.city, deliveryLocation: state.deliveryLocation, image: state.image, postId: state._id }).
              then((res) => {
                if (res) {
                  action.resetForm();
                  Swal.fire({
                    title: 'Your offer is successfully sent',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  }).then(() => {
                    navigate("/FindJobs")
                  })
                }
              }).catch((e) => console.log(e.message))
          }
        }).catch((e) => console.log(e.message))
      }
    })


  return (

    <div className="app" style={{height:"100%" , marginTop:"70px"}}>
      {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <h3>Product Requirements</h3>
      </div> */}

      <div className="details" >

        <div className="big-img">
          <img src={`http://localhost:8080${state.image}`} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{state.postTitle}</h2>
            <span>Rs.{state.price}</span>
            <p>{state.category} category</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img style={{ height: "1.5rem", width: "1.5rem" }} src={user}></img>
            <p style={{ padding: "3px", fontSize: "15px", marginTop: "3px" }}>{state.buyerName}</p>
          </div>
          <p><Clipboard2 style={{ margin: "5px", }} />{state.postDetail}</p>
          <p><Calendar4Event style={{ margin: "5px" }} />{state.dueDate}</p>
          <p><GeoAlt style={{ margin: "5px" }} />{state.deliveryLocation}<span style={{ fontWeight: "bold" }}>, {state.city} </span></p>
          {/* <p><GeoAltFill style={{margin:"5px"}}/>{state.city}</p> */}

          {Loginprofile.userType === "seller" &&

            <div className='makeoffer-box'>
              <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <input
                  onChange={handleChange}
                  onFocus={handleBlur}
                  name='amount' id='amount'
                  className='input'
                  type='number'
                  placeholder='Enter Amount/Rs'>
                </input>
                {errors.amount && touched.amount ? (
                  <p style={{ fontSize: "10", padding: "0px", margin: "0px", color: "red" }}>{errors.amount}</p>
                ) : null}
                <button className='makeoffer-button' type="submit" >Make Offer</button>
              </form>
            </div>

          }

        </div>
      </div>
    </div>

  )
}

export default PostDetails