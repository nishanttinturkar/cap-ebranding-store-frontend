import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";

function OrderPlaced() {
  const container = useRef(null);
  let navigate = useNavigate();
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      animationData: require("../assets/order-placed.json"),
    });
  }, []);
  return (
    <div className="container">
      <div className="placed">
        <div className="animation-container">
          <div className="" ref={container}></div>
        </div>
        <h2>Congratulations</h2>
        <h3>Your order has been placed</h3>
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            e.preventDefault();
            navigate("/orders");
          }}
        >
          View Orders
        </button>
      </div>
    </div>
  );
}

export default OrderPlaced;
