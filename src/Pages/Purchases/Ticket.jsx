import React, { useContext } from "react";
import { PurchaseContext } from "../../Context/PurchseContext";
import { Trash, PlusSquare, MinusSquare } from "@phosphor-icons/react";
const Ticket = ({ route }) => {
  const { id, title, duration, stops, price } = route;
  const { addRoute, removeRoute, updateShop, shop } =
    useContext(PurchaseContext);

  const itemQuantity = shop[id] || 0; // It provides the default value of the itemquantity, this is the value that shows in the input box

  // This  functions checks ifthe quanity is greater than 1 before decreasing the the quantity, and then udpates the new value of the quantity
  const handleRemove = () => {
    if (itemQuantity > 0) {
      updateShop(id, itemQuantity - 1);
    }
  };

  //Removes specific route id from users cart
  const deleteItem = () => {
    removeRoute(id);
  };

  return (
    <div className="item">
      <h3 className="itemTitle">{title}</h3>
      <p>
        <span>Duration:</span> {duration}
      </p>
      <p>
        <span>Stops:</span> {stops}
      </p>
      <p>
        <span>Price:</span> ${price}
      </p>
      <div className="quantity-controls">
        <section className="inputControl">
          <button onClick={handleRemove}>
            <MinusSquare size={32} />{" "}
          </button>

          {/*Checks if the quantity of input has chnaged then updates it*/}
          <input
            type="text"
            value={itemQuantity}
            onChange={(e) => updateShop(id, Number(e.target.value))}
          />
          <button onClick={() => addRoute(id)}>
            <PlusSquare size={32} />{" "}
          </button>
        </section>
        <section className="deleteItem">
          <button onClick={deleteItem}>
            <Trash size={32} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Ticket;
