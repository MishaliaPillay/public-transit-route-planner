import React, { useContext } from "react";
import { PurchaseContext } from "../Context/PurchseContext";

const Ticket = ({ route }) => {
  const { id, title, duration, stops, price } = route;
  const { addRoute, removeRoute, updateShop, shop } =
    useContext(PurchaseContext);

  const itemQuantity = shop[id] || 0;

  const handleRemove = () => {
    if (itemQuantity > 0) {
      updateShop(id, itemQuantity - 1);
    }
  };

  return (
    <div className="ticket">
      <h3>{title}</h3>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <p>
        <strong>Stops:</strong> {stops}
      </p>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <div className="quantity-controls">
        <button onClick={handleRemove}> - </button>
        <input
          type="text"
          value={itemQuantity}
          onChange={(e) => updateShop(id, Number(e.target.value))}
        />
        <button onClick={() => addRoute(id)}> + </button>
      </div>
    </div>
  );
};

export default Ticket;
