import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AvailableRoutes from "./Pages/Routes/AvailableRoutes";
import TicketPurchase from "./Pages/Purchases/TicketPurchase";
import RouteCard from "./Pages/Routes/RouteCard";
import PurchaseContextProvider from "./Context/PurchseContext";
import Confirmation from "./Pages/Confirmation/Confirmation";
import LoadingScreen from "./Pages/Loading/LoadingScreen";

function App() {
  return (
    <div className="App">
      <PurchaseContextProvider>
        <BrowserRouter basename="/public-transit-route-planner">
          <Navbar />
          <Routes>
            <Route path="/" element={<AvailableRoutes />} />
            <Route path="/ticketpurchase" element={<TicketPurchase />} />
            <Route path="/route/:id" element={<RouteCard />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/loading" element={<LoadingScreen />} />
          </Routes>
        </BrowserRouter>
      </PurchaseContextProvider>
    </div>
  );
}

export default App;
