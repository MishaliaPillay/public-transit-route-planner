import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Ticket from "./Ticket";
import { PurchaseContext } from "../../Context/PurchseContext";
import { routesInfo } from "../../Data";
import "./ticketPurchase.css";
import { ShoppingBagOpen, CreditCard } from "@phosphor-icons/react";

const TicketPurchase = () => {
  const { shop, getTotal, checkout } = useContext(PurchaseContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    checkout();
    navigate("/loading"); // Navigate to the loading page
  };

  const continueShopping = () => {
    navigate("/"); // Navigate to the home page
  };

  const totalAmount = getTotal(); // use getTotal from PurchaseContext

  // Function to render the purchased tickets , it checks the id in the url and then checks the quantity of that item in the shop
  const renderPurchasedTickets = () => {
    return Object.keys(shop).map((id) => {
      const quantity = shop[id];
      if (quantity > 0) {
        const route = routesInfo.find((route) => route.id === parseInt(id));
        return <Ticket key={id} route={route} quantity={quantity} />;
      }
      return null;
    });
  };

  return (
    <div>
      <h1 className="TicketTitle">Your Purchased Tickets</h1>
      {renderPurchasedTickets()}
      {totalAmount > 0 ? (
        <div>
          <section className="total">
            <p>Total: ${totalAmount}</p>
          </section>
          <button className="btnChk" onClick={handleCheckout}>
            <CreditCard size={32} />
            Checkout
          </button>
          <button className="btnShop" onClick={continueShopping}>
            <ShoppingBagOpen size={32} />
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <h4 className="empty">Cart is Empty.</h4>
          <button className="btnShop2" onClick={continueShopping}>
            <ShoppingBagOpen size={32} />
            Continue shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketPurchase;
