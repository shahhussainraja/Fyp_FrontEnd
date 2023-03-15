import React, {useState} from 'react'
import Navbar from './Navbar'
import image from '../images/cover.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Post from '../Pages/Post/Post'
import { motion } from "framer-motion";
function Header() {

  const [post, setPost] = useState(false);
  const handleClosePost = () => setPost(false);
  const handlePost = () => setPost(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // const ShowAlertComponent = () => {
  //   const showAlert = () => {
  //     return(
  //       <Post></Post>
  //     )
  //   }}


  return (
    <div>
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
          <div style={{display:"flex",flexDirection:"row"}}>
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
                      <img style={{ width: "450px", height: "500px", marginLeft: '700px', marginTop:'55px' }} src={image} alt=''/>  
                  </motion.div>
      </div>
      </div>

  ) 
}

export default Header
