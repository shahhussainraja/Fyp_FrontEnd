import React from 'react'
import "./SellerProfile.css"
import { BrowserRouter as Router, Routes, Route,Link ,Outlet} from "react-router-dom"
import ProductList from './ProductList'
import Profile from "./Profile"
import Reviews from "./Reviews"




export default function SellerProfile() {


  return (
    <>

        <div className='Container'>
          <div className="Left">
          <Link to="Profile" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"3px",paddingLeft:"20px"}}>Profile</Link> 
          <Link to="ProductList" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"3px",paddingLeft:"20px"}}>Invertry</Link> 
          <Link to="Reviews" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"3px",paddingLeft:"20px"}}>Reviews</Link> 

          </div>
          <div className='Right'>
              <Outlet />
          </div>
        </div>
       
        
    </>
  )
}
