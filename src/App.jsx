import { useState } from "react";
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import ExperienceSection from './Components/Experince';
import WorkCard from './Components/WorkCard';
import ContactPage from './Components/Contact';
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
          <ContactPage />
        </main>
      </div>
    </div>
  );
}

export default App;
