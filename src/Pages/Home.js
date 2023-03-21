import React from 'react';
import Header from '../Components/Header/Header';
import Feature from '../Components/Feature/Feature';
import About from '../Components/About/About';
import Presentation from '../Components/Presentation/Presentation';
import aboutImage from '../images/logo4.png'
import aboutImage1 from '../images/about3.png'

function Home() {
  return (
    <div className="">
      <Header></Header>
      <Feature></Feature>
      <About image={aboutImage} title='About Bespoke' height='100px' width= "400px" description='Bespoke allow users to get their dream products without any physical research.Bespoke provide job opportunities for local shops or home working. This platform encourage newcomers (especially house women as tailors, designers, bakers etc.) to run their businesses on a small scale as entrepreneurs. ' button='Know More'></About>
      <Presentation></Presentation>
      <About className='app__bg' image={aboutImage1} title='Who we are?' height='500px' width= "500px" description="We are a small team of developers and designers who are passionate about creating beautiful and user-friendly websites. Our goal is to help businesses and organizations of all sizes to establish an online presence and connect with their customers through the web." button='Know More'></About>
    </div>
  )
}

export default Home
