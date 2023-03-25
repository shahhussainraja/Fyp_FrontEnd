import React, {useEffect, useState} from 'react'
import logo3 from '../../images/logo4.png';
import authServices from '../../Services/AuthServices';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { ArrowRight } from 'react-bootstrap-icons';
import { BoxArrowInRight, PersonFill } from 'react-bootstrap-icons';
import './navbar.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'




function Navbar() {

  const value  = useSelector((state) => state.userDetail.loggedIn)
  const [modalShow, setModalShow] = useState(false);
 
 const [sellerState,setSellerState] = useState(false)
 const [type,setType] = useState("")


//navbar
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
      const sellerStateMethod =()=>{
        if(sellerState=='true')
        {
          console.log("hello")
        }
      }
      useEffect(()=>{console.log("type: ", type)})
      const SetFlag =()=>{
        SetFlag(true)
      }

      const handleLoginForm = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        authServices.login(event.target[0].value,event.target[1].value).
        then(res=>{
          console.log(res)
        })
        .catch()

      }

      //image handler
        const [image, setImage] = useState('')
        function handleImage(e) {
          setImage(e.target.files[0])
        }

        //navigate to user profile
        const navigate = useNavigate();
        const navigateToProfile = () => {
          navigate('/UserProfile');
        };





  return (
      <>
      <div className='container'>
    <nav className={nav ? 'nav active' : 'nav'}>
      <div>
      <a href='/' className='logo'>
          <img src={logo3} alt=''/>
      </a>
      </div>

      <div className='menu'>
      <ul>
      {/* authServices.isLogged() */}
        {value ? (<>
          {/* <li><a href='/' >Home</a></li> */}
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/Post" >Post Order</Link></li>
          <li><Link to="/FindJobs" >Find Job</Link></li>
          <li><Link to="/Chat" >chat</Link></li>
          <li><Link to="/Shop" >Shop</Link></li>
          <li><PersonFill color="#2693b2" style={{cursor:"pointer", marginRight:"10px"}} size={30} onClick={navigateToProfile}/></li>
          <li><BoxArrowInRight color="royalblue" style={{cursor:"pointer"}} size={30} onClick={()=>{
            authServices.logOut()
          }} /></li>
        </>) : (<>
          <li><Link to="/Login"style={{color:'#E3BE00'}} >Login</Link></li>
          <li  className='nav-btn' style={{borderRadius:2,marginTop:2}} onClick={()=>{setModalShow(true)}} >Register</li>
          {/* className='active'  */}  
        </>)}    
      </ul>
     
      </div>
    </nav>



{/* //model code  */}


<Modal show={modalShow} onHide={() => setModalShow(false)} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register as
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={6} style={{display:'flex',justifyContent:"center",}} onClick={()=>{navigate("/Registration");setModalShow(false)}}>
            <img src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/null/external-customer-shopping-and-retail-smashingstocks-flat-smashing-stocks-2.png"/>
            </Col>
            <Col xs={6} md={6} style={{display:'flex',justifyContent:"center"}} onClick={()=>{navigate("/SellerRegistration");setModalShow(false)}}>
            <img src="https://img.icons8.com/doodle/96/null/group.png"/>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} style={{display:'flex',justifyContent:"center",}}>
              <h3>Buyer</h3>
            </Col>
            <Col xs={6} md={6} style={{display:'flex',justifyContent:"center"}} >
            <h3>Seller</h3>
            </Col>
          </Row>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <button className='nav-btn' onClick={()=>{
          setModalShow(false)
        }} >Close</button>
      </Modal.Footer>
    </Modal>













    </div>
    </>
  )
}

export default Navbar
