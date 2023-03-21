import React from 'react'
import Search from '../../Components/Search'
import Catagories from '../../Components/Category/Catagories'
import GroupExample from '../../Components/Post-Cards/PostCard'
import { Products } from '../../Components/Post-Cards/PostCard'
import contents from '../../Components/Post-Cards/content'

function FindJobs() {

    
  return (
    <div className='maincontainer'>
        <Search></Search>
        
        <div style={{display:'flex', padding:"30px"}}>
          <div>
          <Catagories></Catagories>
          </div>
          <div style={{marginLeft:'40px'}}>
          <h4 style={{marginLeft:'20px', color:'#00b7ff'}}>Posts</h4>
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
