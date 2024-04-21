import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PurchaseContext } from "../../Context/PurchseContext";
import { routesInfo } from "../../Data";
import { Coins } from "@phosphor-icons/react";
const RouteCard = () => {
  const { id } = useParams();
  const { addRoute, shop } = useContext(PurchaseContext);

  const route = routesInfo.find((route) => route.id === parseInt(id));
  const itemQuantity = shop[id] || 0; // Get the item quantity from the shop context

  const handleBuy = () => {
    addRoute(id);
  };

  return (
    <div>
      <h2>Route Information</h2>
      {route ? (
        <div>
          <h3>{route.title}</h3>
          <p>
            <strong>Duration:</strong> {route.duration}
          </p>
          <p>
            <strong>Stops:</strong> {route.stops}
          </p>
          <p>
            <strong>Price:</strong> ${route.price}
          </p>
          <p>
            <strong>Description:</strong> {route.description}
          </p>
        </div>
      ) : (
        <p>Route not found</p>
      )}
      <button className="btn" onClick={handleBuy}>
        <Coins size={24} />
        Buy {itemQuantity > 0 && `(${itemQuantity})`}
      </button>
    </div>
  );
};

export default RouteCard;
