import React from 'react'
import Mainnav from './components/Navbar/Mainnav'
import { Route, Routes } from 'react-router'
import Home from './page/Home'
import Navbar from './page/Navbar'
import Footer from './page/Footer'
import Card from './page/Card'
import Form from './page/Form'
import Extra from './page/Extra'
import Carousel from './page/Carousel'
import Hero from './page/Hero'

function App() {
  return (
    <div>
      <Mainnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/form" element={<Form />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/hero" element={<Hero />} />

        <Route path="/card" element={<Card />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/footer" element={<Footer />} />


      </Routes>
    </div>
  )
}

export default App