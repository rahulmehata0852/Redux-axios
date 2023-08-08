import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dasboard from './pages/Dasboard'
import Navbar from './copontents/Navbar'
import Details from './pages/Details'

const App = () => {
  return <>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dasboard />} />
        <Route path='/detail/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App