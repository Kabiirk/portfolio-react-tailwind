import React, {useState} from 'react'
import Name_Logo from '../assets/Name_Logo.png'
import { motion } from 'framer-motion';

const variant={
  hidden: {y:-50, opacity:0},
  show: {
    y:0,
    opacity:1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
};

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    // Have to statically declare bg-color so that RGB can be extracted & alpha can be applied 
    // ref. : https://github.com/tailwindlabs/tailwindcss/issues/1692
    <div className='bg-opacity-70 bg-[#0a192f] backdrop-filter backdrop-blur-md fixed w-full h-13 flex justify-between items-center px-10 text-gray-300 z-50'>
        <div variants={variant}>
            <a href="/">
            <motion.img width="50" height="51" src={Name_Logo} alt='Logo' className='w-8 my-5'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.2}}/>
            </a>
        </div>

        {/* Menu */}
        <motion.ul className='hidden md:flex font-sf-mono-sb text-xs'
                   variants={variant}
                   initial="hidden"
                   animate="show"
                   >
            <motion.li className='flex pr-3 my-auto hover:text-highlight duration-200' variants={variant}><span className='text-highlight'>01.</span>About</motion.li>
            <motion.li className='flex px-3 my-auto hover:text-highlight duration-200' variants={variant}><span className='text-highlight'>02.</span>Skills & Tools</motion.li>
            <motion.li className='flex px-3 my-auto hover:text-highlight duration-200' variants={variant}><span className='text-highlight'>04.</span>Projects</motion.li>
            <motion.li className='flex px-3 my-auto hover:text-highlight duration-200' variants={variant}><span className='text-highlight'>03.</span>Experience</motion.li>
            <motion.li className='flex pl-3 pr-5 my-auto hover:text-highlight duration-200' variants={variant}><span className='text-highlight'>05.</span>Contact</motion.li>
            <motion.button className='border-2 rounded-md px-3 py-2 text-center text-highlight border-highlight hover:bg-[#64ffda] hover:bg-opacity-10 hover:duration-200' variants={variant}>Resume</motion.button>
        </motion.ul>

        {/* Hamburger */}
        <motion.div onClick={handleClick} className='md:hidden z-10'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.2}}>
            {!nav ? <h1>Yo</h1> : <h1>No</h1>}
        </motion.div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center'}>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>01.</h1>About</li>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>02.</h1>Skills & Tools</li>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>03.</h1>Experience</li>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>04.</h1>Projects</li>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>05.</h1>Contacts</li>
            <button className='text-2xl border-2 rounded-md px-3 py-2 text-center font-sf-mono-sb'>Resume</button>
        </ul>
    </div>
  )
}

export default Navbar