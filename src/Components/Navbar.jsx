import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import logo3 from '../images/logo4.png';
import Post from '../Pages/Post/Post';
import authServices from '../Services/AuthServices';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import { ArrowRight } from 'react-bootstrap-icons';
import { BoxArrowInRight } from 'react-bootstrap-icons';
import {BuyerReg} from '../Components/registration/registration';
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";




function Navbar() {
//modal
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [login, setLogin] = useState(false);
  const handleCloseLogin = () => setLogin(false);
  const handleLogin = () => setLogin(true);

  const [sellerReg, setSellerReg] = useState(false);
  const handleCloseSellerReg = () => setSellerReg(false);
  const handleSellerReg = () => setSellerReg(true);

  const [buyerReg, setBuyerReg] = useState(false);
  const handleCloseBuyerReg = () => setBuyerReg(false);
  const handleBuyerReg = () => setBuyerReg(true);

  //Post
  
  const [post, setPost] = useState(false);
  const handleClosePost = () => setPost(false);
  const handlePost = () => setPost(true);

  const [showPost, setShowPost] = useState(false);
  const handleCloseShowPost = () => setShowPost(false);
  const handleShowPost = () => setShowPost(true);

  //radio button

  const [form,setForm]=useState()
  const handleForm=(e)=>{
    setForm(e.target.name)
 }
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

        //hanmberger menu
        const [showMediaIcons, setShowMediaIcons] = useState(false);
        
  return (
      <>
    <nav className={nav ? 'nav active' : 'nav'}>
      <div col-lg-12 col-xl-9 mx-auto>
      <a href='/' className='logo'>
          <img src={logo3} alt=''/>
      </a>
      </div>

      <div col-lg-12 col-xl-9 mx-auto>
      <ul className='menu' style={{display:'flex',alignItems:"center"}}>
        {authServices.isLogged() ? (<>
          <li><a href='/' >Home</a></li>
          <li><a href='/Post' style={{color:'#E3BE00'}}>Post Order</a></li>
          <li ><a href='/FindJobs'>Find Job</a></li>
          <li><a href='/Chat'>chat</a></li>
          <li><a href='/Shop'>Shop</a></li>
          <li><BoxArrowInRight color="royalblue" style={{cursor:"pointer"}} size={30} onClick={()=>{
            authServices.logOut()
          }} /></li>
        </>) : (<>
          <li><a href='/Login' style={{color:'#E3BE00'}}>Login</a></li>
          <a className='nav-btn' style={{borderRadius:2,marginTop:2}} href='/Registration'>Register</a>
          {/* className='active'  */}  
        </>)}    
      </ul>
      </div>

      <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>

          
    </nav>

{/* login modal
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Login here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name='Email'
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                name='password'
                placeholder="*****"
                autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label><a href=''>Forget Password?</a></Form.Label>
            </Form.Group>
            <Button variant="primary" type='submit' style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Login
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal> */}

      {/* Registration form  */}

      {/* <Modal show={login} onHide={handleCloseLogin}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form >

        <p>You want to?</p>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Register as Seller"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            style={{color:'black'}}
            // onChange={SetFlag}
            onChange={()=>{setType("SELLER")}}
            // setSellerState(true)
          />
          <br></br>
          <Form.Check
            inline
            label="Register as buyer"
            name="group1"
            type={type}
            onChange={()=>{setType("BUYER")}}

            id={`inline-${type}-2`}
            style={{color:'black' }}
            // onChange={}
          />
          
        </div>
      ))}    
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{
            if(type==="BUYER"){setBuyerReg(true)}else if(type==="SELLER"){setSellerReg(true)}else{console.log("What is this behaviour pooja?")} handleCloseLogin()
          }} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Next
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* onClick={sellerStateMethod} */}



      {/* registration modal */}

      {/* <Modal show={sellerReg} onHide={handleCloseSellerReg}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Seller Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                placeholder="e.g Tom Robert"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="*****"
                autoFocus />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*****"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="phone number"
                placeholder="0123-4567891"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID card number</Form.Label>
              <Form.Control
                type="ID"
                placeholder="12345-1234567-1"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Shop name</Form.Label>
              <Form.Control
                type="shop"
                placeholder="e.g Gulahmad"
                autoFocus
              />
            </Form.Group>
            <p>Catagory</p>
            <Form.Select aria-label="Default select example">
            <option>Select Catagory</option>
            <option value="1">Food</option>
            <option value="2">Furniture</option>
            <option value="3">Cloths</option>
          </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSellerReg} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Register
          </Button>
        </Modal.Footer>
      </Modal> */}



      {/* Buyer registration modal */}
{/* 
      <Modal show={buyerReg} onHide={handleCloseBuyerReg}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Buyer Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                placeholder="e.g Tom Robert"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="phone number"
                placeholder="0123-4567891"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="*****"
                autoFocus />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*****"
                autoFocus
              />
            </Form.Group>   
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseBuyerReg} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Register
          </Button>
        </Modal.Footer>
      </Modal> */}


        {/* catagory modal */}
    <Modal show={showPost} onHide={handleCloseShowPost}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Post order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <p>Catagory</p>
            <Form.Select aria-label="Default select example">
            <option>Select Catagory</option>
            <option value="1">Food</option>
            <option value="2">Furniture</option>
            <option value="3">Cloths</option>
          </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=> {handlePost(); handleCloseShowPost()}} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>


 

      




       {/* Post Order modal */}

       <Modal show={post} onHide={handleClosePost}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Post Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="e.g customize a dress"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="text here"
                autoFocus
              />
              </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date"
                placeholder=""
                autoFocus />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Asstimated Budget</Form.Label>
              <Form.Control
                type="price"
                placeholder="0/Rs."
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="location"
                placeholder="e.g Lahore"
                autoFocus
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select file (optional) </Form.Label>
             
              {/* <Form.Control
                type="location"
                placeholder="choose any reference image"
                autoFocus
              />              */}
           

            {/* <button className='' onClick={handleImage}>Choose file</button> */}

            {image && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(image)}
          />
          <br />
          <button onClick={() => setImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setImage(event.target.files[0]);
        }}
      />
       </Form.Group>
            

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClosePost} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Navbar
