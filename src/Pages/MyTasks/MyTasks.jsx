import {React, useState, useEffect} from 'react'
import { Products } from '../../Components/Post-Cards/PostCard'
import ResultNotFound from '../../Components/PageNotFound/ResultNotFound'
import Footer from '../../Components/Footer/Footer'

const MyTasks = () => {
  

  return (
    <>
    <div className='container'>
        <div style={{marginTop:"100px", marginBottom:"100px", backgroundColor:"ghostWhite", padding:"10px"}}>
      <h4 style={{color:"#E3BE00", fontWeight:"bold"}}>My Tasks</h4>
      <div className='details'>
      

      </div>
      </div>
    </div>
    <Footer style={{justifyContent:"bottom"}}></Footer>
    </>
  )
}

export default MyTasks
