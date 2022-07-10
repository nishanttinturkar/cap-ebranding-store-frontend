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
  const { error } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const navSelector = useSelector((state) => state.navSelector);
  let service = new UserService();
  let rService = new RoleService();
  const [state, setState] = useState({ loginCred: new LoginModel() });
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPass2Err, setUserPass2Err] = useState("");

  console.log("Form Login" + userRedux.login);
  const formValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let isValid = true;
    const userEmailErr = {};
    const userPass2Err = {};

    if (
      state.loginCred.emailId.trim().length <= 0 ||
      regex.test(state.loginCred.emailId) === false
    ) {
      userEmailErr.userEmailRequired = "Please enter valid email id.";
      isValid = false;
    }

    if (state.loginCred.password.trim().length <= 0) {
      userPass2Err.userPasswordRequired = "Enter Password";
      isValid = false;
    }

    setUserEmailErr(userEmailErr);
    setUserPass2Err(userPass2Err);
    return isValid;
  };

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
        {Object.keys(userEmailErr).map((key) => {
          return <div style={{ color: "red" }}>{userEmailErr[key]}</div>;
        })}
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
        {Object.keys(userPass2Err).map((key) => {
          return <div style={{ color: "red" }}>{userPass2Err[key]}</div>;
        })}
        <div style={{ color: "red" }}>{error.message}</div>
        <br />

        <button
          className="btn primary-btn"
          onClick={(e) => {
            e.preventDefault();
            let isValid = formValidation();
            if (!isValid) {
              return false;
            } else {
              dispatch(validateUser(state.loginCred));
              if (userRedux.login == true) {
                navigate("/home");
                dispatch(selectHome());
              }
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
