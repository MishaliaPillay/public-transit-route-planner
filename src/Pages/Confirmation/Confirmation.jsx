import React from "react"; // Import useState for state management
import Confetti from "react-confetti";
import { Cheers } from "@phosphor-icons/react";
import "./confirmation.css";
const Confirmation = () => {
  return (
    <>
      <h4 className="successTxt">
        Payment succesful!! <Cheers size={32} />
      </h4>
      {/*This loads confetti to fall when this lage is opened*/}
      <Confetti
        count={500}
        colors={["#52006A", "#CD113B", "#FF7600", "#FFA900"]}
        recycle={false}
      />
    </>
  );
};

export default Confirmation;
