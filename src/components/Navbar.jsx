import React, {useState} from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Name_Logo} alt='Logo' />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='flex'><h1 className='text-cyan-400'>01.</h1>About</li>
            <li className='flex'><h1 className='text-cyan-400'>02.</h1>Skills & Tools</li>
            <li className='flex'><h1 className='text-cyan-400'>03.</h1>Experience</li>
            <li className='flex'><h1 className='text-cyan-400'>04.</h1>Projects</li>
            <li className='flex'><h1 className='text-cyan-400'>05.</h1>Contacts</li>
            <button>Resume</button>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <h1>Yo</h1> : <h1>No</h1>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='flex py-6 text-4xl'><h1 className='text-cyan-400'>01.</h1>About</li>
            <li className='flex py-6 text-4xl'><h1 className='text-cyan-400'>02.</h1>Skills & Tools</li>
            <li className='flex py-6 text-4xl'><h1 className='text-cyan-400'>03.</h1>Experience</li>
            <li className='flex py-6 text-4xl'><h1 className='text-cyan-400'>04.</h1>Projects</li>
            <li className='flex py-6 text-4xl'><h1 className='text-cyan-400'>05.</h1>Contacts</li>
            <button className='flex py-6 text-4xl'>Resume</button>
        </ul>
    </div>
  )
}

export default Navbar