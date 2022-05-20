import About from "./components/About";
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
    </div>
  );
}

export default App;
