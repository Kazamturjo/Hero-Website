import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Package from '../Packagess/Package'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div className=' container mx-auto'>
        <Navbar/>
        <Hero/>
        <Package/>
        <Testimonial/>
    </div>
  )
}

export default Home