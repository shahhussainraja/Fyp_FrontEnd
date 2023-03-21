import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-cool-form";
import reg_img from '../../images/Login.jpg'
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";
import Select from "react-select";
import { Textarea } from 'react-bootstrap-icons';



const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};


function PostDetails() {


  // React state to manage selected options
const [selectedOptions, setSelectedOptions] = useState();



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
    <div>
    <div className="maincontainer_post" >
       
           {/* <div class='col-lg-12 col-xl-9 mx-auto' classname="container"> */}
          
                            <div class="col-lg-9 col-xl-12 mx-auto" style={{backgroundColor:"white", padding:'50px', borderRadius:'2%'}}>
                            <div className='title' >
        <h1 className=''>Post Order</h1>
          <p className='details'>Find your dream customized products by sitting at home. Your dreams are our responsinility.</p> 
          </div>
                                <form>
                                    <div class="mb-3">
                                        <lable class="mb-4 "  >Title
                                        <input  type="Text"
                                        autoComplete="off"
                                        name="title"
                                        id="title"
                                        placeholder="e.g Custom Dress"
                                        // value={values.name}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        class="form-control rounded-pill border-0 shadow-sm px-4"
                                        style={{height:"50px"}} />
                                        </lable>    
                                        {errors.name && touched.name ? (
                                        <p className="form-error">{errors.name}</p>
                                        ) : null}             
                                    </div>

                                    <div class="mb-3">
                                    <lable class=" mb-4 "  >Details
                                        <textarea
                                            type="Text"
                                            autoComplete="off"
                                            name="email"
                                            id="email"
                                            placeholder="Write details here..."
                                            // value={values.email}
                                            // onChange={handleChange}
                                            // onBlur={handleBlur}
                                        class="form-control border-0 shadow-sm px-4" />
                                        </lable>       
                                        {errors.email && touched.email ? (
                                        <p className="form-error">{errors.email}</p>
                                        ) : null}       
                                    </div>

                                    <div class="mb-3">
                                    <lable class="mb-4 "  > Asstimated Amount
                                        <input
                                        id="Amount"
                                        type="text" 
                                        placeholder="e.g 5000 Rs"
                                        // value={values.password}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        required="" autofocus="" 
                                        class="form-control rounded-pill border-0 shadow-sm px-4" 
                                        style={{height:"50px"}}/>
                                        </lable>       
                                        {errors.password && touched.password? (
                                        <p className="form-error">{errors.password}</p>
                                        ) : null}          
                                    </div> 
                                    
                                    <div class='mb-3'>
                                    <lable class=" mb-4 " >City
                                     <Form>
                                      <Form.Select aria-label="Default select example" class="form-control rounded-pill border-0 shadow-sm px-4">
                                      <option>Select City</option>
                                      <option value="1">Lahore</option>
                                      <option value="2">Narowal</option>
                                      <option value="3">Fasialabad</option>
                                    </Form.Select>
                                    </Form>
                                    </lable>
                                  </div>



                                    <div class="mb-3">
                                        <lable class="mb-4 "  >Location
                                        <input  type="Text"
                                        autoComplete="off"
                                        name="title"
                                        id="title"
                                        placeholder="Write your address here..."
                                        // value={values.name}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        class="form-control rounded-pill border-0 shadow-sm px-4" 
                                        style={{height:"50px"}}/>
                                        </lable>    
                                        {errors.name && touched.name ? (
                                        <p className="form-error">{errors.name}</p>
                                        ) : null}             
                                    </div>

                                    <div class="mb-3">
                                    <lable class="mb-4 "  >Due Date
                                        <input
                                        id="duedate"
                                        type="Date" 
                                        placeholder="Select due date"
                                        // value={values.confirm_password}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        required="" autofocus="" 
                                        class="form-control rounded-pill border-0 shadow-sm px-4" 
                                        style={{height:"50px"}}/>
                                        </lable>       
                                        {errors.confirm_password && touched.confirm_password? (
                                        <p className="form-error">{errors.confirm_password}</p>
                                        ) : null}        
                                    </div>

                                    <div class='mb-3'>
                                    <lable class=" mb-4 "  >Category
                                     <Form>
                                      <Form.Select aria-label="Default select example" class="form-control rounded-pill border-0 shadow-sm px-4">
                                      <option>Select Catagory</option>
                                      <option value="1">Food</option>
                                      <option value="2">Furniture</option>
                                      <option value="3">Cloths</option>
                                    </Form.Select>
                                    </Form>
                                    </lable>
                                  </div>

                                  <div class='mb-3'>
                                    <lable class=" mb-4 " >Profile Image
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
                                        Post Order
                                      </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                                           
                    </div>
   
  )
}

export default PostDetails
