import React from 'react'
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = ({star}) => {

  const [rating, setRating] = useState(star || 0);
  const [hover, setHover] = useState(null);
  console.log(rating)
  return (
    <div style={{marginBottom:"10px"}}>
        {[...Array(5)].map((star, i) =>{
          const ratingValue = i + 1;

          return(
            <label>
            <input 
            type='radio'
            name='rating' 
            style={{display:"none"}}
            value={star || 0 }
            
            />
            <FaStar 
            className='star' 
            size = {20}
            // onMouseOver={() => setHover(ratingValue)}
            onMouseOut={() => setHover(null)}
            color = {ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}/>
            </label>
            
          ) 
        })}
    </div>
  )
}

export default StarRating
