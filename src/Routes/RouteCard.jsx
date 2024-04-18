import React from 'react'
import { useParams } from 'react-router-dom';
import { routesInfo } from '../Data'
const RouteCard = () => {
  // Get the route ID from URL parameters
  const { routeId } = useParams();

  // Find the route with the matching ID
  const route = routesInfo.find(route => route.id === routeId);

  return (
    <div>
      <h2>Route Information</h2>
      {route ? (
        <div>
          <h3>{route.title}</h3>
          <p><strong>Duration:</strong> {route.duration}</p>
          <p><strong>Stops:</strong> {route.stops}</p>
          <p><strong>Price:</strong> ${route.price}</p>
          <p><strong>Description:</strong> {route.description}</p>
        </div>
      ) : (
        <p>Route not found</p>
      )}
      <button className='btn'>Back</button>
      <button className='btn'> Buy</button>
    </div>
  );
};

export default RouteCard
