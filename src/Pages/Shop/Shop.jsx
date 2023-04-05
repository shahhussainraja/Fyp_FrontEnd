import React from 'react'
import Search from '../../Components/Search/Search'
import Catagories from '../../Components/Category/Catagories'
import StickyBox from 'react-sticky-box'
import "./shop.css"
import SliderHome from "./Slider"

function Shop() {
  return (
    <>
      <Search></Search>
    <div style={{display:'flex', padding:"40px", marginTop:"120px"}}>
          <div>
          <StickyBox offsetTop={140} offsetBottom={20}>
            <div><Catagories></Catagories></div>
          </StickyBox>
          </div>
          <SliderHome />
    </div>
    </>
  )
}

export default Shop
