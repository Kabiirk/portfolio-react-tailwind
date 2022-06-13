import React from 'react'
// import Name_Logo from '../assets/Name_Logo.png'

const SkillsAndTools = () => {
  return (
    <div name='skills' className='w-full h-screen bg-background text-heading'>
    {/* Container */}
    <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
        <div className='text-center pb-8'>
            <p className='text-3xl inline font-calibre-sb'>Skills & Tools</p>
        </div>

        {/* Languages */}
        <div className='w-full font-calibre-re pb-2'>Languages I code in</div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center pb-8 font-sf-mono-re text-sm'>
            <div>
                <svg className='h-14 mx-auto fill-heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Python"><path d="M24.7,0a35.54,35.54,0,0,0-6,.52l.21,0c-5.11.89-6,2.76-6,6.2v4.55H25v1.51H8.24a7.51,7.51,0,0,0-7.38,6v.05A21.48,21.48,0,0,0,0,24.86a22,22,0,0,0,.89,6.22l0-.16c.86,3.53,2.9,6,6.4,6H11.4V31.52a7.62,7.62,0,0,1,7.53-7.41H31a6,6,0,0,0,6-6V18h0V6.69a6.71,6.71,0,0,0-6-6.2h0A36.82,36.82,0,0,0,24.92,0H24.7ZM18.18,3.66h0a2.28,2.28,0,1,1-2.29,2.28v0a2.27,2.27,0,0,1,2.26-2.26Z"/><path d="M38.52,12.75v5.3A7.7,7.7,0,0,1,31,25.61h-12a6.11,6.11,0,0,0-6,6.06V43c0,3.23,2.84,5.13,6,6.06A19.84,19.84,0,0,0,25,50a20.31,20.31,0,0,0,6.17-1l-.15,0c3-.87,6-2.62,6-6.06V38.48H25V37H43c3.51,0,4.81-2.41,6-6A19.79,19.79,0,0,0,50,24.86a20.23,20.23,0,0,0-1-6.21l0,.15c-.86-3.45-2.53-6.05-6-6.05ZM31.74,41.51h0a2.28,2.28,0,1,1-2.3,2.28h0v0A2.26,2.26,0,0,1,31.74,41.51Z"/></g></g></g></svg>
                <p className='pt-2 text-highlight'>Python</p>
            </div>
            <div>
                <svg className='h-14 mx-auto fill-heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.66 50"><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M43.38,10.87,25.08.58a4.67,4.67,0,0,0-4.5,0L2.27,10.87A4.43,4.43,0,0,0,0,14.71V35.29a4.43,4.43,0,0,0,2.27,3.84L20.58,49.41a4.58,4.58,0,0,0,2.25.59,4.64,4.64,0,0,0,2.25-.59l18.3-10.28a4.44,4.44,0,0,0,2.28-3.84V14.71A4.44,4.44,0,0,0,43.38,10.87ZM22.83,38A13,13,0,1,1,33.2,17.11l-4.76,2.75a7.62,7.62,0,1,0,0,10.27l4.76,2.76A13,13,0,0,1,22.83,38Zm13-11.95H33.7v2.17H31.52V26.09H29.35V23.91h2.17V21.74H33.7v2.17h2.17Zm7.61,0H41.31v2.17H39.13V26.09H37V23.91h2.17V21.74h2.18v2.17h2.17Z"/></g></g></svg>
                <p className='pt-2 text-highlight'>C++</p>
            </div>
            <div>
                <svg className='h-14 mx-auto fill-heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0H50V50H0ZM45.91,38.08c-.37-2.29-1.86-4.2-6.26-6-1.53-.72-3.24-1.22-3.75-2.38a2.44,2.44,0,0,1-.09-1.46c.31-1.35,1.9-1.75,3.15-1.38a3.37,3.37,0,0,1,2,1.87c2.15-1.4,2.15-1.4,3.65-2.34a8.06,8.06,0,0,0-1.22-1.62c-1.31-1.47-3.06-2.22-5.9-2.15l-1.47.18A6.66,6.66,0,0,0,32.5,24.9a6.55,6.55,0,0,0,1.18,9.32c2.84,2.13,7,2.59,7.54,4.59.5,2.45-1.82,3.23-4.1,2.94A5.5,5.5,0,0,1,33.46,39l-3.81,2.19a8.35,8.35,0,0,0,1.69,2.31C35,47.12,44,46.94,45.65,41.38a7.13,7.13,0,0,0,.16-3.44ZM27.19,23H22.51c0,4,0,8.05,0,12.09,0,2.57.13,4.93-.28,5.65-.69,1.44-2.46,1.26-3.26,1a4,4,0,0,1-1.73-1.79,2.09,2.09,0,0,0-.27-.4l-3.8,2.34A7.4,7.4,0,0,0,15.9,45a9.14,9.14,0,0,0,6.68.84A5.85,5.85,0,0,0,26.35,43c1.07-1.94.84-4.32.83-7,0-4.28,0-8.56,0-12.87Z"/></g></g></svg>
                <p className='pt-2 text-highlight'>JavaScript</p>
            </div>
            <div>
                <svg className='h-14 mx-auto fill-heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M8.55,8.55,24.34.66A6.48,6.48,0,0,1,27.43,0a7.86,7.86,0,0,1,3.49,1.65L50,20.73V41.12H41.12V50H20.39L1.64,31.25A5.82,5.82,0,0,1,0,27.3,6.73,6.73,0,0,1,.66,25ZM10,10V34.52a3.92,3.92,0,0,0,1,3.15L21.26,47.92H39V39ZM35.08,8.56q-2.8-2.8-5.71-5.51a3,3,0,0,0-2.23-1,7.61,7.61,0,0,0-1.81.4L13.21,8.55Z"/></g></g></svg>
                <p className='pt-2 text-highlight'>Dart</p>
            </div>
            <div>
                <svg className='h-14 mx-auto fill-heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.06 50"><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M.76,0A.75.75,0,0,0,0,.83L3.88,44.29a1.27,1.27,0,0,0,.88,1.05L21.2,49.91a3.65,3.65,0,0,0,1.61,0L39.3,45.34a1.32,1.32,0,0,0,.88-1.06L44.06.83A.75.75,0,0,0,43.3,0ZM35.81,10c0,.4-.1,1.11-.14,1.57l-.11,1.14c0,.46-.1,1.11-.13,1.46s-.06.62-.06.62H15a.75.75,0,0,0-.76.83l.35,4a.93.93,0,0,0,.91.83H34.13a.68.68,0,0,1,.68.75c0,.41-.11,1.11-.15,1.57L33.51,35.65c0,.45-.09,1-.11,1.3s-.41.56-.85.69l-9.71,2.69c-.45.12-.82.22-.82.23l-.82-.23-9.72-2.69a1.3,1.3,0,0,1-.88-1.06l-.63-7a.76.76,0,0,1,.76-.84h3.88a.94.94,0,0,1,.91.84l.25,2.75a1.3,1.3,0,0,0,.88,1l4.55,1.22.81.22.81-.22,4.56-1.23a1.29,1.29,0,0,0,.88-1.05l.49-5.51A.75.75,0,0,0,28,26H10.48a.94.94,0,0,1-.91-.83L8.36,11.54c0-.46-.1-1.17-.14-1.57A.72.72,0,0,1,9,9.22H35A.72.72,0,0,1,35.81,10Z"/></g></g></svg>
                <p className='pt-2 text-highlight'>HTML</p>
            </div>
            <div>
                <svg className='h-14 mx-auto fill-heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="ASM_Hollow" data-name="ASM Hollow"><polygon points="14.35 38.23 17.6 38.23 15.98 32.24 14.35 38.23"/><path d="M30.72,0V.27a5.74,5.74,0,0,1-11.47,0V0H0V50H50V0ZM19,43.29l-.77-2.83H13.75L13,43.29h-2.5l4.6-15h1.8l4.59,15ZM31,39.4a4.15,4.15,0,0,1-.55,2.2A3.53,3.53,0,0,1,28.9,43a6.13,6.13,0,0,1-2.52.47,6,6,0,0,1-2.19-.37A3.92,3.92,0,0,1,22.63,42a4.22,4.22,0,0,1-.88-1.8l2.24-1a2.87,2.87,0,0,0,.92,1.47,2.43,2.43,0,0,0,1.56.49,2.6,2.6,0,0,0,1.62-.45,1.56,1.56,0,0,0,.58-1.3v-.66a1.48,1.48,0,0,0-.31-1,1.9,1.9,0,0,0-.81-.59,13.43,13.43,0,0,0-1.33-.45l0,0,0,0-.12,0a11.5,11.5,0,0,1-2-.72,3.37,3.37,0,0,1-1.33-1.2,3.81,3.81,0,0,1-.55-2.18v-.42A4.23,4.23,0,0,1,22.66,30a3.39,3.39,0,0,1,1.56-1.38,5.67,5.67,0,0,1,2.45-.47,4.85,4.85,0,0,1,1.93.35A3.48,3.48,0,0,1,30,29.5a4.58,4.58,0,0,1,.84,1.73l-2.14,1a3,3,0,0,0-.84-1.37,1.88,1.88,0,0,0-1.26-.47,2.52,2.52,0,0,0-1.58.44,1.47,1.47,0,0,0-.55,1.23v.47a1.53,1.53,0,0,0,.33,1,2.33,2.33,0,0,0,.83.61,14.26,14.26,0,0,0,1.38.47l.11,0,.1.05h.09l.09,0a10.76,10.76,0,0,1,1.88.75,3.47,3.47,0,0,1,1.25,1.17A3.79,3.79,0,0,1,31,38.73Zm13.53,3.89H42.38V33.18l-2.69,7.89H38.05l-2.67-7.64v9.86H33.17v-15h2.49l3.21,9.42,3.24-9.42h2.46Z"/></g></g></g></svg>
                <p className='pt-2 text-highlight'>Assembly</p>
            </div>
        </div>

        {/* Skills */}
        <div className='w-full grid md:grid-cols-4 gap-4 grid-cols-1 text-center'>
            {/* Skills */}
            <div className='text-left col-span-1 '>
                <p className='font-calibre-re'>Skills</p>
                <ul className='font-sf-mono-re text-xs'>
                    <li className='styled-bullets'>Data Engineering</li>
                    <li className='styled-bullets'>Data Visualization</li>
                    <li className='styled-bullets'>Web/App dev</li>
                    <li className='styled-bullets'>Graphic Design</li>
                    <li className='styled-bullets'>UI/UX</li>
                </ul>
            </div>

            {/* Technologies */}
            <div className='text-left col-span-3'>
                <p className='font-calibre-re'>Technologies I have worked with</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 '>
                    <div>
                        <ul className='font-sf-mono-re text-xs '>
                            <li className='styled-bullets'>Keras</li>
                            <li className='styled-bullets'>WxPython/PyQT5</li>
                            <li className='styled-bullets'>Seaborn/Matplotlib</li>
                            <li className='styled-bullets'>React.js</li>
                            <li className='styled-bullets'>D3.js/Three.js</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='font-sf-mono-re text-xs '>
                            <li className='styled-bullets'>Docker</li>
                            <li className='styled-bullets'>Kubernetes</li>
                            <li className='styled-bullets'>Flutter(Android)</li>
                            <li className='styled-bullets'>Bash</li>
                            <li className='styled-bullets'>CMake</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='font-sf-mono-re text-xs'>
                            <li className='styled-bullets'>Photoshop</li>
                            <li className='styled-bullets'>Illustrator</li>
                            <li className='styled-bullets'>Adobe XD</li>
                            <li className='styled-bullets'>NASM</li>
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