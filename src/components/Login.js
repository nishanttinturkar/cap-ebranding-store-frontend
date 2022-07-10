import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginModel from "../model/LoginModel";
import UserService from "../service/UserService";
import RoleService from "../service/RoleService";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, selectHome } from "../redux/common/CommonActions";
import { validateUser } from "../redux/User/UserActions";
function Login() {
  let dispatch = useDispatch();
  const userRedux = useSelector((state) => state.users);
  const navigate = useNavigate();
  const navSelector = useSelector((state) => state.navSelector);
  let service = new UserService();
  let rService = new RoleService();
  const [state, setState] = useState({ loginCred: new LoginModel() });
  console.log("Form Login" + userRedux.login);
  return (
    <form>
      <div>
        <label>Email Address</label>
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
            dispatch(validateUser(state.loginCred));
            if (userRedux.login == true) {
              navigate("/home");
              dispatch(selectHome());
            }
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
