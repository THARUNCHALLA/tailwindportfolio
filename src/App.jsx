import Header from './Components/header'
import Hero from './Components/hero'
import About from './Components/About'
import ContactPage from './Components/Contact'
import WorkCard from './Components/Workcard'
import './App.css'
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WorkCard/>
        <ContactPage />
      </main>
    </>
  )
}


export default App