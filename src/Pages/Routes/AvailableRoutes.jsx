import React from "react";
import { Link } from "react-router-dom";
import { routesInfo } from "../../Data";
import "./availableRoutes.css";
const AvailableRoutesPage = () => {
  return (
    <div>
      <h2>Available Routes</h2>
      <ul>
        {routesInfo.map((route) => (
          <li key={route.id}>
            {/* Use Link to navigate to Route Information page */}
            <Link to={`/route/${route.id}`}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableRoutesPage;
