import React from 'react'
import Search from '../../Components/Search/Search'
import Catagories from '../../Components/Category/Catagories'
import StickyBox from 'react-sticky-box'
import "./shop.css"
import SliderHome from "./Slider"
import Contact from "../../Components/Contact/Contact"
import Wrapper from './Wrapper'
import Discount from './discount/Discount'

function Shop() {
  return (
    <>
    <div className="shopContainer">     
     <Search></Search>
      <div style={{display:'flex', padding:"40px", marginTop:"120px"}}>
          <div>
          {/* <StickyBox offsetTop={140} offsetBottom={20}> */}
            <div><Catagories></Catagories></div>
          {/* </StickyBox> */}
          </div>
          <SliderHome /> 
    </div>
    <Discount></Discount>
    <Wrapper></Wrapper>
    <Contact></Contact>
    </div>

    </>
  )
}

export default Shop
