import React, {useEffect, useState} from 'react'
import logo3 from '../../images/logo4.png';
import authServices from '../../Services/AuthServices';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { ArrowRight } from 'react-bootstrap-icons';
import { BoxArrowInRight, PersonFill } from 'react-bootstrap-icons';
import './navbar.css'




function Navbar() {

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
        {authServices.isLogged() ? (<>
          <li><a href='/' >Home</a></li>
          <li><a href='/Post'>Post Order</a></li>
          <li ><a href='/FindJobs'>Find Job</a></li>
          <li><a href='/Chat'>chat</a></li>
          <li><a href='/Shop'>Shop</a></li>
          <li><PersonFill color="#2693b2" style={{cursor:"pointer", marginRight:"10px"}} size={30} onClick={navigateToProfile}/></li>
          <li><BoxArrowInRight color="#2693b2" style={{cursor:"pointer"}} size={30} onClick={()=>{
            authServices.logOut()
          }} /></li>
        </>) : (<>
          <li><a href='/Login' style={{color:'#E3BE00'}}>Login</a></li>
          <a className='nav-btn' style={{borderRadius:2,marginTop:2}} href='/Registration' >Register</a>
          {/* className='active'  */}  
        </>)}    
      </ul>
     
      </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar
