import React, { useEffect, useState } from 'react'
import logo3 from '../../images/logo4.png';
import authServices from '../../Services/AuthServices';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

  const islogged = useSelector((state) => state.userDetail.loggedIn)
  const user = useSelector((state)=>state.userDetail)

  // const value  = true;
  const [modalShow, setModalShow] = useState(false);

  const [sellerState, setSellerState] = useState(false)
  const [type, setType] = useState("")


  //navbar
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    }
    else {
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  const sellerStateMethod = () => {
    if (sellerState == 'true') {
      console.log("hello")
    }
  }
  useEffect(() => { console.log("type: ", type) })
  const SetFlag = () => {
    SetFlag(true)
  }

  const handleLoginForm = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    authServices.login(event.target[0].value, event.target[1].value).
      then(res => {
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
              <img src={logo3} alt='' />
            </a>
          </div>

          <div className='menu'>
            <ul>
              {islogged ? (<>
                {/* <li><a href='/' >Home</a></li> */}
                <li><Link to="/">Home</Link></li>

                {user.userType === "buyer" ? <>
                <li><Link to="/Post">Post Order</Link></li>
                </> : <></>}
                <li><Link to="/FindJobs" >Find Job</Link></li>
                <li><Link to="/Chat">chat</Link></li>
                <li><Link to="/Shop" >Shop</Link></li>
                
                {user.userType === "seller" ? <>
                <li><Link to="/admin" >SellerProfile</Link></li>
                </> : <></>}

                {user.userType === "buyer" ? <>
                <li><PersonFill color="#2693b2" style={{ cursor: "pointer", marginRight: "10px" }} className='Profile-btn' size={30} onClick={navigateToProfile} /></li>
                </>:<></> }

                <li><BoxArrowInRight color="#2693b2" style={{ cursor: "pointer" }} className='logout-btn' title='logout' size={30} onClick={() => {
                  authServices.logOut()
                }} /></li>
              </>) : (<>
                <button className='nav-btn' style={{marginRight:"5px"}} onClick={()=>navigate("/Login")}>Login</button>
                <button className='nav-btn' onClick={() => { setModalShow(true) }} >Register</button>

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
              <Row style={{ display: "flex" }}>
                <div className='boxContainer'>
                  <Col className='img-container' xs={6} md={6} onClick={() => { navigate("/Registration"); setModalShow(false) }}>
                    <img style={{ height: "70px", width: "70px" }} src={require("../../images/BuyerIcon.png")} />
                    <h4 >Buyer</h4>
                  </Col>
                  <Col className='img-container' xs={6} md={6} onClick={() => { navigate("/SellerRegistration"); setModalShow(false) }}>
                    <img style={{ height: "70px", width: "70px" }} src={require("../../images/SellerIcon.png")} />
                    <h4 >Seller</h4>
                  </Col>
                </div>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <button className='nav-btn' onClick={() => {
              setModalShow(false)
            }} >Close</button>
          </Modal.Footer>
        </Modal>

      </div>
    </>
  )
}

export default Navbar