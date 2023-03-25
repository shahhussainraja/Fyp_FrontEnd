import React from 'react'
import Search from '../../Components/Search/Search'
import Catagories from '../../Components/Category/Catagories'
import GroupExample from '../../Components/Post-Cards/PostCard'
import { Products } from '../../Components/Post-Cards/PostCard'
import contents from '../../Components/Post-Cards/content'
import './FindJobs.css'

function FindJobs() {

    
  return (
    <div className=''>
      
        <Search></Search>
      
        
        <div style={{display:'flex', padding:"40px"}}>
          <div style={{position:"fixed", marginBottom:"1000px"}}>
          <Catagories></Catagories>
          </div>
          <div style={{marginLeft:'250px'}}>
          <h4 style={{marginLeft:'20px', color:'#2693b2'}}>Posts</h4>
          <div style={{ marginTop:"0px"}} className="PostCard">
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.title}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>
          </div>
        </div>
   </div>
  )
}

export default FindJobs
