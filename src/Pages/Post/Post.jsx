import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-cool-form";
import reg_img from '../../images/Login.jpg'
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";
import Select from "react-select";
import './post.css'
import { Textarea } from 'react-bootstrap-icons';
import { postSchema } from '../../Schemas/index';
import { useSelector } from 'react-redux';
import authServices from '../../Services/AuthServices';
import Swal from 'sweetalert2';
import Contact from '../../Components/Contact/Contact';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  title: "",
  detail: "",
  city: "",
  amount:"",
  category:"",
  dueDate:"",
  address:""
};


function Post() {
  // React state to manage selected options
const [selectedOptions, setSelectedOptions] = useState();
const user = useSelector((state)=>state.userDetail);
const navigate  =useNavigate();
  //form validation
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: postSchema,
      onSubmit: (values, action) => {
      //  alert(JSON.stringify(values, null, 2));
       const formData  = new FormData()
        formData.append("image",image);
        formData.append("title",values.title);
        formData.append("detail",values.detail);
        formData.append("amount",values.amount);
        formData.append("city",values.city);
        formData.append("category",values.category);
        formData.append("dueDate",values.dueDate);
        formData.append("address",values.address);
        formData.append("buyerId",user.id);
        formData.append("buyerName",user.name);
        const data = Object.fromEntries(formData);
        
        authServices.sendPost(formData).then((res)=>{
          if(res){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Order created successfully!",
            showConfirmButton: true,
          }).then(()=>{  
            navigate("/FindJobs")
            action.resetForm();
            setImage(null)})
            
        }
        }).catch((err)=>{
          console.log(err.message)
        })

        
      },
    });
 



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
        <h1 className=''>Post Requirements</h1>
          <p className='details'>Find your dream customized products by sitting at home. Your dreams are our responsinility.</p> 
          </div>        
                                <form  onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <lable class="mb-4 "  >Title<span style={{color:"red"}}>*</span>
                                        <input  type="Text"
                                        autoComplete="off"
                                        name="title"
                                        id="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="e.g Custom Dress"
                                        class="form-control  border-0 shadow-sm px-4"
                                        style={{height:"50px"}} />
                                        </lable>    
                                        {errors.title && touched.title ? (
                                        <p className="form-error">{errors.title}</p>
                                        ) : null}             
                                    </div>

                                    <div class="mb-3">
                                    <lable class=" mb-4 "  >Details<span style={{color:"red"}}>*</span>
                                        <textarea
                                            type="text"
                                            autoComplete="off"
                                            name="detail"
                                            id="detail"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Write details here..."
                                            // value={values.email}
                                            // onChange={handleChange}
                                            // onBlur={handleBlur}
                                        style={{height:"50px"}} 
                                        className="form-control border-0 shadow-sm px-4" />
                                       
                                        </lable>       
                                        {errors.detail && touched.detail ? (
                                        <p className="form-error">{errors.detail}</p>
                                        ) : null}       
                                    </div>

                                    <div class="mb-3">
                                    <lable class="mb-4 "  > Esstimated Amount<span style={{color:"red"}}>*</span>
                                        <input
                                        id="amount"
                                        name="amount"
                                        type="number" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="e.g 5000 Rs"
                                        // value={values.password}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        required="" autofocus="" 
                                        class="form-control  border-0 shadow-sm px-4" 
                                        style={{height:"50px"}}/>
                                        </lable>       
                                        {errors.amount && touched.amount? (
                                        <p className="form-error">{errors.amount}</p>
                                        ) : null}          
                                    </div> 
                                    
                                    <div class='mb-3'>
                                    <lable class=" mb-4 " >City<span style={{color:"red"}}>*</span>
                                    
                                      <Form.Select aria-label="Default select example" class="form-control  border-0 shadow-sm px-4"  name='city' id='city' onChange={handleChange} >
                                      <option value="" disabled selected>Select City</option>
                                      <option value="Lahore">Lahore</option>
                                      <option value="Narowal">Narowal</option>
                                      <option value="Fasialabad">Fasialabad</option>
                                    </Form.Select>
                                    {errors.city && touched.city? (
                                        <p className="form-error">{errors.city}</p>
                                        ) : null}
    
                                    </lable>
                                  </div>



                                    <div class="mb-3">
                                        <lable class="mb-4 "  >Postal Address<span style={{color:"red"}}>*</span>
                                        <input  type="Text"
                                        autoComplete="off"
                                        name="address"
                                        id="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Write your address here..."
                                        // value={values.name}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        class="form-control  border-0 shadow-sm px-4" 
                                        style={{height:"50px"}}/>
                                        </lable>    
                                        {errors.address && touched.address ? (
                                        <p className="form-error">{errors.address}</p>
                                        ) : null}             
                                    </div>

                                    <div class="mb-3">
                                    <lable class="mb-4 "  >Due Date<span style={{color:"red"}}>*</span>
                                        <input
                                        type = "date"
                                        id="dueDate"
                                        name="dueDate" 
                                        onChange={handleChange}
                                        placeholder="Select Due Date"
                                        // value={values.confirm_password}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        required="" autofocus="" 
                                        class="form-control  border-0 shadow-sm px-4" 
                                        style={{height:"50px"}}/>
                                        </lable>       
                                        {errors.dueDate && touched.dueDate? (
                                        <p className="form-error">{errors.dueDate}</p>
                                        ) : null}        
                                    </div>

                                    <div className='mb-3'>
                                    <lable className=" mb-5  " >Category<span style={{color:"red"}}>*</span>
                                    
                                      <Form.Select aria-label="Default select example" class="form-control  border-0 shadow-sm px-4" name="category" id="category" onChange={handleChange}>
                                      <option value="" disabled selected>Select Catagory</option>
                                      <option value="Food">Food</option>
                                      <option value="bakery">Bakery</option>
                                      <option value="Furniture">Furniture</option>
                                      <option value="Cloths">Cloths</option>
                                      <option value="Interior Designing">Interior Designing</option>
                                    </Form.Select>
                                    {errors.category && touched.category? (
                                        <p className="form-error">{errors.category}</p>
                                        ) : null}  
      
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
                                            defaultValue={image}
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
                                        required
                                        defaultValue={image}
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
                                  <p className='text-muted' style={{fontSize: "small"}}><span style={{color:"red"}}>*</span>means field is required</p>

                                    <div className="button" style={{marginLeft:"50px"}}>
                                      <button style={{color: 'white'}}  className="Post-button" type="submit" >
                                        Post Order
                                      </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                                           
                        <Contact />
                    </div>
   
  )
}

export default Post
