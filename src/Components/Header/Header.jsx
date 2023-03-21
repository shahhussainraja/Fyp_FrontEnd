import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import image from '../../images/cover.png'
import { motion } from "framer-motion";
import './header.css'


function Header() {
  return (
    <div className='container'>
      <div className='name'>
          <h1><span>Bespoke</span><br/>A Customized Product Platform</h1>
          <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}>
          <p className='details'>Find your dream customized products by sitting at home. Your dreams are our responsinility.</p>           
          <div className='header-btns'>
          <a href='/Post' className='cv-btn' style={{borderRadius:1,marginLeft:0}}>Post Order</a>
          <a href='#' className='cv-btn' style={{borderRadius:1}}>Get Order</a>
          <a href='#' className='cv-btn' style={{borderRadius:1}}>Shop</a>
          </div>
         </motion.div>
      </div>
      <div className='sideImage'>
      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}>
                      <img style={{ width: "27rem", height: "33rem", marginLeft: '35rem', marginTop:'1rem' }} src={image} alt=''/>  
                  </motion.div>
      </div>
      </div>

  ) 
}

export default Header
