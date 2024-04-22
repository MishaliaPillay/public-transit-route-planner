import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PurchaseContext } from "../../Context/PurchseContext";
import { routesInfo } from "../../Data";
import { ArrowLeft, Coins } from "@phosphor-icons/react";
const RouteCard = () => {
  const { id } = useParams();
  const { addRoute, shop } = useContext(PurchaseContext);

  const route = routesInfo.find((route) => route.id === parseInt(id)); // used to find a specfic route id form routesInfo in the data
  const itemQuantity = shop[id] || 0; // Get the item quantity from the shop context
  const navigate = useNavigate();

  //using addRoute From purchaseContext and relating this to the id of the respective route
  const handleBuy = () => {
    addRoute(id);
  };
  //using the useNavigate Hook so that when this function is triggered takes user to "/" in url
  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <h2 className="TicketTitle">Route Information</h2>
      {route ? (
        <div className="itemInfo">
          <h3>{route.title}</h3>
          <p>
            <span>Duration:</span> {route.duration}
          </p>
          <p>
            <span>Stops:</span> {route.stops}
          </p>
          <p>
            <span>Price:</span> ${route.price}
          </p>
          <p>
            <span>Description:</span> {route.description}
          </p>
          <button className="btn" onClick={handleBuy}>
            <Coins size={24} />
            Buy {itemQuantity > 0 && `(${itemQuantity})`}
          </button>
        </div>
      ) : (
        <p className="errorTxt">Route not found</p>
      )}
      <button className="btnBack" onClick={back}>
        <ArrowLeft size={24} />
        Back
      </button>
    </div>
  );
};

export default RouteCard;
