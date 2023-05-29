import React, { useEffect, useRef, useState } from 'react'
import image from '../../images/logoIcon.png'
import './category.css'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../../Redux/FilterReducer';

function Catagories() {
  const dispatch =  useDispatch();
  const spanRef  = useRef()
  const [selected,setSelected] = useState("All");

    const data = [
        {
          cateImg: "../images/category/123.png" ,
          cateName: "All",
        },
        {
          cateImg: "../images/category/123.png" ,
          cateName: "Cloths",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Catering",
        },
        {
          cateImg: "./images/category/cat3.png",
          cateName: "Bakery-Items",
        },
        {
          cateImg: "./images/category/cat4.png",
          cateName: "Home&Garden",
        },
        {
          cateImg: "./images/category/cat5.png",
          cateName: "Gifts",
        },
        {
          cateImg: "./images/category/cat6.png",
          cateName: "Furniture",
        },
        {
          cateImg: "./images/category/cat7.png",
          cateName: "Interior-Design",
        },
        {
          cateImg: "./images/category/cat8.png",
          cateName: "Decoration",
        },
        {
          cateImg: "./images/category/cat9.png",
          cateName: "Food",
        },
       
      ]

      const handleDispatch = ()=>{
        dispatch(updateFilter({selectedCategory : selected}))
      }
      useEffect(handleDispatch,[selected]);


  return (
    <div style={{Position:"fixed"}}>
       <h4 style={{color:'#2693b2'}}>Catagories</h4>
       <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} onClick={()=>setSelected(value.cateName)}>
              <img src={image} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Catagories
