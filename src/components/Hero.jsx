import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f] flex'>
        {/* Left Socials */}
        <div className='ml-10 my-auto flex-col invisible sm:visible'>
          <a href="/"><img className='w-5 pb-2' alt='Github' src={Name_Logo}/></a>
          <a href="/"><img className='w-5 py-2' alt='LinkedIn' src={Name_Logo}/></a>
          <a href="/"><img className='w-5 pt-2' alt='Behance' src={Name_Logo}/></a>
        </div>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full place-items-center text-center'>
            <p className='text-pink-600 py-1 font-sf-mono-re'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6] py-1'>Kabiir Krishna</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] py-1'>I build awesome things.</h2>
            <div className='pt-5'>
                <button className='text-white rounded-md flex items-center border-2 px-6 pt-3 pb-2 hover:bg-pink-600 hover:border-pink-600'>Check out my website !</button>
            </div>
        </div>

        {/* Right Email */}
        <div className='mr-10 my-auto flex-col invisible sm:visible write-mode-vertical text-[#8892b0] hover:text-[#ccd6f6] hover:duration-200'>
          <a className='font-sf-mono-re text-sm' href="/">kabiirk@gmail.com</a>
        </div>
    </div>
  )
}

export default Hero