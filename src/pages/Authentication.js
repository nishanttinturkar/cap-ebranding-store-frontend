import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import Header from "../components/Header";
import Login from "../components/Login";
import AddUser from "../components/AddUser";

const Authentication = () => {
  const [isLoginClicked, setLogin] = useState(true);
  const [isRegisterClicked, setRegister] = useState(false);

  const activeLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  const activeRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      autoplay: true,
      animationData: require("../assets/online-shopping1.json"),
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="" ref={container}></div>
        </div>
        <div className="col">
          <div className="auth-heading">
            <h2>
              Welcome to <span>Cap eBranding Store</span>
            </h2>
          </div>
          <div className="auth-container">
            <div className="auth-button-container">
              <button
                className={
                  isLoginClicked ? "login-tab active-btn" : "login-tab"
                }
                onClick={activeLogin}
              >
                Login
              </button>

              <button
                className={
                  isRegisterClicked ? "register-tab active-btn" : "register-tab"
                }
                onClick={activeRegister}
              >
                Register
              </button>
            </div>
            <div className="auth-form-container">
              {isLoginClicked ? <Login /> : <AddUser />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
