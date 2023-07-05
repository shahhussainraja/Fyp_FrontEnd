import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import Catagories from '../../Components/Category/Catagories'
import StickyBox from 'react-sticky-box'
import "./shop.css"
import SliderHome from "./Slider"
import Contact from "../../Components/Contact/Contact"
import Wrapper from './Wrapper'
import Discount from './discount/Discount'
import sellerServices from '../../Services/SellerServices'
import { Space, Tag } from 'antd';
import authServices from '../../Services/AuthServices'
import ResultNotFound from '../../Components/PageNotFound/ResultNotFound'
import Footer from '../../Components/Footer/Footer'



function Shop() {

  const [searchData, setSearchData]  = useState("")
  const [data,setData] = useState([]) 
  const { CheckableTag } = Tag;
  const tagsData = ['All','Cloths', 'Catering', 'Bakery-Items', 'Home-Garden','Gifts',"Furniture","Interior-Design"];

  const [selectedTags, setSelectedTags] = useState("");

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked  
      ? tag
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

//   const getAllproduct = ()=>{
//     sellerServices.getAllproduct().then((res)=>{
//       setData(res);
//     }).catch((e)=>{
//       console.log(e.message)
//     })
//   }
//  useEffect(getAllproduct,[]);

useEffect(()=>{
const searchRequest = (searchData,selectedTags)=>{
    authServices.searchData( searchData ,selectedTags==="All"? "" :selectedTags).then((res)=>{
      setData(res)
    }).catch((err)=>{
      console.log(err.message);
    })
}
searchRequest(searchData,selectedTags)
},[selectedTags]);

  const handleSearch = ()=>{
    if(searchData != ""){
      authServices.searchData(searchData ,selectedTags==="All"? "" :selectedTags).then((res)=>{
        setData(res)
      }).catch((err)=>{
        console.log(err.message);
      })

    }
  }

  return (
    <>
    <div className="shopContainer background">   
      {/*search input  */}
    <div className='search_comp'>
        <div className='search-form' >
            <input type='search' placeholder='search here' onChange={(e)=>setSearchData(e.target.value)}/>
            <button onClick={handleSearch}>Send</button>
        </div>                                            
    </div>

     <div style={{marginTop:"150px", marginLeft:"20px",marginBottom:"5px"}}>
     <span
        style={{
          marginTop:120,
          marginRight: 8,
          fontWeight:"bold",
          fontSize:"larger",
        }}
      >
        Categories:
      </span>
      <Space size={[0, 5]} wrap>
        {tagsData.map((tag) => (
          <CheckableTag
            style={{fontSize:"medium",padding:"5px"}}
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
      </div>  
          
        
          {(selectedTags=="" && searchData==="" )? <>
          <SliderHome /> 
          <h4 style={{margin:"20px", color:'#E3BE00'}}>New Products</h4>
              <div className='grid2'>
              {data?.map((val)=>(
                    (<><Wrapper key={val._id} content={val.products} shopName={val.shopName} sellerId = {val.sellerProfileId}></Wrapper></>)
              ))}
            </div>
          </>:<>
              {data.length === 0 ? <>
                <ResultNotFound></ResultNotFound>
              </>:<>
              <div className='grid2'>
                  {data?.map((val)=>(
                        (<><Wrapper key={val._id} content={val.products} shopName={val.shopName} sellerId = {val.sellerProfileId}></Wrapper></>)
                  ))}
                </div>
              </>}
   </> }
          


    {/* <Discount></Discount> */}
    {/* <Wrapper></Wrapper> */}
    <Footer></Footer>
    </div>

    </>
  )
}

export default Shop
