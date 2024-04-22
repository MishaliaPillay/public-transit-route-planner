import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartSimple, Bus } from "@phosphor-icons/react";

import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const navigateToAvailableRoutes = () => {
    navigate("/"); // Navigate to the specified route
  };

  const navigateToTicketPurchase = () => {
    navigate("/ticketpurchase"); // Navigate to the specified route
  };

  return (
    <div className="navbar">
      <h1 className="navtitle" onClick={navigateToAvailableRoutes}>
        Transit Route Planner
      </h1>
      <div className="links">
        <button onClick={navigateToAvailableRoutes}>
          <Bus size={32} />
        </button>
        <button onClick={navigateToTicketPurchase}>
          <ShoppingCartSimple size={32} />
        </button>
      </div>
    </div>
  );
}
