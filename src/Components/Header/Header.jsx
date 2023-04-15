import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import image from '../../images/cover.png'
import { motion } from "framer-motion";
import './header.css'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigation = useNavigate();

  return (
    <div className='container'>
      <div className='name'>
        <h1><span>Bespoke</span><br />
          {/* A Customized Product Platform */}
          <TypeAnimation
            sequence={[
              'A Customized', // Types 'One'
              1000, // Waits 1s
              'Product', // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              'A Customized Product Platform', // Types 'Three' without deleting 'Two'
              2000,
              () => {
                console.log('Sequence completed'); // Place optional callbacks anywhere in the array
              }
            ]}
            wrapper="span"
            speed={10}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '40px', display: 'inline-block' }}
          />
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <p className='details'>Find your dream customized products by sitting at home. Your dreams are our responsinility.</p>
        </motion.div>


        <div className='header-btns'>
          <a className='cv-btn' style={{ borderRadius: 1, marginLeft: 0, textDecoration: "inherit", cursor: "pointer" }} onClick={() => navigation("/Post")}>Post Order</a>
          <a href='#' className='cv-btn' style={{ borderRadius: 1 }}>Get Order</a>
          <a className='cv-btn' style={{ borderRadius: 1, textDecoration: "inherit", cursor: "pointer" }} onClick={() => navigation("/Shop")}>Shop</a>
        </div>


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
          <img style={{ width: "27rem", height: "33rem", marginLeft: '35rem', marginTop: '1rem' }} src={image} alt='' />
        </motion.div>
      </div>
    </div>

  )
}

export default Header
