import { useState } from "react";
import Header from './Components/header.jsx'
import Hero from './Components/hero.jsx'
import About from './Components/About.jsx';
import ExperienceSection from './Components/Experince.jsx';
import WorkCard from './Components/WorkCard.jsx';
import Contact from './Components/Contact.jsx';
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(prev => !prev);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-900 dark:bg-gray-50 transition-colors duration-500 min-h-screen text-white dark:text-gray-900">
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        <main>
          <Hero />
          <About />
          <ExperienceSection />
          <WorkCard />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
