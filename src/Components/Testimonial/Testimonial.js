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
    <div>
      <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">Choose Your Destination</h2>
          <p>
            Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
            odio sit massa.
            <br /> Sodales dictumst nec nibh pellentesque.
          </p>
        </div>
        <div className="sm:m-0 m-3 sm:space-y-10">
  <div className="grid sm:grid-cols-2 gap-7">
    <div className="relative">
      <h2 className="absolute font-bold text-white sm:top-48 sm:left-72 text-3xl">Maldives</h2>
      <img src={maldiv} alt="maldiv" className="w-full" />
    </div>
    <div className="relative">
      <h2 className="absolute font-bold text-white sm:top-48 sm:left-72 text-3xl">Indonesia</h2>
      <img src={indo} alt="indo" className="w-full" />
    </div>
  </div>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:w-full sm:space-y-10">
    <div className="relative mt-9">
      <h2 className="absolute font-bold text-white sm:top-40 sm:left-40 text-3xl">Srilanka</h2>
      <div className="sm:w-4/5">
        <img src={srilan} alt="srilan" className="sm:w-full" />
      </div>
    </div>
    <div className="relative">
      <h2 className="absolute font-bold text-white sm:top-40 sm:left-40 text-3xl">North America</h2>
      <img src={north} alt="north" className="sm:w-full" />
    </div>
    <div className="sm:space-x-4 lg:space-x-28 relative">
      <h2 className="absolute font-bold text-white sm:top-40 sm:left-60 text-3xl">Kashmir</h2>
      <div className="sm:w-2/3 ">
        <img src={kashmir} alt="kashmir" className="w-full" />
      </div>
    </div>
  </div>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-20 gap-7 sm:w-[1300px] m-auto ">
  <div className="relative sm:mt-0 mt-7">
    <h2 className='absolute font-bold text-white sm:top-40 sm:left-60 text-3xl'>Banderban</h2>
    <img src={bandarbon} alt="bandar" className="w-full h-full object-cover rounded-xl" />
  </div>
  <div className="relative">
    <h2 className='absolute font-bold text-white sm:top-40 sm:left-60 text-3xl'>Bangladesh</h2>
    <img src={bd} alt="bd" className="w-full h-full object-cover rounded-xl" />
  </div>
</div>
</div>

      </div>
    </div>
  );
};

export default Testimonial;
