import React from 'react'

const Blog = () => {
  return (
    <div>
        <div className='mt-20 space-y-7'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold '>Why Choose Us</h2>
                <p className='mt-4'>Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa.<br/> Sodales dictumst nec nibh pellentesque.</p>
            </div>
            <div className='grid sm:grid-cols-2 sm:gap-10 m-4 sm:space-y-0 space-y-10 mt-10'>
                <div className='bg-red-100  rounded-xl p-11'>

                
                <div className='w-20'>

                <img src='https://img.lovepik.com/free-png/20210926/lovepik-hotel-png-image_401448043_wh1200.png' alt='hotel'/>
                </div>
                <h2 className='font-bold  text-3xl'>Handpicked Hotels</h2>
                <p className='mt-4'>Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>
                </div>
                <div className='bg-blue-100  rounded-xl p-11'>
                    <div className='w-20'>
                        <img src='https://e7.pngegg.com/pngimages/160/350/png-clipart-google-my-business-local-search-google-maps-business-search-engine-optimization-people.png' alt=''/>
                    </div>
                    <h2 className='font-bold text-3xl '>World Class Service</h2>
                    <p className='mt-4'>Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>
                </div>

               

            </div>
            <div className='bg-red-100 sm:w-1/2 sm:m-auto p-11 rounded-xl m-4 '>
                    <div className='w-20'>
                        <img src='https://png.pngtree.com/png-vector/20210416/ourmid/pngtree-price-tag-icon-illust-clipart-png-image_3220003.jpg'alt='' className=''/>
                    </div>
                    <h2 className='font-bold text-3xl'>Best Price Guarantee</h2>
                    <p className='mt-4'>Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>

                </div>
        </div>
    </div>
  )
}

export default Blog