import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='main'>
      {/* Header Section */}
      <div className="flex bg-gray-400 justify-between items-center w-full h-20 font-bold px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <p className='m-2 text-2xl md:text-4xl font-bold'>Logo</p>

        {/* Navigation Menu */}
        <div className='hidden md:flex cursor-pointer gap-x-4 text-[16px] md:text-[20px]'>
          <p>Home</p>
          <p>About Us</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col-reverse md:flex-row my-16 px-4 md:px-16 lg:px-24'>
        {/* Text Content */}
        <div className='flex flex-col justify-center md:w-1/2'>
          <h1 className='font-bold text-2xl md:text-4xl text-left mb-4'>Welcome To Our Website</h1>
          <p className='text-[16px] md:text-[20px] font-light leading-6 mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore quisquam molestias harum adipisci id,
            ea debitis nobis rem, suscipit quod temporibus corrupti natus amet eum facilis, vitae maiores iure?
            Odit ad non id.
          </p>
          <button className='bg-black p-2 w-[120px] md:w-[150px] text-white text-[16px] md:text-[18px] hover:bg-gray-800 transition duration-200'>
            Contact
          </button>
        </div>

        {/* Image Section */}
        <div className='flex justify-center md:w-1/2 mt-4 md:mt-0'>
          <div className='w-[80%] md:w-[60%] lg:w-[50%] h-auto'>
            <Image src="/image/logo.jpg" alt="picture" width={300} height={300} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
