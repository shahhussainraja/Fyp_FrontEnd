import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Login/login.css';
import {useEffect, useState} from 'react'
import reg_img from '../../images/Login.jpg'
import { useFormik } from "formik";
import { registrationSchema } from "../../Schemas/index";
import Select from "react-select";
import sellerServices from '../../Services/SellerServices';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    accountName: "",
    phoneNumber: "",
    cnic: "",
    address: "",
  };
  
  

function SellerRegistration(){


// React state to manage selected options
const [selectedOptions, setSelectedOptions] = useState(null);
const [image, setImage] = useState('')
const navigate = useNavigate()

// Array of all options
const optionList = [
  { value: "baking", label: "Baking" },
  { value: "catering", label: "Catering" },
  { value: "clothing", label: "Clothing" },
  { value: "decoration", label: "Decoration" },
  { value: "furnitture", label: "Furniture" },
  { value: "interior_design", label: "Interion Design" },
  
];

// Function triggered on selection
function handleSelect(data) {
  setSelectedOptions(data);
}

  //form validation
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registrationSchema,
      onSubmit: (values, action) => {
        let formData = new FormData();
        formData.append("image",image);
        formData.append("name",values.name);
        formData.append("email",values.email);
        formData.append("password",values.password);
        formData.append("CNIC",values.cnic);
        formData.append("category",selectedOptions);
        formData.append("shopName",values.accountName);
        formData.append("address",values.address);
        // const data = Object.fromEntries(formData);

        sellerServices.register(formData).then((res)=>{
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


  
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );


  //image handler

  function handleImage(e) {
    setImage(e.target.files[0])
  }


   
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
                                    <h3 class="display-4" className='text'>Dear Sellers</h3>
                                    <p className="modal-desc">
                                      Show your skills to world
                                    </p>

                                    <div>
                                    <p className="modal-desc">
                                      We want some additional information for your seller account
                                    </p>
                                    </div>
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
                                        <div class="mb-3">
                                            <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >Account Name
                                            <input  
                                            type="name"
                                            autoComplete="off"
                                            id="accountName"
                                            name="accountName"
                                            placeholder="Write name related to your work"
                                            value={values.accountName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required="" autoFocus="" 
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>    
                                            {errors.accountName && touched.accountName? (
                                            <p className="form-error errFont">{errors.accountName}</p>
                                            ) : null}             
                                        </div>

                                        <div class="mb-3">
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Phone Number
                                            <input
                                                type="Number"
                                                autoComplete="off"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                placeholder="1234-5678901"
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required="" autoFocus="" 
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.phoneNumber && touched.phoneNumber ? (
                                            <p className="form-error errFont">{errors.phoneNumber}</p>
                                            ) : null}       
                                        </div>

                                        <div class="mb-3">
                                        <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >CNIC Number
                                            <input
                                            id="cnic"
                                            name="cnic"
                                            type="text" 
                                            placeholder="1234-1234567-1"
                                            value={values.cnic}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required="" autofocus="" 
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.cnic && touched.cnic? (
                                            <p className="form-error errFont">{errors.cnic}</p>
                                            ) : null}          
                                        </div>

                                        <div class="mb-3">
                                        <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >Address
                                            <input
                                            id="address"
                                            name='address'
                                            type="text"
                                            placeholder="write your address here..."
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required="" autofocus="" 
                                            class="form-control  border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.address && touched.address? (
                                            <p className="form-error errFont">{errors.address}</p>
                                            ) : null}        
                                        </div>

                                        <div class='mb-3'>
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Category
                                        <Select
                                          name='category'
                                          class="form-control  border-0 shadow-sm px-4"
                                          options={optionList}
                                          placeholder="Choose category"
                                          value={selectedOptions}
                                          onChange={handleSelect}
                                          isSearchable={true}
                                          required="true"
                                          isMulti
                                        />
                                        </lable>
                                        {errors.category && touched.category? (
                                            <p className="form-error errFont">{errors.category}</p>
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
                                              console.log(event.target.files[0]);
                                              setImage(event.target.files[0]);
                                            }}
                                          />
                                        </lable>
                                      </div>
   
                                        {/* <div class="form-check">
                                            <input id="customCheck1" type="checkbox" class="form-check-input" />
                                            <label for="customCheck1" class="form-check-label">Remember password</label>
                                        </div> */}
                                       

                                        {/* <div class="text-center d-flex justify-content-center mt-4">
                                        <p>Want to join with 
                                        <a href="#" class="font-italic text-muted" onClick={{}}> 
                                        <u style={{color: '#00b7ff'}}>Gmail?</u></a></p>
                                        </div> */}
                                      

                                        <div className="modal-buttons">
                                          <button style={{color: 'white'}}  className="input-button" type="submit" >
                                            Registration
                                          </button>
                                        </div>


                                        <div class="text-center d-flex justify-content-center mt-4">
                                          <p>Already have account?
                                          <a class="font-italic text-muted" > 
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


export default SellerRegistration;

