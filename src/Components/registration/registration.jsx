import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Login/login.css';
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import {useEffect, useState} from 'react'
import reg_img from '../../images/Login.jpg'
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";
import SellerRegistration from './sellerRegistration';
import authServices from '../../Services/AuthServices';
import Swal from 'sweetalert2'


const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  

function Registration(){
    const navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values,action) => {
        // alert(JSON.stringify(values, null, 2));
        let formData = new FormData();
        formData.append("image",image);
        formData.append("name",values.name);
        formData.append("email",values.email);
        formData.append("password",values.password);
        // const data = Object.fromEntries(formData);
        authServices.register(formData).then((res)=>{

          if (res === false){
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: "User already Exist",
              showConfirmButton: true,
            })
          }else{
            action.resetForm();
            setImage("")
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: "Register Successfully",
              showConfirmButton: true,
            }).then(()=>{
              navigate('/Login')
            })

          }
        }).catch((e)=>{
          console.log(e.message)
        })

      },
    });
    
  // console.log(
  //   "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
  //   errors
  // );
 
  //image handler
  const [image, setImage] = useState('')

  function handleImage(e) {
    setImage(e.target.files[0])
  }


// const handleform = (event)=>{
// event.preventDefault();
// const data = Object.fromEntries(new FormData(event.target));
// console.log(data)


// } 




   
    return (
        <>
     
       <div className="maincontainer" >
        <div className="container-fluid">
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
                                    <form onSubmit={handleSubmit}>
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
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>    
                                            {errors.name && touched.name ? (
                                            <p className="form-error errFont">{errors.name}</p>
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
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.email && touched.email ? (
                                            <p className="form-error errFont">{errors.email}</p>
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
                                            required="" autoFocus="" 
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.password && touched.password? (
                                            <p className="form-error errFont">{errors.password}</p>
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
                                            required="" autoFocus="" 
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.confirm_password && touched.confirm_password? (
                                            <p className="form-error errFont">{errors.confirm_password}</p>
                                            ) : null}        
                                        </div>
                                        <div class='mb-3'>
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Profile Image<sub> (Mandatory)</sub>
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
                                            name="image"
                                            required="true"
                                            onChange={(event) => {
                                              // console.log(event.target.files[0]);
                                              setImage(event.target.files[0]);
                                            }}
                                          />
                                        </lable>
                                      </div>

                          
                                        {/* <div class="form-check">
                                            <input id="customCheck1" type="checkbox" class="form-check-input" />
                                            <label for="customCheck1" class="form-check-label">Remember password</label>
                                        </div> */}
                                       

                                      <div class="text-center d-flex justify-content-center mt-4">
                                        <p>Want to join with 
                                        <a href="#" class="font-italic text-muted" > 
                                        <u style={{color: '#00b7ff'}}>Gmail?</u></a></p>
                                      </div>
                                    

                                    <div className="modal-buttons">
                                      {/* <a style={{color: 'white'}} className="input-button" type="submit" >
                                      Registration
                                      </a> */}
                                      <button style={{color: 'white'}} className="input-button" type="submit" >  Registration </button>
                                    </div>

                                    <div class="text-center d-flex justify-content-center mt-4">
                                      <p>Already have account?
                                      <a class="font-italic text-muted"> 
                                      <u style={{color: '#00b7ff',cursor:"pointer"}} onClick={()=>navigate("/login")}>Login</u></a></p>
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

