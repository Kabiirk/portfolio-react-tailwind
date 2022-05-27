import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const SkillsAndTools = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full bg-gray-700'>
        <div className='text-center'>
            <p className='text-3xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4 bg-red-500'>These are the technologies I've worked with</p>
        </div>

        {/* Languages */}
        <div className='bg-[#000000]'>Languages I code in</div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8 bg-red-400'>
            <div>
                <img className='w-20 mx-auto bg-red-600' src={Name_Logo} alt="HTML icon" />
                <p className='my-4'>Python</p>
            </div>
            <div>
                <img className='w-20 mx-auto bg-red-600' src={Name_Logo} alt="HTML icon" />
                <p className='my-4'>C++</p>
            </div>
            <div>
                <img className='w-20 mx-auto bg-red-600' src={Name_Logo} alt="HTML icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div>
                <img className='w-20 mx-auto bg-red-600' src={Name_Logo} alt="HTML icon" />
                <p className='my-4'>Dart</p>
            </div>
            <div>
                <img className='w-20 mx-auto bg-red-600' src={Name_Logo} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div>
                <img className='w-20 mx-auto bg-red-600' src={Name_Logo} alt="HTML icon" />
                <p className='my-4'>Assembly</p>
            </div>
        </div>

        {/* Skills */}
        <div className='w-full grid md:grid-cols-2 grid-cols-1 text-center bg-red-400'>
            {/* Skills */}
            <div className='bg-blue-700 text-left'>
                <p>Skills</p>
                <ul>
                    <li>Data Engineering</li>
                    <li>Data Visualization</li>
                    <li>Web/App dev</li>
                    <li>Graphic Design</li>
                    <li>UI/UX</li>
                </ul>
            </div>

            {/* Technologies */}
            <div className='bg-blue-500 text-left'>
                <p>Technologies I have worked with</p>
                <div className='flex flex-wrap'>
                    <div className='bg-green-400'>
                        <ul>
                            <li>Keras</li>
                            <li>WxPython/PyQT5</li>
                            <li>Seaborn/Matplotlib</li>
                            <li>React.js</li>
                            <li>D3.js/Three.js</li>
                        </ul>
                    </div>
                    <div className='bg-green-600'>
                        <ul>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Flutter(Android)</li>
                            <li>Bash</li>
                            <li>CMake</li>
                        </ul>
                    </div>
                    <div className='bg-green-800'>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Adobe XD</li>
                            <li>NASM</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
  </div>
  )
}

export default SkillsAndTools