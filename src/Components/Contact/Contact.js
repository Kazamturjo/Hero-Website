import React from 'react'
import img1 from '../../assets/Rectangle 8 (1).png'

const Contact = () => {
    const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed to newsletter\nName: ${name}\nEmail: ${email}`);
    setName('');
    setEmail('');
  };
  return (
    <div className='mt-16 sm:mt-20 '>
      <div className='grid sm:grid-cols-2 sm:gap-10 sm:m-0 m-4 sm:space-y-0 space-y-9 '>
        <div className=' space-y-7 border border-orange-500 rounded-md p-11'>
            <h2 className='text-4xl font-bold'>NewsLatter</h2>
          <p className='font-light'>
          Get your daily dose of travel news & tips. Sign up today!
          </p>
          <hr/>
          <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white p-2 w-full rounded-md hover:bg-orange-400 cursor-pointer"
        >
          Subscribe
        </button>
        
      </form>
          
        </div>
        
        <div className='relative'>
        <img src={img1} alt='img' className='w-full '/>

        <div className='bg-orange-700 sm:w-52 rounded-xl p-4 absolute bottom-12 left-32 sm:left-96 -rotate-45'>
            <p className='text-white'>Travel.com</p>
            <span className='text-xl text-white font-bold'>Save up to 70%</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact