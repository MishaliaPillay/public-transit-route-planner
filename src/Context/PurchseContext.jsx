import React, { useState, createContext } from "react";
import { routesInfo } from "../Data";

export const PurchaseContext = createContext();

function defaultShop() {
  let shop = {};
  for (let i = 1; i < routesInfo.length + 1; i++) {
    shop[i] = 0;
  }
  return shop;
}

function PurchaseContextProvider(props) {
  const [shop, setShop] = useState(defaultShop());

  function addRoute(id) {
    console.log(shop[id]);
    setShop({ ...shop, [id]: shop[id] + 1 });
  }

  function removeRoute(id) {
    setShop({ ...shop, [id]: 0 }); // Set the quantity of the route to 0 to remove it
  }

  function updateShop(id, amount) {
    setShop({ ...shop, [id]: amount });
  }

  function getTotal() {
    let total = 0;
    for (const item in shop) {
      if (shop[item] > 0) {
        let routeInfo = routesInfo.find((route) => route.id === Number(item));
        total = total + routeInfo.price * shop[item];
      }
    }
    return total;
  }

  function checkout() {
    setShop(defaultShop());
  }

  const contextValues = {
    addRoute,
    removeRoute,
    updateShop,
    getTotal,
    checkout,
    shop,
  };

  return (
    <PurchaseContext.Provider value={contextValues}>
      {props.children}
    </PurchaseContext.Provider>
  );
}

export default PurchaseContextProvider;
