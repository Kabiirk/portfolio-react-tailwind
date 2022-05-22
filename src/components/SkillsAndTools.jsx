import React from 'react'
import Name_Logo from '../assets/Name_Logo.png'

const SkillsAndTools = () => {
  return (
    <div name='SkillsAndTools' className='bg-[#0a192f] text-gray-300 py-4 px-20'>
        {/* Container */}
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-full px-10'>
            <div className='text-center'>
                <div>
                    <p className='text-3xl font-bold inline border-b-4 border-pink-600'>Skills & Tools</p>
                </div>
            </div>
            {/* Coding Languages */}
            <div className='text-sm pt-5'>Some languages I code in</div>
            <div className='grid md:grid-cols-6 grid-cols-3 text-center py-4'>
                <div>
                    <img className='mx-auto' src={Name_Logo} alt="Python" />
                    <p className='my-4'>Python</p>
                </div>
                <div>
                    <img className='mx-auto' src={Name_Logo} alt="Python" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div>
                    <img className='mx-auto' src={Name_Logo} alt="Python" />
                    <p className='my-4'>C++</p>
                </div>
                <div>
                    <img className='mx-auto' src={Name_Logo} alt="Python" />
                    <p className='my-4'>Dart</p>
                </div>
                <div>
                    <img className='mx-auto' src={Name_Logo} alt="Python" />
                    <p className='my-4'>HTML</p>
                </div>
                <div>
                    <img className='mx-auto' src={Name_Logo} alt="Python" />
                    <p className='my-4'>Assembly</p>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 text-sm py-4'>
                {/* Skills */}
                <div className='py-4'>
                    <p>Skills</p>
                    <div>
                        <ul>
                            <li>Data Engineering</li>
                            <li>Data Visualization</li>
                            <li>Web/App Dev</li>
                            <li>UI/UX</li>
                            <li>UI/UX</li>
                        </ul>
                    </div>
                </div>

                {/* Technologies */}
                <div className='py-4'>Tools &Technologies I have worked with
                    <div className='md:grid-cols-2 flex'>
                        <ul>
                            <li>Keras</li>
                            <li>WxPython/PyQT5</li>
                            <li>Seaborn/Matplotlib</li>
                            <li>React.js</li>
                            <li>D3.js/Three.js</li>
                        </ul>
                        <ul>
                            <li>Flutter(Android)</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Bash</li>
                            <li>CMake</li>
                        </ul>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illutsrator</li>
                            <li>Adobe XD</li>
                            <li>NASM/AVR Studio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsAndTools