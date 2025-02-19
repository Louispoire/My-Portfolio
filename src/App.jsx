import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import TypingAnimation from './components/Utils/Animations/TypingAnimation/TypingAnimation'

function App() {

  return (
    <>
      <div>
        <div>
          <Navbar/>
        </div>
        <div className='intro-wrapper'>
          <TypingAnimation/>
        </div>
        <div>
          <Projects/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App