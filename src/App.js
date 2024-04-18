import React from 'react'

import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AvailableRoutes from './Routes/AvailableRoutes'
import TicketPurchase from './Purchases/TicketPurchase'


function App() {
  return (
    <div className='App'>
    <BrowserRouter>

   <Navbar/>
    <Routes>
    <Route path='/' element={ <AvailableRoutes/>}/>
      <Route path='/ticketpurchase' element={<TicketPurchase/>}/>
  
    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
