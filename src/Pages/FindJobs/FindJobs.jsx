import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import Catagories from '../../Components/Category/Catagories'
import GroupExample from '../../Components/Post-Cards/PostCard'
import { Products } from '../../Components/Post-Cards/PostCard'
import contents from '../../Components/Post-Cards/content'
import './FindJobs.css'
import authServices from '../../Services/AuthServices'

function FindJobs() {

  const [allPosts , setAllPosts] = useState(null)

  useEffect(()=>{
    const fetchAllMessages = () =>{
    authServices.fetchAllPost().then((res)=>{
      setAllPosts(res)
      console.log(res)
    }).catch((e)=>console.log(e.message))
  }

   fetchAllMessages();

  },[])

// console.log(allPosts)

  return (
    <div className=''>
      
        <Search></Search>
      
        
        <div style={{display:'flex', padding:"40px"}}>
          <div style={{position:"fixed", marginBottom:"1000px"}}>
          {/* <Catagories></Catagories> */}
          </div>
          <div style={{marginLeft:'250px'}}>
          <h4 style={{marginLeft:'20px', color:'#2693b2'}}>Posts</h4>
          <div style={{ marginTop:"0px"}} className="PostCard">
                {allPosts?.map(contents => (
                    <Products key = {contents._id}
                       content = {contents}
                    />
                ))}
            </div>
          </div>
        </div>
   </div>
  )
}

export default FindJobs
