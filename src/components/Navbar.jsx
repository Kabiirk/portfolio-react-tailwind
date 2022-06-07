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
        <ul className='hidden md:flex font-sf-mono-sb text-xs'>
            <li className='flex pr-3 my-auto'><h1 className='text-highlight'>01.</h1>About</li>
            <li className='flex px-3 my-auto'><h1 className='text-highlight'>02.</h1>Skills & Tools</li>
            <li className='flex px-3 my-auto'><h1 className='text-highlight'>03.</h1>Experience</li>
            <li className='flex px-3 my-auto'><h1 className='text-highlight'>04.</h1>Projects</li>
            <li className='flex pl-3 pr-5 my-auto'><h1 className='text-highlight'>05.</h1>Contact</li>
            <button className='border-2 rounded-md px-3 py-2 text-center text-highlight border-highlight hover:bg-cyan-200 hover:bg-opacity-20 hover:duration-200'>Resume</button>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <h1>Yo</h1> : <h1>No</h1>}
        </div>

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