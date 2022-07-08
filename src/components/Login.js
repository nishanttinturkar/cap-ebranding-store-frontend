import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginModel from "../model/LoginModel";
import UserService from "../service/UserService";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, selectHome } from "../redux/common/CommonActions";

function Login() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const navSelector = useSelector((state) => state.navSelector);
  let service = new UserService();
  const [state, setState] = useState({ loginCred: new LoginModel() });
  return (
    <form>
      <div>
        <label>Office Email Address</label>
        <input
          className="form-control"
          type="text"
          placeholder="jhon.deo@capgemini.com"
          value={state.loginCred.email}
          onChange={(e) => {
            setState({
              loginCred: {
                ...state.loginCred,
                emailId: e.target.value,
              },
            });
          }}
        />
        <br />
        <label>Enter Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="********"
          id="pass"
          value={state.loginCred.password}
          onChange={(e) => {
            setState({
              loginCred: {
                ...state.loginCred,
                password: e.target.value,
              },
            });

            console.log(state.loginCred.password);
          }}
        />
        <br />
        <button
          className="btn primary-btn"
          onClick={(e) => {
            e.preventDefault();
            service
              .validateUser(state.loginCred)
              .then((result) => {
                alert("User Logged in successfully!!");
                localStorage.setItem("userID", JSON.stringify(result.data.id));
                localStorage.setItem("login", true);
                var stored = localStorage.getItem("userID");
                console.log(stored);
                dispatch(selectHome());
                console.log(navSelector.login);
                navigate("/home");
              })
              .catch((error2) => {
                alert(error2);
              });
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
