import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Login/login.css';
import {useEffect, useState} from 'react'
import reg_img from '../../images/Login.jpg'
import { useFormik } from "formik";
import { registrationSchema } from "../../Schemas/index";
import Select from "react-select";



const initialValues = {
    accountName: "",
    phoneNumber: "",
    cnic: "",
    address: "",
    category:"",

  };
  
  

function SellerRegistration(){

// React state to manage selected options
const [selectedOptions, setSelectedOptions] = useState();

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


  //image handler
  const [image, setImage] = useState('')
  function handleImage(e) {
    setImage(e.target.files[0])
  }

 
  // const [value, setValue] = useState("Red");
   
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
                                    <form>
                                        <div class="mb-3">
                                            <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >Account Name
                                            <input  type="name"
                                            autoComplete="off"
                                            name="name"
                                            id="name"
                                            placeholder="Write name related to your work"
                                            value={values.accountName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>    
                                            {errors.accountName && touched.accountName ? (
                                            <p className="form-error">{errors.accountName}</p>
                                            ) : null}             
                                        </div>

                                        <div class="mb-3">
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Phone Number
                                            <input
                                                type="tel"
                                                autoComplete="off"
                                                name="phoneNo"
                                                id="phoneNo"
                                                placeholder="1234-5678901"
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.phoneNumber && touched.phoneNumber ? (
                                            <p className="form-error">{errors.phoneNumber}</p>
                                            ) : null}       
                                        </div>

                                        <div class="mb-3">
                                        <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >CNIC Number
                                            <input
                                            id="password"
                                            type="text" 
                                            placeholder="1234-1234567-1"
                                            value={values.cnic}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required="" autofocus="" 
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.cnic && touched.cnic? (
                                            <p className="form-error">{errors.cnic}</p>
                                            ) : null}          
                                        </div>

                                        <div class="mb-3">
                                        <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >Address
                                            <input
                                            id="text"
                                            type="text" 
                                            placeholder="write your address here..."
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required="" autofocus="" 
                                            class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </lable>       
                                            {errors.address && touched.address? (
                                            <p className="form-error">{errors.address}</p>
                                            ) : null}        
                                        </div>

                                        <div class='mb-3'>
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Category
                                        <Select
                                          class="form-control rounded-pill border-0 shadow-sm px-4"
                                          options={optionList}
                                          placeholder="Choose category"
                                          value={selectedOptions}
                                          onChange={handleSelect}
                                          isSearchable={true}
                                          isMulti
                                        />
                                        </lable>
                                        {errors.category && touched.category? (
                                            <p className="form-error">{errors.category}</p>
                                            ) : null} 
                                      </div>

                                      <div class='mb-3'>
                                        <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Profile Image<sub> (optional)</sub>
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
                                          <a style={{color: 'white'}}  className="input-button" type="submit" href='/'>
                                            Registration
                                          </a>
                                        </div>


                                        <div class="text-center d-flex justify-content-center mt-4">
                                          <p>Already have account?
                                          <a href="/Login" class="font-italic text-muted" onClick={{}}> 
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


export default SellerRegistration;

