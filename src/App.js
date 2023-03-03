
import React from 'react';
import Home from './Pages/Home';
import FindJobs from './Pages/FindJobs';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Conversation from './Pages/ConversationPage/Conversation';
import Spinner from 'react-spinkit';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";




function App() {

  let component 
  switch (window.location.pathname)
  {
    case"/":
    component = <Home />
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
