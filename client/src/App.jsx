import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
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
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:id" element={<MoviePage/>}/>
      <Route path="/movies/:id/:date" element={<SeatLayout/>}/>
      <Route path="/my-bookings" element={<Mybookings/>}/>
      <Route path="/favourite" element={<Favourite/>}/>
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
