import React, {useState} from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-15 flex justify-between items-center px-10 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Name_Logo} alt='Logo' className='w-8 my-5' />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex font-sf-mono-re text-xs'>
            <li className='flex pr-3 my-auto'><h1 className='text-cyan-400'>01.</h1>About</li>
            <li className='flex px-3 my-auto'><h1 className='text-cyan-400'>02.</h1>Skills & Tools</li>
            <li className='flex px-3 my-auto'><h1 className='text-cyan-400'>03.</h1>Experience</li>
            <li className='flex px-3 my-auto'><h1 className='text-cyan-400'>04.</h1>Projects</li>
            <li className='flex pl-3 pr-5 my-auto'><h1 className='text-cyan-400'>05.</h1>Contacts</li>
            <button className='border-2 rounded-md px-3 pt-2 pb-2 text-center'>Resume</button>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <h1>Yo</h1> : <h1>No</h1>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='flex py-3 text-3xl'><h1 className='text-cyan-400'>01.</h1>About</li>
            <li className='flex py-3 text-3xl'><h1 className='text-cyan-400'>02.</h1>Skills & Tools</li>
            <li className='flex py-3 text-3xl'><h1 className='text-cyan-400'>03.</h1>Experience</li>
            <li className='flex py-3 text-3xl'><h1 className='text-cyan-400'>04.</h1>Projects</li>
            <li className='flex py-3 text-3xl'><h1 className='text-cyan-400'>05.</h1>Contacts</li>
            <button className='text-3xl border-2 rounded-md pt-2 pb-1 px-3'>Resume</button>
        </ul>
    </div>
  )
}

export default Navbar