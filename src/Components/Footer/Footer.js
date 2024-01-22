import React from 'react'
import img1 from '../../assets/Group 40071 (2).png'

const Footer = () => {
  return (
    <div className='mt-20 bg-gray-100'>
        <div className='flex items-center gap-5 justify-center '>
            <img src={img1} alt='' className='mt-16'/>
            <p className='text-2xl font-bold mt-16'>Hero <spna className='text-orange-500'>{''}Travel</spna></p>
           
        </div>
        <div className='text-center font-light'>
        <p>Lorem ipsum dolor sit amet consectetur. Nulla sit viverra morbi vitae blandit orci potenti vulputate. Leo <br/> erat maecenas vitae elementum ultricies nullam. </p>
        </div>
        <div className='flex justify-center gap-5 mt-4 m-4'>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png' alt=''className='w-4'/>
            <img src='https://cdn-icons-png.flaticon.com/512/59/59439.png'alt=''className='w-4'/>
            <img src='https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png' alt='' className='w-4'/>
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='' className='w-4'/>
        </div>
             <hr/>
        <div className='text-center mt-16 m-4'>2024, All Rights Reserved.</div>
    </div>
  )
}

export default Footer