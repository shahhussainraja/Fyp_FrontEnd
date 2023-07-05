import React from "react"
// import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import bg1 from '../../images/SlideCard/slide-2.png'
import bg2 from '../../images/SlideCard/slide-3.png'
import bg3 from '../../images/SlideCard/slide-4.png'
import cover from "../../images/SlideCard/slider1.jpg"

const Sdata = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: `${bg1}`,
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: `${bg2}`,
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover:  `${bg3}`,
  },
]


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
                  <img src={value.cover} alt='' style={{height:"350px"}}/>
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
