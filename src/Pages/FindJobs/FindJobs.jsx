import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import Catagories from '../../Components/Category/Catagories'
import GroupExample from '../../Components/Post-Cards/PostCard'
import { Products } from '../../Components/Post-Cards/PostCard'
import contents from '../../Components/Post-Cards/content'
import './FindJobs.css'
import authServices from '../../Services/AuthServices'
import StickyBox from "react-sticky-box";
import Contact from "../../Components/Contact/Contact"
import { useSelector } from 'react-redux'
import ResultNotFound from '../../Components/PageNotFound/ResultNotFound'
import Footer from '../../Components/Footer/Footer'


function FindJobs() {

  const [searchData, setSearchData]  = useState("")
  const [allPosts , setAllPosts] = useState(null)
  const  selectedTags  =  useSelector((state)=>state.Postfilter.selectedCategory);



  
useEffect(()=>{
  const searchRequest = (searchData,selectedTags)=>{
    setTimeout(()=>{
      authServices.searchJobs( "" ,selectedTags==="All"? "" :selectedTags).then((res)=>{
        setAllPosts(res)
      }).catch((err)=>{
        console.log(err.message);
      })
    },500)
  }
  searchRequest(searchData,selectedTags)
  },[selectedTags]);

  const handleSearch = ()=>{
    if(searchData != ""){
      authServices.searchJobs(searchData ,"").then((res)=>{
        setAllPosts(res)
      }).catch((err)=>{
        console.log(err.message);
      })

    }
  }




// console.log(allPosts)

  return (
    <div className=''>
 
        <div className='search_comp'>
                <div className='search-form' >
                    <input type='search' placeholder='search here' onChange={(e)=>setSearchData(e.target.value)}/>
                    <button onClick={handleSearch}>Send</button>
                </div>                                            
        </div>
        <div style={{display:'flex', padding:"40px", marginTop:"120px"}}>
          <div>
          <StickyBox offsetTop={140} offsetBottom={20}>
            <div><Catagories></Catagories></div>
          </StickyBox>
          </div>
          <div style={{marginLeft:'25px'}}>
          <h4 style={{marginLeft:'20px', color:'#2693b2'}}>Posts</h4>
              {allPosts?.length === 0 ? <>
                <div style={{display:"flex",justifyContent:"center",position:"absolute","left":"40%",}}>
                <ResultNotFound></ResultNotFound>
                </div>
                </> :<>
                
              <div style={{ marginTop:"0px"}} className="PostCard">
                {allPosts?.map(contents => (
                    <Products key = {contents._id}
                       content = {contents}
                    />
                ))}
                </div>
                
                
                </>
              }
              
              
          </div>
        </div>
        <Footer></Footer>
   </div>
  )
}

export default FindJobs
