import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Login/login.css';
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import reg_img from '../../images/Login.jpg'
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";
import SellerRegistration from './sellerRegistration';



const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  

function Registration(){

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
 
   
   
    return (
        <>
     
       <div className="maincontainer" >
        <div class="container-fluid">
            <div class="row no-gutter" >
                <div class="col-md-6" style={{padding: '0px, 0px', backgroundColor: 'white'}}>
                    <div class="login d-flex align-items-center py-5" >
                        <div class="container" >
                            <div class="row">
                                <div class="col-lg-12 col-xl-9 mx-auto" style={{marginTop:'50px'}}>
                                    <h3 class="display-4" className='text'>Welcome!</h3>
                                    <p className="modal-desc">
                                    Glad to see you here
                                    </p>
                                    <form>
                                        <div class="mb-3">
                                            <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Name
                                            <input  type="name"
                                            autoComplete="off"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>    
                                            {errors.name && touched.name ? (
                                            <p className="form-error">{errors.name}</p>
                                            ) : null}             
                                        </div>

                                        <div class="mb-3">
                                        <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >E-mail
                                            <input
                                                type="email"
                                                autoComplete="off"
                                                name="email"
                                                id="email"
                                                placeholder="abc@gmail.com"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.email && touched.email ? (
                                            <p className="form-error">{errors.email}</p>
                                            ) : null}       
                                        </div>

                                        <div class="mb-3">
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Password
                                            <input
                                            id="password"
                                            type="password" 
                                            placeholder="****"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required="" autofocus="" 
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.password && touched.password? (
                                            <p className="form-error">{errors.password}</p>
                                            ) : null}          
                                        </div>

                                        <div class="mb-3">
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Confirm Password
                                            <input
                                            id="confirm_password"
                                            type="password" 
                                            placeholder="****"
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required="" autofocus="" 
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.confirm_password && touched.confirm_password? (
                                            <p className="form-error">{errors.confirm_password}</p>
                                            ) : null}        
                                        </div>

                                        <div class='mb-3'>
                                      <label class=" mb-4 " style={{marginBottom:"0px 0px 0px"}}>Do you want to join as seller?
                                      <Form.Check 
                                        label="Yes"
                                        type="switch"
                                        id="custom-switch"
                                      />
                                      </label>

                                    </div>

                                       
                                                
                                        {/* <div class="form-check">
                                            <input id="customCheck1" type="checkbox" class="form-check-input" />
                                            <label for="customCheck1" class="form-check-label">Remember password</label>
                                        </div> */}
                                       

                                      <div class="text-center d-flex justify-content-center mt-4">
                                        <p>Want to join with 
                                        <a href="#" class="font-italic text-muted" onClick={{}}> 
                                        <u style={{color: '#00b7ff'}}>Gmail?</u></a></p>
                                      </div>
                                    

                                    <div className="modal-buttons">
                                      <a style={{color: 'white'}} className="input-button" type="submit" href='/SellerRegistration'>
                                        Continue
                                      </a>
                                    </div>

                                    <div class="text-center d-flex justify-content-center mt-4">
                                      <p>Already have account?
                                      <a href="/Login" class="font-italic text-muted"> 
                                      <u style={{color: '#00b7ff'}}>Login</u></a></p>
                                      </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="modal-right">
                <img src={reg_img} alt="img" />
                </div>
                
              </div>
        </div>
      </div>
      </>
    )
 }


export default Registration;

