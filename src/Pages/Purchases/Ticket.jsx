import React, { useContext } from "react";
import { PurchaseContext } from "../../Context/PurchseContext";
import { Trash, PlusSquare, MinusSquare } from "@phosphor-icons/react";
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
  const deleteItem = () => {
    removeRoute(id);
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
        {" "}
        <button onClick={deleteItem}>
          <Trash size={32} />
        </button>
        <button onClick={handleRemove}>
          <MinusSquare size={32} />{" "}
        </button>
        <input
          type="text"
          value={itemQuantity}
          onChange={(e) => updateShop(id, Number(e.target.value))}
        />
        <button onClick={() => addRoute(id)}>
          <PlusSquare size={32} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Ticket;
