import React, { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();
  /*
 uses useNaviagte to open the confirmation page 
 it displays the Moon loader for 2 seconds
 after those 2 seocnds it loads the /confirtmation rouet in the url
 */
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/confirmation");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="Title">
      <MoonLoader color="#07001a" />
    </div>
  );
};

export default LoadingScreen;
