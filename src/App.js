//i ihave change something in app.js
import React from 'react';
import "./Pages/sellerProfile/SellerDashboard.css";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom"
import Home from './Pages/Home';
import FindJobs from './Pages/FindJobs/FindJobs';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import Post from './Pages/Post/Post';
import Login from './Components/Login/Login';
import MyTasks from './Pages/MyTasks/MyTasks';
import Conversation from './Pages/ConversationPage/Conversation';
import Registration from './Components/registration/registration';
import PostDetails from './Pages/PostDetails/PostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerRegistration from './Components/registration/sellerRegistration';
import Contact from './Components/Contact/Contact';
import UserProfile from './Pages/UserProfile/UserProfile'
import Spinner from 'react-spinkit';

import Dashboard from './Pages/sellerProfile/SellerDashboardPages/Dashboard';
import MainLayout from './Pages/sellerProfile/SellerComponents/MainLayout';
import Enquiries from './Pages/sellerProfile/SellerDashboardPages/Reviews';
import Orders from './Pages/sellerProfile/SellerDashboardPages/Orders';
import Customers from './Pages/sellerProfile/SellerDashboardPages/Profile';
import Addproduct from './Pages/sellerProfile/SellerDashboardPages/Addproduct'
import Productlist from './Pages/sellerProfile/SellerDashboardPages/Productlist';
import ViewEnq from './Pages/sellerProfile/SellerDashboardPages/ViewRev';
import ViewOrder from './Pages/sellerProfile/SellerDashboardPages/ViewOrder';
import Success from './Pages/Payment/Success';
import { useSelector } from 'react-redux';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ProductView from './Components/ProductView/ProductView';
import Reviews from './Pages/sellerProfile/SellerDashboardPages/Reviews';


function App() {
const user = useSelector((state)=>state.userDetail)
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
        <Route path='/SellerRegistration' element={<SellerRegistration/> } />
        <Route path='/PostDetails' element={user.loggedIn ? <PostDetails/> :  <Navigate to="/Login"></Navigate> } />
        <Route path='/FindJobs' element={user.loggedIn ? <FindJobs/> : <Navigate to="/Login"></Navigate>} />
        <Route path='/Shop' element={user.loggedIn ? <Shop/> : <Navigate to="/Login"></Navigate>} />
        <Route path='/Chat' element={user.loggedIn ? <Conversation/> : <Navigate to="/Login"></Navigate>} />
        <Route path='/PaymentSuccess' element={user.loggedIn ? <Success /> : <Navigate to="/Login"></Navigate>} />
        <Route path='/ProductView' element={user.loggedIn ? <ProductView/> : <Navigate to="/Login"></Navigate>} />

        {user.userType === "buyer" ? <>
        <Route path='/UserProfile' element={user.loggedIn ? <UserProfile/>: <Navigate to="/Login"></Navigate>} />
        <Route path='/Post' element={user.loggedIn ? <Post/>:<Navigate to="/Login"></Navigate>} />
        <Route path='MyTasks' element={user.loggedIn ? <MyTasks/>: <Navigate to="/MyTasks"></Navigate>} />
        </> : <></>}      
      
        {user.userType === "seller"  ? <>
          <Route path="/admin" element={user.loggedIn ? <MainLayout /> : <Navigate to="/Login"></Navigate>}>
          <Route index element={user.loggedIn ? <Dashboard /> :<Navigate to="/Login"></Navigate>} />
          <Route path="Reviews" element={user.loggedIn ? <Reviews /> : <Navigate to="/Login"></Navigate>}  />
          <Route path="orders" element={user.loggedIn ? <Orders /> : <Navigate to="/Login"></Navigate>} />
          <Route path="order/:id" element={user.loggedIn ? <ViewOrder /> : <Navigate to="/Login"></Navigate>} />
          <Route path="customers" element={user.loggedIn ? <Customers /> : <Navigate to="/Login"></Navigate>} />
          <Route path="list-product" element={user.loggedIn ? <Productlist /> : <Navigate to="/Login"></Navigate>} />
          <Route path="product" element={user.loggedIn ? <Addproduct /> : <Navigate to="/Login"></Navigate>} />
        </Route>
        </>:<></>}

        
        <Route path="*" element={user.loggedIn ? <PageNotFound /> :<Navigate to="/Login"></Navigate>} />
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
