import React, { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/confirmation");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <MoonLoader color="#07001a" />
    </div>
  );
};

export default LoadingScreen;
