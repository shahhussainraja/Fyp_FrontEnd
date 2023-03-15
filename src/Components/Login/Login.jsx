import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './login.css';
import {useEffect, useState} from 'react'

function Login(){

    const [login, setLogin] = useState(false);
  const handleCloseLogin = () => setLogin(false);
  const handleLogin = () => setLogin(true);
    
 
   
   
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
                                    
                                    <form>
                                        <div class="mb-3">
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >E-mail
                                        <input id="inputEmail" type="email" placeholder="abc@gmail.com" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" /></lable>
                                            
                                        </div>
                                        <div class="mb-3">
                                        <lable class="mb-4">Password
                                        <input id="inputPassword" type="password" placeholder="*****" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </lable>
                                            
                                        </div>

                                        <div class="text-center d-flex justify-content-center mt-4"> <a href="#" class="font-italic text-muted" style={{alignItems:"center"}}> 
                                                <u style={{color: '#00b7ff'}}>Forget Password?</u></a></div>
                                                
                                        {/* <div class="form-check">
                                            <input id="customCheck1" type="checkbox" class="form-check-input" />
                                            <label for="customCheck1" class="form-check-label">Remember password</label>
                                        </div> */}
                                        <div class="d-grid gap-2 mt-2">
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" className='login-btn'>Log in</button>
                                        </div>
                                        
                                        <div class="text-center d-flex justify-content-center mt-4"><p>Create new account? <a href="/Registration" class="font-italic text-muted" onClick={{handleLogin}}> 
                                                <u style={{color: '#00b7ff'}}>Register</u></a></p></div>
                                    </form>
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