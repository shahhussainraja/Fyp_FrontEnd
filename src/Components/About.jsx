import React from 'react'

function About(props) {
  return (
    <div id='about' col-lg-6 col-xl-9 mx-auto>
      <div className='about-image' col-lg-6 col-xl-9 mx-auto>
          <img src={props.image} alt='' style={{height:props.height,width:props.width}}/>
      </div>
      <div className='about-text' col-lg-12 col-xl-9 mx-auto>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About
