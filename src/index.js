import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2'
// import badrequest from "../src/images/bad"

axios.interceptors.request.use((response)=>{
  document.body.classList.add('loading-indicator');
  return response;
},(error) =>{
  document.body.classList.remove('loading-indicator');
  console.log("error "+error);
  return Promise.reject(error);
}
)

// here logic will be written aganist token check 
axios.interceptors.response.use((response)=>{
  document.body.classList.remove('loading-indicator');
  return response;
},(error)=>{
  document.body.classList.remove('loading-indicator');

  if(error.response.status === 400 ){
    Swal.fire({
      imageUrl:'https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1902.jpg?w=740&t=st=1672849760~exp=1672850360~hmac=b69dda5060af3aef5b59409f64533572c61de54b620907b61d528049baa576db',
      imageHeight: 250 ,
      imageWidth:250,
      title: 'Oops...',
      text: "",
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } 
  //   if(error.response.status === 401 ){
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: `Unathorized for this Request`,
  //   }).then(()=>{
  //     authServices.logOut();
  //   })
  // }

  //   if(error.response.status === 500 ){
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: `Oops Something Went Wrong`,
  //   })

  // }
  


 return Promise.reject(error)
})







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
