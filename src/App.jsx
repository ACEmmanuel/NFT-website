import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./navbar.jsx"
import Hero from "./hero.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"
import Test from "./test.jsx"

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Card />
      <Footer />

    {/* <Test /> */}
    </>
  )
}

export default App
