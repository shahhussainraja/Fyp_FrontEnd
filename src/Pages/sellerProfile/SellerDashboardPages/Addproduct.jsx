import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-cool-form";
import { useFormik } from "formik";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addProductSchema } from "../../../Schemas/index"
import "./AddProduct.css"
import sellerServices from '../../../Services/SellerServices';


const initialValues = {
  title: "",
  detail: "",
  amount:"",
  category:"",
};


const Addproduct = () => {

  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();
  const user = useSelector((state)=>state.userDetail)

    //form validation
      const { values, errors, touched, handleBlur,
        handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: addProductSchema,
        onSubmit: (values, action) => {
        //  alert(JSON.stringify(values, null, 2));
         const formData  = new FormData()
          formData.append("image",image);
          formData.append("productName",values.title);
          formData.append("productDetail",values.detail);
          formData.append("productAmount",values.amount);
          formData.append("category",values.category);
          formData.append("sellerId",user.id);
          formData.append("sellerName",user.name);
          // formData.append("status","instock");
          const data = Object.fromEntries(formData);
          sellerServices.addProductItem(formData).then((res)=>{
            if(res){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: "product added Successfully",
              showConfirmButton: true,
            }).then(()=>{  action.resetForm();setImage(null)})
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
      <div className="maincontainer" >
                             <div class="col-lg-9 col-xl-12 mx-auto" style={{backgroundColor:"white", padding:'50px', borderRadius:'2%'}}>
                              <div className='title'>
                                <h1 className=''>Add Product</h1>
                                  </div>        
                                      <form  onSubmit={handleSubmit}>
                                      <div class="mb-3">
                                          <lable class="mb-4 ">Title
                                          <input  type="Text"
                                          autoComplete="off"
                                          name="title"
                                          id="title"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.title}
                                          placeholder="e.g Bridal Dress"
                                          class="form-control  border-0 shadow-sm px-4"
                                          style={{height:"50px"}} />
                                          </lable>    
                                          {errors.title && touched.title ? (
                                          <p className="form-error errFont">{errors.title}</p>
                                          ) : null}             
                                      </div>
  
                                      <div class="mb-3">
                                      <lable class=" mb-4 ">Description
                                          <textarea
                                              type=""
                                              autoComplete="off"
                                              name="detail"
                                              id="detail"
                                              value={values.detail}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              placeholder="Write description here..."
                                              // value={values.email}
                                              // onChange={handleChange}
                                              // onBlur={handleBlur}
                                          style={{height:"50px"}} 
                                          className="form-control border-0 shadow-sm px-4" />
                                         
                                          </lable>       
                                          {errors.detail && touched.detail ? (
                                          <p className="form-error errFont">{errors.detail}</p>
                                          ) : null}       
                                      </div>
  
                                      <div class="mb-3">
                                      <lable class="mb-4 "  > Price
                                          <input
                                          id="amount"
                                          name="amount"
                                          type="number" 
                                          value={values.amount}
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
                                          <p className="form-error errFont">{errors.amount}</p>
                                          ) : null}          
                                      </div> 
                                      <div class='mb-3'>
                                      <lable class=" mb-4 "  >Category
                                      
                                        <Form.Select aria-label="Default select example" class="form-control  border-0 shadow-sm px-4" name="category" id="category" onChange={handleChange} value={values.category}>
                                        <option value="" disabled selected>Select Catagory</option>
                                        <option value="Food">Food</option>
                                        <option value="bakery">Bakery</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Cloths">Cloths</option>
                                        <option value="Home-Garden">Home-Garden</option>
                                        <option value="Catering">Catering</option>
                                        <option value="Interior Designing">Interior Designing</option>
                                      </Form.Select>
                                      {errors.category && touched.category? (
                                          <p className="form-error errFont">{errors.category}</p>
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
                                          onChange={(event) => {
                                            console.log(event.target.files[0]);
                                            setImage(event.target.files[0]);
                                          }}
                                        />
                                      </lable>
                                    </div>
                                      <div className="button">
                                        <button style={{color: 'white'}}  className="Post-button" type='submit' >
                                          Add Product
                                        </button>
                                      </div>
                                  </form>
                              </div>
                          </div>                                       
                      </div>
)}

export default Addproduct;
