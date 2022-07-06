import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginModel from "../model/LoginModel";
import UserService from "../service/UserService";

function Login() {
  const navigate = useNavigate();
  let service = new UserService();
  const [state, setState] = useState({ loginCred: new LoginModel() });
  return (
    <form>
      <div>
        <h2>Login</h2>
        <br />
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
          className="btn btn-outline-primary mt-3"
          onClick={(e) => {
            e.preventDefault();
            service
              .validateUser(state.loginCred)
              .then((result) => {
                alert("User Logged in successfully!!");
                navigate("/users");
              })
              .catch((error2) => {
                alert(error2);
              });
          }}
        >
          Add User
        </button>
      </div>
    </form>
  );
}

export default Login;
