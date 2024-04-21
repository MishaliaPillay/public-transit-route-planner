import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AvailableRoutes from "./Routes/AvailableRoutes";
import TicketPurchase from "./Purchases/TicketPurchase";
import RouteCard from "./Routes/RouteCard";
import PurchaseContextProvider from "./Context/PurchseContext";

function App() {
  return (
    <div className="App">
      <PurchaseContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<AvailableRoutes />} />
            <Route path="/ticketpurchase" element={<TicketPurchase />} />
            <Route path="/route/:id" element={<RouteCard />} />
          </Routes>
        </BrowserRouter>
      </PurchaseContextProvider>
    </div>
  );
}

export default App;
