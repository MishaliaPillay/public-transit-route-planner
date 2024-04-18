import React from 'react'

import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AvailableRoutes from './Routes/AvailableRoutes'
import TicketPurchase from './Purchases/TicketPurchase'
import RouteCard from './Routes/RouteCard'



function App() {
  return (
    <div className='App'>
    <BrowserRouter>

   <Navbar/>
    <Routes>
    <Route path='/' element={ <AvailableRoutes/>}/>
      <Route path='/ticketpurchase' element={<TicketPurchase/>}/>
  <Route path='/route/:routeId' element={<RouteCard/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
