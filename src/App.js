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
import Spinner from 'react-spinkit';
import Registration from './Components/registration/registration';
import PostDetails from './Pages/PostDetails/PostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerRegistration from './Components/registration/sellerRegistration';
import Contact from './Components/Contact/Contact';





function App() {

  let component 
  switch (window.location.pathname)
  {
    case"/":
    component = <Home />
    break

    case"/Registration":
    component = <Registration/>
    break

    case"/SellerRegistration":
    component = <SellerRegistration/>
    break

    case"/Login":
    component = <Login/>
    break

    case"/Post":
    component = <Post/>
    break

    case"/FindJobs":
    component = <FindJobs />
    break

    case"/PostDetails":
    component = <PostDetails />
    break

    case"/Shop":
    component = <Shop />
    break

    case"/Chat":
    component = <Conversation />
    
  }

  return (
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
        </Routes>
          
        <Contact/>
      </Router>
      {/* <div className={'loadinganim'} id="#interceptor">
            <Spinner name="three-bounce"  style={{color:"#36d7b7",marginTop:'25%',left:'50%',position:'absolute',zIndex:'99999',opacity: 2}} />
      </div> */}
    </div>
      
  );
}

export default App;
