import Splash from "./components/Splash";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsAndTools from "./components/SkillsAndTools";
import Experience from "./components/Experience";
import {useState} from "react"

function App() {
  const [loading, setloading] = useState(true)

  setTimeout(() => {
    setloading(false);
  }, 2000);

  return ( loading ? <Splash /> :
    <div>
      <Navbar />
      <Hero />
      <About />
      <SkillsAndTools />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
