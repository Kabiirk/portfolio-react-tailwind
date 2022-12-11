import React, {useState} from 'react'
import Name_Logo from '../assets/Name_Logo.png'
import { motion } from 'framer-motion';
import { Menubutton } from './Menubutton';
import {Link} from "react-scroll"

const variant={
  hidden: {translateY:-50, opacity:0},
  show: {
    translateY:0,
    opacity:1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const responsive_variant = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-100%" },
}

const Navbar = () => {
  const [nav, setNav] = useState(false)
  // const handleClick = () => setNav(!nav)


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
            <motion.li className='flex pr-3 my-auto hover:text-highlight hover:cursor-pointer duration-200 active:text-highlight' variants={variant} href="#about"><span className='text-highlight'>01.</span> <Link to="about" spy={false} smooth={true} offset={0} duration={500}>About</Link> </motion.li>
            <motion.li className='flex px-3 my-auto hover:text-highlight hover:cursor-pointer duration-200 active:text-highlight' variants={variant}><span className='text-highlight'>02.</span> <Link to="skills" spy={false} smooth={true} offset={50} duration={500}>Skills & Tools</Link></motion.li>
            <motion.li className='flex px-3 my-auto hover:text-highlight hover:cursor-pointer duration-200 active:text-highlight' variants={variant}><span className='text-highlight'>03.</span> <Link to="experience" spy={false} smooth={true} offset={-100} duration={500}>Experience</Link> </motion.li>
            <motion.li className='flex px-3 my-auto hover:text-highlight hover:cursor-pointer duration-200 active:text-highlight' variants={variant}><span className='text-highlight'>04.</span> <Link to="projects" spy={false} smooth={true} offset={-75} duration={500}>Projects</Link> </motion.li>
            <motion.li className='flex pl-3 pr-5 my-auto hover:text-highlight hover:cursor-pointer duration-200 active:text-highlight' variants={variant}><span className='text-highlight'>05.</span><Link to="contact" spy={false} smooth={true} offset={50} duration={500}>Contact</Link></motion.li>
            <motion.a className='border-2 rounded-md px-3 py-2 text-center text-highlight border-highlight hover:cursor-pointer hover:bg-[#64ffda] hover:bg-opacity-10 hover:duration-200' variants={variant} href="resume/Kabiir Krishna.pdf" download>Resume</motion.a>
        </motion.ul>

        {/* Hamburger */}
        {/* <motion.div onClick={handleClick} className='md:hidden z-10'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.2}}>
            {!nav ? <h1>Yo</h1> : <h1>No</h1>}
        </motion.div> */}
        <Menubutton
          isOpen={nav}
          onClick={() => setNav(!nav)}
          strokeWidth="4"
          color="#ccd6f6"
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          width="25"
          height="25"
          // style={menuButtonStyle}
        />

        {/* Mobile Menu */}
        <motion.ul
          animate={nav ? "open" : "closed"}
          variants={responsive_variant}
          transition={{duration:0.5}}
          className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-background flex flex-col justify-center items-center'}>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>01.</h1><Link  onClick={() => setNav(!nav)} to="about" spy={false} smooth={true} offset={0} duration={0}>About</Link></li>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>02.</h1><Link  onClick={() => setNav(!nav)} to="skills" spy={false} smooth={true} offset={0} duration={0}>Skills & Tools</Link></li>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>03.</h1><Link  onClick={() => setNav(!nav)} to="experience" spy={false} smooth={true} offset={0} duration={0}>Experience</Link></li>
            <li className='flex py-3 text-2xl font-sf-mono-sb'><h1 className='text-highlight'>04.</h1><Link  onClick={() => setNav(!nav)} to="projects" spy={false} smooth={true} offset={-100} duration={0}>Projects</Link></li>
            <li className='flex pt-3 text-2xl font-sf-mono-sb pb-5'><h1 className='text-highlight'>05.</h1><Link  onClick={() => setNav(!nav)} to="contact" spy={false} smooth={true} offset={0} duration={0}>Contacts</Link></li>
            <a className='text-2xl border-2 rounded-md px-3 py-3 text-center text-highlight border-highlight font-sf-mono-sb' href="resume/Kabiir Krishna.pdf" download>Resume</a>
        </motion.ul>
    </div>
  )
}

export default Navbar