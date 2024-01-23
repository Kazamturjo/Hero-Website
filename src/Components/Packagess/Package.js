import React from 'react';
import img1 from '../../assets/Rectangle 4.png'

const Package = () => {
  return (
    <div className='mt-16 sm:mt-20 sm:mx-10'>
      <div className='grid sm:grid-cols-2 sm:space-x-52 sm:m-0 m-4 sm:space-y-0 space-y-9 '>
        <div className=' space-y-7 text-gray-500'>
            <h2 className='text-4xl font-bold text-black'>Our Popular Tours</h2>
          <p>
            Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
            odio sit  massa. Sodales dictumst nec nibh pellentesque.
          </p>
          <li>
            Tempus euismod lacus mauris dignissim quis in ultrices. Magna nullam
            odio  neque diam. Sociis erat at .
          </li>
          <li>
            Adipiscing ornare pellentesque mauris volutpat tortor vitae platea{' '}
             porta lacus. Lectus suspendisse nullam.
          </li>
          <li>
            {' '}
            Accumsan eget et turpis praesent lorem egestas enim elit{' '}
            bibendum. Risus at in.
          </li>
          <p>
            Amet consectetur. Vulputate commodo felis molestie risus 
            ornare nulla amet et. Libero commodo sagittis dignissim adipiscing
            quis.
            <br /> Habitant adipiscing risus natoque aliquet. Id bibendum nunc
            senectus semper tincidunt.{' '}
          </p>
          <div className='bg-orange-500 w-32 p-2 text-center rounded-lg font-bold text-white hover:bg-orange-400 cursor-pointer'>Read More</div>
        </div>
        <div>
            <img src={img1} alt='img' />
        </div>
      </div>
    </div>
  );
};

export default Package;
