import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import bg from '../../images/SlideCard/slide-1.png'

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='slider box top' key={index}>
                <div className='left' style={{ marginLeft:"30px", marginTop:"20px"}}>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='slider-btn'>Visit Collections</button>
                </div>
                <div className='right' style={{height:"30rem", justifyContent:"center"}}>
                  <img src={bg} alt=''/>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
