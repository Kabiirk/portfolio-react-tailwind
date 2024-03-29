import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'
// import { ReactComponent as LinkedIn } from '../assets/social_icons/LinkedIn_Rounded.svg';
// import { ReactComponent as Github } from '../assets/social_icons/Github_Rounded.svg';
// import { ReactComponent as Behance } from '../assets/social_icons/Behance_Rounded.svg';
import { motion } from 'framer-motion';
import {Link} from "react-scroll"

const main = {
  hidden: {},
  show: {
    transition: {
      // delayChildren: 0.75,
      staggerChildren: 0.25,
      duration:0.5,
    },
  },
}

const left = {
  hidden: {x:-30, opacity:0},
  show: {
    x:0,
    opacity:1,
    transition: {
      delayChildren: 2,
      staggerChildren:0.25,
      duration:0.5,
    },
  },
}

const right = {
  hidden: {x:30, opacity:0},
  show: {
    x:0,
    opacity:1,
    transition: {
      duration:0.5,
      delay: 2.6,
    },
  },
}

const center = {
  hidden: {translateY:50, opacity:0},
  show: {
    translateY:0,
    opacity:1,
    transition: {
      delayChildren: 1.25,
      staggerChildren:0.2,
    },
  },
}

const Hero = () => {
  return (
    <div variants={main} name='hero' className='w-full h-screen bg-background flex'>
        {/* Left Socials */}
        <motion.div variants={left} initial="hidden" animate="show" className='ml-10 my-auto flex-col invisible sm:visible'>
            <a href="https://github.com/Kabiirk" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <motion.svg variants={left} className='w-5 pb-2 fill-subheading hover:fill-heading hover:duration-200' 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.24 350.15"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Github"><path d="M124.49,350.15H58.14a6.54,6.54,0,0,0-1.54-.62c-26.73-4.26-44.16-19.72-53.49-44.71C1.58,300.73,1,296.29,0,292V58.13c.37-1.75.76-3.5,1.12-5.26C7.6,21.63,34,.05,66,0Q175.09,0,284.15.06a67.87,67.87,0,0,1,12.9,1.05,65.28,65.28,0,0,1,53.13,64.26q.12,109.73,0,219.46a65.13,65.13,0,0,1-44.31,61.85c-4.46,1.54-9.19,2.33-13.79,3.47h-65a9,9,0,0,0-1.46-.72c-4.82-1.38-6.34-3.15-6.78-8.12-.16-1.81-.26-3.63-.26-5.45q0-23.92,0-47.86c0-13-1.27-25.53-11.68-35.6,1.75-.3,3-.53,4.16-.69,11.65-1.53,23-3.92,33.8-9,15.89-7.42,28.1-18.35,34.55-35a111.89,111.89,0,0,0,6.8-29.8c2-21.26-1.53-40.81-16.08-57.39a3.91,3.91,0,0,1-.7-3.22c4.19-12.19,3.78-24.35.25-36.59-2.68-9.27-4.08-10.27-13.63-7.85C243.58,76,232.38,82,221.52,88.77a8.13,8.13,0,0,1-5.62.93,164.91,164.91,0,0,0-81.42.12c-2.36.6-4,.05-6-1-8.53-4.49-17-9.1-25.84-13C98.1,73.82,93,73,88.13,72.17c-1.71-.28-4.9.66-5.37,1.85-5.4,13.68-7.14,27.7-2.24,42a4.76,4.76,0,0,1-1,5.43A60.29,60.29,0,0,0,65.64,148.1C61.57,166,63.26,183.63,68.46,201c4.89,16.32,14.14,29.42,29.28,37.92a90.81,90.81,0,0,0,28.94,10.75c5.32.94,10.64,1.83,16.44,2.83a37.87,37.87,0,0,0-10.73,21.69,3.46,3.46,0,0,1-1.77,2.18,45,45,0,0,1-26,3.56c-10.08-1.69-17.12-8.17-22.21-16.71-4.32-7.24-9.9-13-17.46-16.81-5.09-2.54-10.4-4-16.13-2.38-2.35.66-3.07,2.13-1.43,4,1.93,2.2,4.14,4.15,6.27,6.16,3.37,3.17,7.44,5.84,10,9.55,3.77,5.47,6.33,11.77,9.71,17.53a51.73,51.73,0,0,0,7.44,10.46c7.66,7.64,17.72,9.45,28,9.8,7.45.26,14.92-.34,22.7-.56,0,.79.13,2,.15,3.23.1,10.94,0,21.88.33,32.81C132.13,343.06,130.23,347.61,124.49,350.15Z"/></g></g></g>
                    </motion.svg>
            </a>
            <a href="https://www.linkedin.com/in/kabiir-krishna-21a6a516b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <motion.svg variants={left} className='w-5 py-2 fill-subheading hover:fill-heading hover:duration-200' 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.15 350.24"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="LinkedIn"><path d="M350.15,58.17V292.1a6.71,6.71,0,0,0-.62,1.54c-4.26,26.74-19.72,44.17-44.71,53.5-4.09,1.52-8.53,2.09-12.8,3.1H58.13l-5.26-1.12C21.64,342.65.05,316.24,0,284.23Q0,175.17.05,66.1A71.47,71.47,0,0,1,1,53.52,65.44,65.44,0,0,1,65,.08Q175.1-.08,285.17.07a65.14,65.14,0,0,1,61.51,44.3C348.21,48.84,349,53.56,350.15,58.17ZM188.17,293v-4.28q0-37.28,0-74.55c0-4.9,0-9.81.42-14.68a28.38,28.38,0,0,1,27.53-26.53c12.35-.55,21.08,5,24.47,16.89a74.75,74.75,0,0,1,2.73,19.46c.29,26.55.12,53.12.12,79.68v3.93h52.68v-4.05c0-27.13.17-54.26-.09-81.38A189.92,189.92,0,0,0,294,180.58c-1.87-12.26-6.88-23.31-15.69-32.33-12.07-12.36-27.14-17.09-44-16.8-16.31.29-30.15,6.25-40.76,18.94-1.64,2-3.13,4.05-4.69,6.07l-.68-.19v-21H136.05V293Zm-81.71,0V135.37H54.18V293ZM51,86.12c-.11,8.37,2.94,15.36,9.41,20.65,9.55,7.8,20.48,8.32,31.59,4.7,9.41-3.07,15.54-9.9,17.36-19.74,1.93-10.48-.94-19.64-9.42-26.52-7.18-5.83-15.57-6.79-24.47-5.85C61.42,60.86,51.09,72,51,86.12Z"/></g></g></g>
                    </motion.svg>
            </a>
            <a href="https://www.behance.net/kabiirk" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <motion.svg variants={left} className='w-5 pt-2 fill-subheading hover:fill-heading hover:duration-200' 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.33 350.14"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Behance_Matched_corners" data-name="Behance Matched corners"><path d="M.05,79.11V271c0-.08,0-.16,0-.23V79.32C0,79.25,0,79.18.05,79.11Z"/><path d="M350.27,205.16q0-43.18,0-86.37Q350.43,162,350.27,205.16Z"/><path d="M350.26,118.79q0-26.72,0-53.42A65.26,65.26,0,0,0,297.1,1.11,67.88,67.88,0,0,0,284.2.05Q225.63,0,167.05,0q-21,0-41.9,0Q95.6,0,66.06,0c-32,0-58.41,21.6-64.89,52.84C.81,54.62.42,56.37.05,58.12V292c1,4.28,1.58,8.72,3.11,12.8,9.32,25,26.75,40.45,53.49,44.71a7.2,7.2,0,0,1,1.54.62H292.13c4.6-1.14,9.33-1.93,13.79-3.47a65.12,65.12,0,0,0,44.31-61.85q0-39.83,0-79.66Q350.29,162,350.26,118.79ZM206,111.56h57.59v13.53H206ZM173.69,223.64C167.63,237,156,243.32,142.2,246.21a38.58,38.58,0,0,1-7.79.87c-21.66.07-43.32,0-65,0-.68,0-1.35-.09-2.46-.16V103.36a16.19,16.19,0,0,1,2.3-.34c23.14,0,46.29-.13,69.42.26,19.77.33,33.21,13.37,34.47,33a52.07,52.07,0,0,1-.85,13.54c-1.83,8.93-7.38,14.26-17.28,17.46a10.15,10.15,0,0,0,1.9.68c8.2,1,14,5.51,17.12,12.94C180,195.11,180.07,209.62,173.69,223.64Zm89.73,18.5c-18.93,8.72-38.2,8.93-56.78-1.14-12-6.48-18.07-17.66-21-30.56a66.13,66.13,0,0,1,6.62-47.57c7.76-14.24,20.08-21.8,36.16-23.58,8.73-1,17.31-.66,25.62,2.26,14.21,5,22.22,15.62,26.34,29.61,2.49,8.49,2.92,17.22,2.87,26,0,2.78-1.51,2.75-3.49,2.74q-31.27,0-62.57,0H213c-1.22,17.42,11.33,28.3,28.79,25.42a32.44,32.44,0,0,0,8.45-2.46c5-2.35,6.27-4.41,8.47-11.41h23C282.78,224.19,276.1,236.29,263.42,242.14Z"/><path d="M135,219.42c6.41-.1,11.86-4.2,13.15-10.47a42.08,42.08,0,0,0,.7-14.82c-1.51-9.34-8-14-16.64-13.65-10.35.39-20.73.09-31.1.09H97.32v38.9C110.13,219.47,122.54,219.61,135,219.42Z"/><path d="M135.7,158.25a8,8,0,0,0,7.71-5.78,27.18,27.18,0,0,0,.21-18.38c-1.22-3.41-3.55-6.08-7.41-6.13-12.85-.14-25.7,0-38.84,0v30.41C110.28,158.32,123,158.43,135.7,158.25Z"/><path d="M236.31,158.67c-12.27,0-23,9.94-23.44,21.72h43.92C256.24,166.67,248.62,158.67,236.31,158.67Z"/></g></g></g>
                    </motion.svg>
            </a>
        </motion.div>

        {/* Container */}
        <motion.div variants={center} initial="hidden" animate="show" className='max-w-[1000px] mx-auto flex flex-col justify-center h-full place-items-center text-center children'>
            <motion.p variants={center} className='text-highlight text-sm pb-4 font-sf-mono-re'>Hi, my name is</motion.p>
            <motion.h1 variants={center} className='text-3xl sm:text-5xl font-calibre-sb text-heading py-2'>Kabiir Krishna</motion.h1>
            <motion.h2 variants={center} className='text-3xl sm:text-5xl font-calibre-sb text-subheading pt-2'>I build awesome things.</motion.h2>
            <motion.div variants={center} className='pt-6'>
              <Link to="about" spy={false} smooth={true} offset={0} duration={500}>
                <button className='text-sm rounded-md flex items-center px-6 py-3 font-sf-mono-re border-2 text-highlight border-highlight hover:bg-[#64ffda] hover:bg-opacity-10 hover:duration-200'>Check out my website !</button>
              </Link>
            </motion.div>
        </motion.div>

        {/* Right Email */}
        <motion.div variants={right} initial="hidden" animate="show" className='mr-10 my-auto flex-col invisible sm:visible write-mode-vertical text-subheading hover:text-heading hover:duration-200'>
          <a className='font-sf-mono-re text-sm' href="mailto:kabiirk@gmail.com">kabiirk@gmail.com</a>
        </motion.div>
    </div>
  )
}

export default Hero