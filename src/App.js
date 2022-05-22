import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsAndTools from "./components/SkillsAndTools";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <SkillsAndTools />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
