//i ihave change something in app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import FindJobs from './Pages/FindJobs/FindJobs';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Post from './Pages/Post/Post';
import Login from './Components/Login/Login'
import Conversation from './Pages/ConversationPage/Conversation';
import Registration from './Components/registration/registration';
import PostDetails from './Pages/PostDetails/PostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerRegistration from './Components/registration/sellerRegistration';
import Contact from './Components/Contact/Contact';
import UserProfile from './Pages/UserProfile/UserProfile'
import SellerProfile from './Pages/UserProfile/SellerProfile';
import Spinner from 'react-spinkit';




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
        <Route path='/UserProfile' element={<UserProfile/>} />
        <Route path='/SellerProfile' element={<SellerProfile/>} />
        </Routes>
        <Contact/>
      </Router>
      {/* <div className={'loadinganim'} id="#interceptor">
            <Spinner name="three-bounce"  style={{color:"#36d7b7",marginTop:'25%',left:'50%',position:'absolute',zIndex:'99999',opacity: 2}} />
      </div> */}
    </div>
   </>
      
  );
}

export default App;
