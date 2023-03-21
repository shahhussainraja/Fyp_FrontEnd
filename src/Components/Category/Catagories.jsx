import React from 'react'
import image from '../../images/Bespoke.png'
import './category.css'

function Catagories() {

    
    const data = [
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
          cateName: "Bakery Items",
        },
        {
          cateImg: "./images/category/cat4.png",
          cateName: "Home & Garden",
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
          cateName: "Interior Design",
        },
        {
          cateImg: "./images/category/cat8.png",
          cateName: "Decoration",
        },
        {
          cateImg: "./images/category/cat9.png",
          cateName: "Car",
        },
       
      ]


  return (
    <div>
       <h4 style={{color:'#00b7ff'}}>Catagories</h4>
       <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
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
