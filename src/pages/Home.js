import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const container = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      animationData: require("../assets/online-shopping.json"),
    });
  }, []);
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Cap eBranding Store</h1>
            <button
              className="banner-button"
              onClick={(e) => {
                e.preventDefault();
                navigate("/product");
              }}
            >
              View All Products
            </button>
          </div>
          <div className="col">
            <div className="banner-svg" ref={container}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
