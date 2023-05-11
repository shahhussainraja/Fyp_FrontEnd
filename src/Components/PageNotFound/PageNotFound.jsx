import React from 'react'
import image from "./server Error.jpg"
import "./PageNotFound.css"

function PageNotFound() {
  return (
    <div className='PageNotFoundContainer'>
        <img src={image} alt=""  className='image_NotFound' />
    </div>
  )
}

export default PageNotFound