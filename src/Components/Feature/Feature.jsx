import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../../images/feature_3.png'
import featureimage2 from '../../images/feature_2.png'
import featureimage3 from '../../images/feature_1.png'
import './feature.css'

function Feature() {
  return (
    <div id='features' className='app__bg'>
      <div className='a-container'>
          <FeatureBox image={featureimage2} title='Find Jobs' description='Online job boards are a great resource for job seekers, offering a wide variety of opportunities in a range of industries and locations.'></FeatureBox>
          <FeatureBox image={featureimage} title='Customization' description='Customization gives you the freedom to create something that is truly your own and meets your specific needs'></FeatureBox>
          <FeatureBox image={featureimage3} title='Shopping' description='Gone are the days of driving from store to store in search of the perfect item - with online shopping, its just a few clicks away'></FeatureBox>
      </div>
    </div>
  )
}

export default Feature
