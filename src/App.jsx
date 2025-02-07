import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <div>
          <Navbar/>
        </div>
        <div className="content-test">
          <p>TEST</p>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App