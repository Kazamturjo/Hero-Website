import React from 'react'
import hotel from '../../assets/hotel.png'
import gift from '../../assets/gift.png'
import location from '../../assets/locaton.png'

const Blog = () => {
  return (
    <div>
        <div className='mt-20 space-y-7'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold '>Why Choose Us</h2>
                <p className='mt-4 text-gray-500'>Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa.<br/> Sodales dictumst nec nibh pellentesque.</p>
            </div>
            <div className='grid sm:grid-cols-2 sm:gap-10 m-4 sm:space-y-0 space-y-10 mt-10'>
                <div className='bg-red-50  rounded-xl p-11'>

                
                <div className='w-20 bg-red-50'>

                <img src={hotel} alt='hotel' className=''/>
                </div>
                <h2 className='font-bold  text-3xl'>Handpicked Hotels</h2>
                <p className='mt-4 text-gray-500'>Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>
                </div>
                <div className='bg-blue-50  rounded-xl p-11'>
                    <div className='w-20'>
                        <img src={location} alt=''/>
                    </div>
                    <h2 className='font-bold text-3xl '>World Class Service</h2>
                    <p className='mt-4 text-gray-500'>Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>
                </div>

               

            </div>
            <div className='bg-red-50 sm:w-1/2 sm:m-auto p-11 rounded-xl m-4 '>
                    <div className='w-20 bg-red-50'>
                        <img src={gift} alt='' className=''/>
                    </div>
                    <h2 className='font-bold text-3xl'>Best Price Guarantee</h2>
                    <p className='mt-4 text-gray-500'>Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>

                </div>
        </div>
    </div>
  )
}

export default Blog