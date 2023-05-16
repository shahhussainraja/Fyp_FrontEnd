import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './login.css';
import {useEffect, useState} from 'react'
import authServices from '../../Services/AuthServices';
import { updateUserDetail } from '../../Redux/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import sellerServices from '../../Services/SellerServices';


function Login(){
    const navigate  = useNavigate()
    const dispatch = useDispatch()

    const [email,setEmail] = useState(null) 
    const [password,setpassword] = useState(null) 
    const [error,setError] = useState(false) 



    const handleLogin = (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);

        if(data.checkBox){
            sellerServices.login(data.email,data.password).then((res)=>{
                    dispatch(updateUserDetail(res.payload));
                    navigate("/");
            }).catch((err)=>{
                if(err.response.status === 410){
                    setError(true)
                }
                console.log(err.message)
            })
        }else{
            authServices.login(data.email,data.password).then((res)=>{
                    dispatch(updateUserDetail(res.payload));
                    navigate("/");
            }).catch((err)=>{
                if(err.response.status === 410  ){
                    setError(true)
                }
                console.log(err.message)
            })
        }       
    };

    return (
        <>
       <div className="maincontainer" >
        <div class="container-fluid">
            <div class="row no-gutter" >
                <div class="col-md-6" style={{padding: '0px, 0px', backgroundColor: 'white'}}>
                    <div class="login d-flex align-items-center py-5" >
                        <div class="container" >
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4" className='text'>Welcome Back</h3>
                                    <p className="modal-desc">
                                     We were waiting for you
                                    </p>
                                    
                                    <form onSubmit={handleLogin}>

                                        <div class="mb-3">
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >E-mail
                                        <input id="inputEmail"  name="email" type="email" placeholder="abc@gmail.com" required="true" autofocus="" class="form-control  border-0 shadow-sm px-4"  onChange={(e)=>setEmail(e.target.value)} onClick={()=>{setError(false)}} /></lable>   
                                        </div>

                                        <div class="mb-3">
                                        <lable class="mb-4">Password
                                        <input id="inputPassword"  name="password" type="password" placeholder="*****" required="true" class="form-control  border-0 shadow-sm px-4 text-primary" onChange={(e)=>setpassword(e.target.value)} onClick={()=>{setError(false)}}/>
                                        </lable>
                                        </div>

                                        <div class="form-check">
                                            <input id="customCheck1" name="checkBox" type="checkbox" class="form-check-input" />
                                            <label for="customCheck1" class="form-check-label">Login as Seller</label>
                                        </div>


                                        {error && <>
                                                <span style={{color:"red",display:"flex",justifyContent:"center"}}>
                                                    <h6>Invalid Email/Password</h6>
                                                </span>
                                        </> }

                                        <div class="text-center d-flex justify-content-center mt-4"> <a href="#" class="font-italic text-muted" style={{alignItems:"center"}}> 
                                                <u style={{color: '#00b7ff'}}>Forget Password?</u></a>
                                        </div>
                                                
                                        <div class="d-grid gap-2 mt-2">
                                        <button  class="btn btn-primary btn-block text-uppercase mb-2  shadow-sm" className='login-btn' type='submit'>Log in</button>
                                        </div>

                                    </form>
                                        
                                        <div class="text-center d-flex justify-content-center mt-4"><p>Create new account? <a  class="font-italic text-muted"  > 
                                                <u style={{color: '#00b7ff',cursor:"pointer"}}  onClick={()=>navigate("/Registration")}>Register</u></a></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             <div class="col-md-6 d-none d-md-flex bg-image" style={{marginTop: '50px'}} ></div>
         </div>
    </div>
        </div> 
      </>
    )
 }


export default Login;