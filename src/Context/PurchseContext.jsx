import React, { useState, createContext } from "react";
import { routesInfo } from "../Data";

export const PurchaseContext = createContext();

//Generates the initial state of the shop, by making an empty object where route IDs  and their values and 0
function defaultShop() {
  let shop = {};
  for (let i = 1; i < routesInfo.length + 1; i++) {
    shop[i] = 0;
  }
  return shop;
}

function PurchaseContextProvider(props) {
  const [shop, setShop] = useState(defaultShop());

  //this function add one unit of the item to the shop
  function addRoute(id) {
    console.log(shop[id]);
    setShop({ ...shop, [id]: shop[id] + 1 });
  }

  function removeRoute(id) {
    setShop({ ...shop, [id]: 0 }); // Set the quantity of the route to 0 to remove it
  }
  // dynamically updates the shop when changes occur
  function updateShop(id, amount) {
    setShop({ ...shop, [id]: amount });
  }

  /*Function to calculate the total cost of all routes in the shopping cart
 Initialize total cost variable
 Iterate through each item in the shopping cart
 Check if the quantity of the route is greater than 0 (selected)
*/
  function getTotal() {
    let total = 0;

    for (const item in shop) {
      if (shop[item] > 0) {
        // Find the route information corresponding to the current item ID
        let routeInfo = routesInfo.find((route) => route.id === Number(item));

        // Calculate the subtotal for the selected route and add it to the total cost
        total = total + routeInfo.price * shop[item];
      }
    }

    // Return the total cost
    return total;
  }
  // Function to clear the shopping cart context after checkout
  function checkout() {
    // Reset the shopping cart to its default state
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
