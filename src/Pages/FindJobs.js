import React from 'react'
import Contact from '../Components/Contact'
import Search from '../Components/Search'
import Catagories from '../Components/Catagories'
import GroupExample from '../Components/PostCard'
import App from '../Components/searchbar/App'

function FindJobs() {

    
  return (
    <div >
        <Search></Search>
        
        <div style={{display:'flex'}}>
          <div>
          <Catagories></Catagories>
          </div>
          <div style={{marginLeft:'20px'}}>
          <h4 style={{marginLeft:'20px', color:'#00b7ff'}}>Posts</h4>
          <GroupExample></GroupExample>
          </div>
        </div>
        <Contact></Contact>
    </div>
  )
}

export default FindJobs
