import React from 'react';

const Perfectplace = () => {
  return (
    <div className='mt-16 sm:mt-20  m-4'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        <div className='space-y-7'>
          <h2 className='text-4xl font-bold'>
            A Simple Perfect Place<br />To Get Lost
          </h2>
          <p>
            Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
            odio sit <br /> massa. Sodales dictumst nec nibh pellentesque.
          </p>

          <li>
            Adipiscing ornare pellentesque mauris volutpat tortor vitae platea{' '}
            <br /> porta lacus. Lectus suspendisse nullam.
          </li>
          <li>
            {' '}
            Accumsan eget et turpis praesent lorem egestas enim elit <br />{' '}
            bibendum. Risus at in.
          </li>

          <div className='bg-orange-500 w-32 p-2 text-center rounded-lg font-bold text-white hover:bg-orange-400 cursor-pointer'>
            See More
          </div>
        </div>
        <div>
          <iframe
            width='100%'
            height='315'
            src='https://www.youtube.com/embed/BHACKCNDMW8?si=OSt7pARk_yhPbDhQ'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='rounded '
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Perfectplace;
