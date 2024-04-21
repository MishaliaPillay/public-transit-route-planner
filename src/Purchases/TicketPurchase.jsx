import React, { useContext } from "react";
import Ticket from "./Ticket";
import { PurchaseContext } from "../Context/PurchseContext"; // Assuming you've renamed it to PurchaseContext
import { routesInfo } from "../Data";
import "./ticketPurchase.css";
const TicketPurchase = () => {
  const { shop, getTotal, checkout } = useContext(PurchaseContext);

  const handleCheckout = () => {
    checkout();
    alert("Thank you for your purchase!");
  };

  const totalAmount = getTotal();

  return (
    <div>
      <h1>Your Purchased Tickets</h1>
      {Object.keys(shop).map((id) => {
        const quantity = shop[id];
        if (quantity > 0) {
          const route = routesInfo.find((route) => route.id === parseInt(id));
          return <Ticket key={id} route={route} quantity={quantity} />;
        }
        return null;
      })}
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button className="btn" onClick={handleCheckout}>
            Checkout
          </button>
          <button className="btn">Continue Shopping</button>
        </div>
      ) : (
        <div className="checkout">
          <h4>Your Cart is Empty.</h4>
          <button className="btn">Continue shopping</button>
        </div>
      )}
    </div>
  );
};

export default TicketPurchase;
