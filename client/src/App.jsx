import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import home from './pages/home'
import movieDetails from './pages/movieDetails'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import Mybookings from './pages/Mybookings'
import Favourite from './pages/Favourite'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  const isAdminRoute=useLocation().pathname.startsWith('/admin');
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path="/" element={<home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies:id" element={<movieDetails/>}/>
      <Route path="/movies:id:date" element={<SeatLayout/>}/>
      <Route path="/my-bookings" element={<Mybookings/>}/>
      <Route path="/favourite" element={<Favourite/>}/>
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
