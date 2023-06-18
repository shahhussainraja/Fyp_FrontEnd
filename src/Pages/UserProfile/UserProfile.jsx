import React, { useEffect, useState } from 'react';
import { FaEdit} from 'react-icons/fa';
import { Descriptions , } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import authServices from '../../Services/AuthServices';
import { Spin } from 'antd';
import { Steps } from 'antd'
import { format } from 'timeago.js'
import { Button, Modal,Input } from 'antd';
import Swal from 'sweetalert2';
import "./UserProfile.css"  
import { updateLogged } from '../../Redux/userReducer';

const stepsDetail = [
  {
    title: 'Assigned',
    description :"Order has been Assigned",
  },
  {
    title: 'Processing',
    description :"Order is Processing",
  },
  {
    title: 'Complete',
    description :"Order is Completed",
  },
  {
    title: 'Shipped',
    description: "Order has been Shipped",
  },
]

export default function UserProfile() {
const user = useSelector((state)=>state.userDetail)

const dispatch = useDispatch();
  return (
    <div className="container">
    
      <div className="py-5 h-100">
        <div className="justify-content-center align-items-center h-100"  style={{marginTop:"1rem",borderRadius:"5px" ,padding:"25px", backgroundColor:"ghostwhite" }}>
          <div lg="6" className="mb-4 mb-lg-0">
            
            <div className="mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="g-0">
              
                <div md="4" className="gradient-custom text-center text-black"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' , marginTop:"50px" }}>
                    <h4 style={{color:"#2693b2", fontWeight:"bold"}}>Personal Profile</h4>
                  <img src={`http://localhost:8080${user?.image}`} 
                    alt="Avatar" className="my-5" style={{ width: '100px',height:"100px",borderRadius:"50px" }} fluid />
                  <h5 style={{color:"#E3BE00"}}>{user.name}</h5>
                  <p style={{color:"#2693b2"}}>Verified user</p>
                  <div style={{display:"flex", padding:"10px", justifyContent:"center"}}>
                  <p style={{color:"#2693b2"}}>Edit your profile by click on this icon</p>
                  <FaEdit style={{color:"#2693b2", margin:"3px", marginLeft:"10px"}} far icon="edit mb-5" />
                  </div>
                </div>
                <div md="8">
                  <div className="p-4">
                    <h5 style={{fontWeight:"bold", color:"#2693b2"}}>Information</h5>
                    <hr className="mt-0 mb-4" />
                    <div className="pt-1">
                    
                    <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Username</p>
                        <p className="text-muted">{user.name}</p>
                      </div>
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Email</p>
                        <p className="text-muted">{user.email}</p>
                      </div>
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Phone</p>
                        <p className="text-muted">123 456 789</p>
                      </div>
                      
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>City</p>
                        <p className="text-muted">Lahore</p>
                      </div>
                    </div>
                    <h5 style={{fontWeight:"bold", color:"#2693b2"}}> Order History</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}