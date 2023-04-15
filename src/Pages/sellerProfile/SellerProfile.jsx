import React from 'react'
import "./SellerProfile.css"
import { BrowserRouter as Router, Routes, Route,Link ,Outlet} from "react-router-dom"



export default function SellerProfile() {


  return (
    <>

        <div className='Container'>
       
          <div className="Left">
          <div className='dashboardHeader'>
          <h4>Dashboard</h4>
        </div>
          <Link to="Profile" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"3px",padding:"20px", textAlign:"center"}}>Profile</Link> 
          <Link to="ProductList" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"3px",padding:"20px", textAlign:"center"}}>Invertry</Link> 
          <Link to="Orders" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"3px",padding:"20px", textAlign:"center"}}>Orders</Link> 
          <Link to="Reviews" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"3px",padding:"20px", textAlign:"center"}}>Reviews</Link> 

          </div>
         
          <div className='Right'>
          <div className='dashboardHeader'>
          <p className='h4'>Welcome Users</p>
        </div>
        <div style={{padding:"40px"}}>
        <Outlet/>
        </div>
             
          </div>
        </div>
       
        
    </>
  )
}
