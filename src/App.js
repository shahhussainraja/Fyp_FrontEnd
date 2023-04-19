//i ihave change something in app.js
import React from 'react';
import "./Pages/sellerProfile/SellerDashboard.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import FindJobs from './Pages/FindJobs/FindJobs';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import Post from './Pages/Post/Post';
import Login from './Components/Login/Login'
import Conversation from './Pages/ConversationPage/Conversation';
import Registration from './Components/registration/registration';
import PostDetails from './Pages/PostDetails/PostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerRegistration from './Components/registration/sellerRegistration';
import Contact from './Components/Contact/Contact';
import UserProfile from './Pages/UserProfile/UserProfile'
import Spinner from 'react-spinkit';
// import SellerProfile from './Pages/sellerProfile/SellerProfile';
// import Profile from './Pages/sellerProfile/Profile';
// import ProductList from './Pages/sellerProfile/ProductList';
// import Reviews from './Pages/sellerProfile/Reviews';
// import Orders from './Pages/sellerProfile/Orders';

//Seller

import Dashboard from './Pages/sellerProfile/SellerDashboardPages/Dashboard';
import Resetpassword from './Pages/sellerProfile/SellerDashboardPages/Resetpassword';
import Forgotpassword from './Pages/sellerProfile/SellerDashboardPages/Forgotpassword';
import MainLayout from './Pages/sellerProfile/SellerComponents/MainLayout';
import Enquiries from './Pages/sellerProfile/SellerDashboardPages/Reviews';
import Orders from './Pages/sellerProfile/SellerDashboardPages/Orders';
import Customers from './Pages/sellerProfile/SellerDashboardPages/Profile';
import Addproduct from './Pages/sellerProfile/SellerDashboardPages/Addproduct'
import Productlist from './Pages/sellerProfile/SellerDashboardPages/Productlist';
import ViewEnq from './Pages/sellerProfile/SellerDashboardPages/ViewRev';
import ViewOrder from './Pages/sellerProfile/SellerDashboardPages/ViewOrder';
import Success from './Pages/Payment/Success';


function App() {

  
  return (
    <>
    {/* inetercepter  */}
    <div className={'loadinganim'} id="#interceptor">
    <Spinner name="cube-grid"  style={{color:"#3286cc",marginTop:'25%',left:'50%',position:'absolute',zIndex:'99999',opacity: 2}} />
    </div> 
    <div className="App">  

      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Registration' element={<Registration/>} />
        <Route path='/SellerRegistration' element={<SellerRegistration/>} />
        <Route path='/Post' element={<Post/>} />
        <Route path='/PostDetails' element={<PostDetails/>} />
        <Route path='/FindJobs' element={<FindJobs/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Chat' element={<Conversation/>} />
        <Route path='/PaymentSuccess' element={<Success />} />
        <Route path='/UserProfile' element={<UserProfile/>} />

{/* Nested Routes for Seller Profile */}
          {/* <Route path='/SellerProfle' element={<SellerProfile/>} >
            <Route index path="profile" element={<Profile />} />
            <Route index path="ProductList" element={<ProductList />} />
            <Route index path="Orders" element={<Orders />} />
            <Route index path="Reviews" element={<Reviews />} />
          </Route> */}

<Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="enquiries/:id" element={<ViewEnq />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order/:id" element={<ViewOrder />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-product" element={<Productlist />} />
          <Route path="product" element={<Addproduct />} />
        </Route>
          

        </Routes>
      </Router>
      {/* <div className={'loadinganim'} id="#interceptor">
            <Spinner name="three-bounce"  style={{color:"#36d7b7",marginTop:'25%',left:'50%',position:'absolute',zIndex:'99999',opacity: 2}} />
      </div> */}
    </div>
   </>
      
  );
}

export default App;
