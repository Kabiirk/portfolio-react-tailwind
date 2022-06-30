import React from 'react'
import { ReactComponent as NameLogo } from '../assets/NameLogo.svg';
// import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

// const variant={
//   hidden: {y:75, opacity:0},
//   show: {
//     y:0,
//     opacity:1,
//     transition: {
//       // delay:2.5,
//       duration:1,
//     },
//   },
// };

const Splash = () => {
  return (
      <div>
        <NameLogo className='h-20' />
      </div>
  )
}

export default Splash