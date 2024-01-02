import React from 'react'
import { ReactDOM } from 'react'
import Header from './Componenets/header/Header'
import Nav from './Componenets/nav/Nav'
import About from './Componenets/about/About'
import Experience from './Componenets/experience/Experience'
import Services from './Componenets/services/Service'
import Portfolio from './Componenets/portfolio/Portfolio'
import Testimonials from './Componenets/testimonials/Testimonials'
import Contact from './Componenets/contact/Contact'
import Footer from './Componenets/footer/Footer'

function App() {

  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App
