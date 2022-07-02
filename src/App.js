import Splash from "./components/Splash";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsAndTools from "./components/SkillsAndTools";
import Experience from "./components/Experience";
import {useState} from "react"
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setloading] = useState(true)

  setTimeout(() => {
    setloading(false);
  }, 2000);

  return ( loading ?
      <div className='w-full h-screen bg-background flex items-center justify-center'>
          <motion.div key={1} initial={ {y:75, opacity:0} }
                      animate={ {y:0, opacity:1, transition: {duration:1} } }
                      exit={ {y:-75, opacity:0, transition: {duration:1} } }>
            <Splash />
          </motion.div>
      </div>
    :
    <div>
      <Navbar />
      <Hero />
      <About />
      <SkillsAndTools />
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
