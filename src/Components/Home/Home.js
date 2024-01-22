import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Package from '../Packagess/Package'
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog'
import Deal from '../Deal and Discounts/Deal'
import Perfectplace from '../A simple perfect place/Perfectplace'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className=' container mx-auto'>
        <Navbar/>
        <Hero/>
        <Package/>
        <Testimonial/>
        <Blog/>
        <Deal/>
        <Perfectplace/>
        <Contact/>
    </div>
  )
}

export default Home