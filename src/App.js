import React from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contactme from './components/Contactme'



const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience />
      <Contactme/>
    </div>
  )
}

export default App
