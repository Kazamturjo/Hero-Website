import React, { useState } from 'react';
import imgNav from '../../assets/Group 40071 (2).png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex items-center justify-between bg-transparent sm:h-32 p-4 md:p-6'>
      <div className='flex items-center'>
        <img
          src={imgNav}
          alt='nav'
          className='w-12 h-12 object-contain mr-3'
        />
        <p className='text-base-color text-3xl font-mulish font-extrabold'>
          <span>Hero</span>
          <span className='text-orange-500  text-2xl '>
            {' '}
            Travel
          </span>
        </p>
      </div>
      <div className='sm:hidden '>
        <button
          onClick={toggleMenu}
          className='text-black focus:outline-none '
        >
          {isMenuOpen ? (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          ) : (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden mt-2 bg-white text-black p-4 absolute top-20 rounded left-10 z-10 cursor-pointer`}
      >
        <p className='mb-2 hover:text-orange-500'>Home</p>
        <p className='mb-2 hover:text-orange-500'>Package</p>
        <p className='mb-2 hover:text-orange-500'>Testimonial</p>
        <p className='mb-2 hover:text-orange-500'>Blog</p>
        <p className='hover:text-orange-500'>Contact</p>
      </div>
      <div className='hidden md:flex items-center gap-x-11'>
        <p>Home</p>
        <p>Package</p>
        <p>Testimonial</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
