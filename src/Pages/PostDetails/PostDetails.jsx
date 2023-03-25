import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-cool-form";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";
import Select from "react-select";
import { Textarea } from 'react-bootstrap-icons';
import "./PostDetails.css";
import Catagories from '../../Components/Category/Catagories';
import Search from '../../Components/Search/Search';
import img from '../../images/examplePost.jfif';
import user from '../../images/userProfile.png'
import Swal from 'sweetalert2'
import 'animate.css';

function PostDetails(props) {
 
  const Alert = () => {
    Swal.fire({
      title: 'Your offer is successfully sent',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  return (      

    <div className='maincontainer'>
    
        <Search></Search>
      
        <div style={{display:'flex', padding:"30px", marginTop:"0px"}}>
          <div style={{position:"fixed"}}>
          <Catagories></Catagories>
          </div>
          <div style={{marginLeft:'300px', padding:"20px"}}>
            <div className='title'>
          <h3 className=''>Post Details</h3>
           <p className='details'>Here are the details about this post</p> 
           </div>
            
                                <div style={{display:"flex"}}>
                                  <div style={{width:"500px"}}>
                                  <div style={{display:"flex", marginTop: "10px", marginBottom:"10px"}}>
                                  <img style={{height:"1.5rem", width:"1.5rem"}} src={user}></img>
                                  <p style={{padding:"3px", fontSize:"15px", marginTop:"3px"}}>@uesrname</p>
                                  </div>
                                    <div class="details mb-3">
                                       <h5 className='h5'>Title</h5>
                                        <p className='p'>I want a customized dress for school tablo.</p>
                                    </div>

                                    <div class="details mb-3">
                                    <h5 className='h5'>Discription</h5>
                                        <p className='p'>I want a green color dress with parrot touch gives looks like a leaf and flower patel.</p>
                                    </div>

                                    <div class="mb-3">
                                       <h5 className='h5'>Category</h5>
                                        <p className='p'>Cloths</p>
                                    </div>

                                    <div class="mb-3">
                                       <h5 className='h5'>Due Date</h5>
                                        <p className='p'>23/03/2023</p>
                                    </div>

                                    <div class="mb-3">
                                       <h5 className='h5'>Asstimated Amount</h5>
                                        <p className='p'>5000/Rs</p>
                                    </div>

                                    <div class="mb-3">
                                       <h5 className='h5'>City</h5>
                                        <p className='p'>Lahore</p>
                                    </div>
{/* 
                                    <div class="mb-3">
                                       <h5 className='h5'>Address</h5>
                                        <p className='p'></p>
                                    </div> */}
                                    <div className='image-box'>
                                    <h5 className='h5'>Reference Image</h5>
                                    <img style={{ maxWidth :"100%", maxHeight: "100%"}} src={img}></img>
                                    </div>

                                  </div>

                                  <div style={{padding:"30px"}}>
                                 
                                  <div className='makeoffer-box'>
                                    <input
                                    className='input'
                                    type='text'
                                    placeholder='enter amount             /Rs'>
                                    </input>
                                    <button className='makeoffer-button' onClick={Alert}>Make Offer</button>
                                  </div>
                                  </div>
                                </div>       
          </div>
        </div>
   </div>
                       
  )
}

export default PostDetails