import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
import { ReactComponent as LinkedIn } from '../assets/social_icons/LinkedIn_Rounded.svg';
import { ReactComponent as Github } from '../assets/social_icons/Github_Rounded.svg';
import { ReactComponent as Behance } from '../assets/social_icons/Behance_Rounded.svg';
import { motion } from 'framer-motion';

const variant={
  hidden: {y:50, opacity:0},
  show: {
    y:0,
    opacity:1,
    transition: {
      delay:2,
      duration:0.5,
    },
  },
};

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-background flex'>
        {/* Left Socials */}
        <div className='ml-10 my-auto flex-col invisible sm:visible'>
          <a href="/"><Github className='w-5 pb-2 fill-heading hover:fill-[#64ffda] hover:duration-200'/></a>
          <a href="/"><LinkedIn className='w-5 py-2 fill-heading hover:fill-[#64ffda] hover:duration-200'/></a>
          <a href="/"><Behance className='w-5 pt-2 fill-heading hover:fill-[#64ffda] hover:duration-200'/></a>
        </div>

        {/* Container */}
        <motion.div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full place-items-center text-center children'
                    variants={variant}
                    initial="hidden"
                    animate="show"
                    >
            <p className='text-highlight text-sm pb-4 font-sf-mono-re'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-5xl font-calibre-sb text-heading py-2'>Kabiir Krishna</h1>
            <h2 className='text-3xl sm:text-5xl font-calibre-sb text-subheading pt-2'>I build awesome things.</h2>
            <div className='pt-6'>
                <button className='text-sm rounded-md flex items-center px-6 py-3 font-sf-mono-re border-2 text-highlight border-highlight hover:bg-[#64ffda] hover:bg-opacity-10 hover:duration-200'>Check out my website !</button>
            </div>
        </motion.div>

        {/* Right Email */}
        <div className='mr-10 my-auto flex-col invisible sm:visible write-mode-vertical text-subheading hover:text-heading hover:duration-200'>
          <a className='font-sf-mono-re text-sm' href="/">kabiirk@gmail.com</a>
        </div>
    </div>
  )
}

export default Hero