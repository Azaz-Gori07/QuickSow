import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/HomePage/Home"
import Movies from "./Pages/Moviess/Movies.jsx"
import MovieDetails from "./Pages/MovieDetails/MovieDetails"
import SeatLayout from "./Pages/SeatLayout/SeatLayout"
import MyBookings from "./Pages/MyBookings/MyBookings"
import Favorite from "./Pages/Favorite/Favorite"
import {Toaster} from 'react-hot-toast'
import Footer from "./Components/Footer/Footer"


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
    <Toaster/>
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetails/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/favorite' element={<Favorite/>} />
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
