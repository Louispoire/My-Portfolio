import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Projects from './components/Projects/Projects'
import About from './components/about/About'
import TypingAnimation from './components/utils/animations/typing/TypingAnimation'

function App() {
  return (
    <>
      {/* Fixed Background */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Scrollable Content */}
      <div className="content">
        <Navbar />

        <div className='section'>
          <TypingAnimation />
        </div>

        <div id="projects">
          <Projects />
        </div>
        <div className="separator" />
        <div className="slanted-bg">
          <div id="about">
            <About />
          </div>
          <div id="contact">

          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;