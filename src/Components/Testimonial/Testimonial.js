import React from 'react';
import maldiv from '../../assets/Rectangle 5.png';
import srilan from '../../assets/Rectangle 6.png';
import north from '../../assets/Rectangle 7.png';
import indo from '../../assets/Rectangle 8.png';
import kashmir from '../../assets/Rectangle 9.png';
import bandarbon from '../../assets/Rectangle 10.png';
import bd from '../../assets/Rectangle 11.png';

const Testimonial = () => {
  return (
    <div className='mt-20'>
      <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold ">Choose Your Destination</h2>
          <p className='mt-7'>
            Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
            odio sit massa.
            <br /> Sodales dictumst nec nibh pellentesque.
          </p>
        </div>
        <div className="sm:m-0 m-3 sm:space-y-10 ">
          <div className="grid sm:grid-cols-2 gap-7 mt-16">
            <div className="relative group transform hover:scale-105 transition-transform duration-300">
              <h2 className="absolute font-bold text-white sm:top-48 sm:left-72 text-3xl  group-hover:opacity-100">
                Maldives
              </h2>
              <img src={maldiv} alt="maldiv" className="w-full" />
            </div>
            <div className="relative group transform hover:scale-105 transition-transform duration-300">
              <h2 className="absolute font-bold text-white sm:top-48 sm:left-72 text-3xl  group-hover:opacity-100 ">
                Indonesia
              </h2>
              <img src={indo} alt="indo" className="w-full" />
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:w-full sm:space-y-10">
            <div className="relative group transform hover:scale-105 transition-transform duration-300 mt-9">
              <h2 className="absolute font-bold text-white sm:top-40 sm:left-40 text-3xl  group-hover:opacity-100">
                Srilanka
              </h2>
              <div className="sm:w-4/5">
                <img src={srilan} alt="srilan" className="sm:w-full" />
              </div>
            </div>
            <div className="relative group transform hover:scale-105 transition-transform duration-300">
              <h2 className="absolute font-bold text-white sm:top-40 sm:left-40 text-3xl  group-hover:opacity-100">
                North America
              </h2>
              <img src={north} alt="north" className="sm:w-full" />
            </div>
            <div className="sm:space-x-4 lg:space-x-28 relative group transform hover:scale-105 transition-transform duration-300">
              <h2 className="absolute font-bold text-white sm:top-40 sm:left-56 text-3xl  group-hover:opacity-100">
                Kashmir
              </h2>
              <div className="sm:w-2/3">
                <img src={kashmir} alt="kashmir" className="w-full" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-20 gap-7 sm:w-[1300px] m-auto">
            <div className="relative group transform hover:scale-105 transition-transform duration-300 sm:mt-0 mt-7">
              <h2 className='absolute font-bold text-white sm:top-40 sm:left-60 text-3xl  group-hover:opacity-100'>
                Banderban
              </h2>
              <img src={bandarbon} alt="bandar" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="relative group transform hover:scale-105 transition-transform duration-300">
              <h2 className='absolute font-bold text-white sm:top-40 sm:left-60 text-3xl  group-hover:opacity-100'>
                Bangladesh
              </h2>
              <img src={bd} alt="bd" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
