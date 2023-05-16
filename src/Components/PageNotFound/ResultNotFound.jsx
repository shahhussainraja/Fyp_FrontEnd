import React from 'react'
import bg from "./search.png"
import "./ResultNotFound.css"
function ResultNotFound() {
  return (
    <div className='ResultNotFoundContainer'>
        <img src={bg} alt=""  className='image_ResultNotFound' />
        <h1>Result Not Found</h1>
        <p>Please try again with another </p>
        <p>keyword or maybe use generic term</p>
    </div>
  )
}

export default ResultNotFound