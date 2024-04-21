import React from "react"; // Import useState for state management
import Confetti from "react-confetti";

const Confirmation = () => {
  return (
    <div>
      <h4>Payment succesful!!</h4>
      <Confetti
        count={1000}
        colors={["#52006A", "#CD113B", "#FF7600", "#FFA900"]}
        recycle={false}
      />
    </div>
  );
};

export default Confirmation;
