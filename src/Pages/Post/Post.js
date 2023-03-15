import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-cool-form";
import reg_img from '../../images/Login.jpg'
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";
import Select from "react-select";
import './post.css'



const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};


function Post() {


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


  //image handler
  const [image, setImage] = useState('')
  function handleImage(e) {
    setImage(e.target.files[0])
  }


 
  return (
    <div className="maincontainer" >
        <div className='title'>
        <h1>Post Order</h1>
          <p className='details'>Find your dream customized products by sitting at home. Your dreams are our responsinility.</p> 
          </div>
           <div>
          
                            <div class="col-lg-9 col-xl-6 mx-auto" style={{marginTop:'50px'}}>
                                <form>
                                    <div class="mb-3">
                                        <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >Account Name
                                        <input  type="name"
                                        autoComplete="off"
                                        name="name"
                                        id="name"
                                        placeholder="Write name related to your work"
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
                                    <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Phone Number
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
                                    <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >CNIC Number
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
                                    <lable class="mb-4 " style={{marginBottom:"0px 0px 0px"}} >Address
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
                                  </div>

                                  <div class='mb-3'>
                                    <lable class=" mb-4 " style={{marginBottom:"0px 0px 0px"}} >Profile Image
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
                                  

                                    <div className="button">
                                      <a style={{color: 'white'}}  className="Post-button" type="submit" href='/'>
                                        Post
                                      </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
   
  )
}

export default Post
