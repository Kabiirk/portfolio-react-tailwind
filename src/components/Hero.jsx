import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
import { ReactComponent as LinkedIn } from '../assets/social_icons/LinkedIn_Rounded.svg';
import { ReactComponent as Github } from '../assets/social_icons/Github_Rounded.svg';
import { ReactComponent as Behance } from '../assets/social_icons/Behance_Rounded.svg';
import { motion } from 'framer-motion';

const variant={
  hidden: {opacity:0},
  show: {
    opacity:1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity:0,
    y:50,
  },
  show: {
    opacity:1,
    y:0,
    transition: {
      duration: 0.4,
    },
  },
};

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-background flex'>
        {/* Left Socials */}
        <div className='ml-10 my-auto flex-col invisible sm:visible'>
          <a href="/"><Github className='w-5 pb-2 fill-heading hover:fill-highlight hover:duration-200'/></a>
          <a href="/"><LinkedIn className='w-5 py-2 fill-heading hover:fill-highlight hover:duration-200'/></a>
          <a href="/"><Behance className='w-5 pt-2 fill-heading hover:fill-highlight hover:duration-200'/></a>
        </div>

        {/* Container */}
        <motion.div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full place-items-center text-center children'
                    variants={variant}
                    initial="hidden"
                    animate="show"
        >
            <motion.p className='text-highlight text-sm pb-4 font-sf-mono-re' variants={item}>Hi, my name is</motion.p>
            <motion.h1 className='text-3xl sm:text-5xl font-calibre-sb text-heading py-2' variants={item}>Kabiir Krishna</motion.h1>
            <motion.h2 className='text-3xl sm:text-5xl font-calibre-sb text-subheading pt-2' variants={item}>I build awesome things.</motion.h2>
            <motion.div className='pt-6' variants={item}>
                <button className='text-sm rounded-md flex items-center px-6 py-3 font-sf-mono-re border-2 text-highlight border-highlight hover:bg-cyan-200 hover:bg-opacity-20 hover:duration-200'>Check out my website !</button>
            </motion.div>
        </motion.div>

        {/* Right Email */}
        <div className='mr-10 my-auto flex-col invisible sm:visible write-mode-vertical text-subheading hover:text-heading hover:duration-200'>
          <a className='font-sf-mono-re text-sm' href="/">kabiirk@gmail.com</a>
        </div>
    </div>
  )
}

export default Hero