import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { routesInfo } from "../../Data";
import "./availableRoutes.css";

const AvailableRoutesPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (id) => {
    navigate(`/route/${id}`); // Navigate to the specified route
  };

  return (
    <div>
      <h2 className="availableTitle">Available Routes</h2>
      <ul>
        {routesInfo.map((route) => (
          <section className="ticket" key={route.id}>
            <li
              className="ticket-content-wrapper"
              onClick={() => handleClick(route.id)}
            >
              {/* Remove Link and use onClick event handler */}
              <span className="link">{route.title}</span>
            </li>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default AvailableRoutesPage;
