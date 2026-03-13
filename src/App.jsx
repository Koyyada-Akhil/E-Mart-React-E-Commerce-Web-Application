import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import WatchesPage from './stores/pages/WatchesPage'
import MobileSingle from './Singles/MobileSingle'
import UseCart from './stores/UseCart'
import ComputersPage from './stores/pages/ComputersPage'
import MenFasionPage from './stores/pages/MenFasionPage'
import AcPage from './stores/pages/AcPage'
import FurniturePge from './stores/pages/FurniturePge'
import KichenPage from './stores/pages/KichenPage'
import WomenPage from './stores/pages/WomenPage'
import BookPage from './stores/pages/BookPage'
import FridgePage from './stores/pages/FridgePage'
import SpeakersPage from './stores/pages/SpeakersPage'
import TvPage from './stores/pages/TvPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element={<MobilePage/>} />
        <Route path='/watches' element={<WatchesPage />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/cart'  element={<UseCart />} />
        <Route path='/computers' element={< ComputersPage/>} />
       <Route path='/ac' element={< AcPage/>} />
        <Route path='/menfasion' element={< MenFasionPage />} /> 
        <Route path='/furniture' element={<FurniturePge/>} />
        <Route path='/kichen' element={<KichenPage/>} />
        <Route path='/women' element={<WomenPage/>} />
        <Route path='/books' element={<BookPage/>} />
        <Route path='/fridge' element={<FridgePage/>} />
        <Route path='/speakers' element={<SpeakersPage/>} />
        <Route path='/tv' element={<TvPage/>} />
      </Routes>
     
    </div>
  )
}

export default App
