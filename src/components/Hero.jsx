import React from 'react'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full place-items-center'>
            <p className='text-pink-600 py-1'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6] py-1'>Kabiir Krishna</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] py-1'>I build awesome things.</h2>
            <div className='pt-5'>
                <button className='text-white rounded-md flex items-center border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600'>Check out my website !</button>
            </div>

        </div>

    </div>
  )
}

export default Hero