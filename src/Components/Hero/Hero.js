import React from 'react';
import hero from '../../assets/Group 13 (1) (1).png';

const Hero = () => {
  return (
    <div>
      <div className='relative sm:mx-0 mx-3' >
        
              <div className='sm:w-full bg-center '>

            <img src={hero} alt='heroimg' className='sm:w-full h-[500px] sm:h-full'  />
              </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl "></div>
           
        <div className=' absolute sm:top-48 top-0 text-center sm:left-96 sm:space-y-10 '>
            
          <p className='sm:text-6xl text-2xl text-white font-bold sm:mt-0 mt-5'>Explore Your Travel</p>
          <p className='text-white sm:font-bold sm:text-xl  '>
            Dolor sit amet consectetur. Nullam suspendisse vitae ultricies dolor
            adipiscing. In et odio <br /> enim ac quis sapien urna eu phasellus.
          </p>
        </div>
        <div className=' absolute sm:bottom-28 sm:left-96  sm:flex sm:space-x-6 bottom-32  sm:p-3 left-5 sm:space-y-0 space-y-4 '>
        <div className="sm:absolute sm:inset-0 sm:bg-gray-500 sm:opacity-50 sm:rounded-4xl">

            
        </div>

        <div className='z-10 '>
          <input
            type='text'
            id='whereInput'
            placeholder='Where go'

            // value={whereValue}
            // onChange={handleWhereChange}
            className='border rounded p-2 w-48'
          />
        </div>
        <div className='z-10 '>
        <input type='date' className='p-2 w-48 rounded  '/>
        </div>

        {/* <div>
        <select
            id='selectType'
            // value={selectTypeValue}
            // onChange={handleSelectTypeChange}
            className='border rounded p-2'
          >
            <option value='option1'>When Type 1</option>
            <option value='option2'>Select Type 2</option>
            <option value='option3'>Select Type 3</option>
          </select>
        </div> */}
        <div className='z-10 '>
          <select
            id='selectType'
            // value={selectTypeValue}
            // onChange={handleSelectTypeChange}
            className='border rounded p-3 w-48'
            
          >
            
            <option value='option1'>Select Type 1</option>
            <option value='option2'>Select Type 2</option>
            <option value='option3'>Select Type 3</option>
          </select>
        </div>
        
        <div className='bg-orange-500 w-40  flex h-12 items-center sm:p-4 rounded-xl gap-2 text-white cursor-pointer hover:bg-orange-400 z-10'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

<p >Find Now</p>
</div>
        </div>
        


      </div>
    </div>
  );
};

export default Hero;
