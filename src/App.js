//i ihave change something in app.js
import React from 'react';
import Home from './Pages/Home';
import FindJobs from './Pages/FindJobs';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Post from './Pages/Post/Post';
import Login from './Components/Login/Login'
import Conversation from './Pages/ConversationPage/Conversation';
import Spinner from 'react-spinkit';
import Registration from './Components/registration/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import SellerRegistration from './Components/registration/sellerRegistration';




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

    case"/Shop":
    component = <Shop />
    break

    case"/Chat":
    component = <Conversation />
    
  }

  return (
    <div className="App">  
      <Navbar></Navbar>
      {component}
      {/* <div className={'loadinganim'} id="#interceptor">
            <Spinner name="three-bounce"  style={{color:"#36d7b7",marginTop:'25%',left:'50%',position:'absolute',zIndex:'99999',opacity: 2}} />
      </div> */}
    </div>
      
  );
}

export default App;
