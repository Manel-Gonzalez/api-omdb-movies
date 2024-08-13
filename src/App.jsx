import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchBar from './components/searchBar'
import Movie from './components/movieDetails'
import Home from './Home'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Movie />} />  
    </Routes>

  )
}

export default App
