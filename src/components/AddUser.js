import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import User from "../model/User";
import UserService from "../service/UserService";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/User/UserActions";

function AddUser() {
  //const navigate = useNavigate();
  let service = new UserService();
  let dispatch = useDispatch();
  const [state, setState] = useState({ user: new User() });
  const [userFnameErr, setUserFnameErr] = useState("");
  const [userLnameErr, setUserLnameErr] = useState("");
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPhoneErr, setUserPhoneErr] = useState("");
  const [userGenderErr, setUserGenderErr] = useState("");
  const [userPass2Err, setUserPass2Err] = useState("");

  const formValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let isValid = true;
    const userFnameErr = {};
    const userLnameErr = {};
    const userEmailErr = {};
    const userPhoneErr = {};
    const userGenderErr = {};
    const userPass2Err = {};

    if (state.user.firstName.trim().length <= 2) {
      userFnameErr.userFnameRequired = "User First Name cannot be too short.";
      isValid = false;
    }
    if (state.user.lastName.trim().length <= 2) {
      userLnameErr.userLnameRequired = "User Last Name cannot be too short.";
      isValid = false;
    }
    if (
      state.user.email.trim().length <= 0 ||
      regex.test(state.user.email) === false
    ) {
      userEmailErr.userEmailRequired = "Please enter valid email id.";
      isValid = false;
    }
    if (
      state.user.phone.trim().length <= 9 ||
      state.user.phone.trim().length >= 11
    ) {
      userPhoneErr.userPhoneRequired = "Please Enter valid phone no.";
      isValid = false;
    }
    if (state.user.gender.trim().length <= 0) {
      userGenderErr.userGenderRequired = "Please select Gender";
      isValid = false;
    }
    if (state.user.password.trim().length <= 0) {
      userPass2Err.userPasswordRequired = "Enter Password";
      isValid = false;
    }

    setUserFnameErr(userFnameErr);
    setUserLnameErr(userLnameErr);
    setUserEmailErr(userEmailErr);
    setUserPhoneErr(userPhoneErr);
    setUserGenderErr(userGenderErr);
    setUserPass2Err(userPass2Err);
    return isValid;
  };

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      dispatch(addUser(state.user));
    }
  }

  return (
    <div className="container">
      <form>
        <div>
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Jhon"
                value={state.user.firstName}
                onChange={(e) => {
                  setState({
                    user: {
                      ...state.user,
                      firstName: e.target.value,
                    },
                  });
                }}
              />
              {Object.keys(userFnameErr).map((key) => {
                return <div style={{ color: "red" }}>{userFnameErr[key]}</div>;
              })}
            </div>
            <div className="col">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Deo"
                value={state.user.lastName}
                onChange={(e) => {
                  setState({
                    user: {
                      ...state.user,
                      lastName: e.target.value,
                    },
                  });
                }}
              />
              {Object.keys(userLnameErr).map((key) => {
                return <div style={{ color: "red" }}>{userLnameErr[key]}</div>;
              })}
            </div>
          </div>
          <br />
          <label>Email Address</label>

          <input
            className="form-control"
            type="text"
            placeholder="jhon.deo@capgemini.com"
            value={state.user.email}
            onChange={(e) => {
              setState({
                user: {
                  ...state.user,
                  email: e.target.value,
                },
              });
            }}
          />
          {Object.keys(userEmailErr).map((key) => {
            return <div style={{ color: "red" }}>{userEmailErr[key]}</div>;
          })}
          <br />
          <label>Phone</label>
          <input
            className="form-control"
            type="number"
            maxLength={10}
            placeholder="9876543210"
            value={state.user.phone}
            onChange={(e) => {
              setState({
                user: {
                  ...state.user,
                  phone: e.target.value,
                },
              });
            }}
          />
          {Object.keys(userPhoneErr).map((key) => {
            return <div style={{ color: "red" }}>{userPhoneErr[key]}</div>;
          })}
          <br />
          <div className="row">
            <label className="col">Gender:</label>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => {
                  setState({
                    user: {
                      ...state.user,
                      gender: e.target.value,
                    },
                  });
                }}
              />

              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => {
                  setState({
                    user: {
                      ...state.user,
                      gender: e.target.value,
                    },
                  });
                }}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={(e) => {
                  setState({
                    user: {
                      ...state.user,
                      gender: e.target.value,
                    },
                  });
                }}
              />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
            {Object.keys(userGenderErr).map((key) => {
              return <div style={{ color: "red" }}>{userGenderErr[key]}</div>;
            })}
          </div>
          <br />
          <div className="row">
            {/* <div className="col">
              <label>Create Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                id="newPass"
              ></input>
              {Object.keys(userPass1Err).map((key) => {
                return <div style={{ color: "red" }}>{userPass1Err[key]}</div>;
              })}
            </div> */}
            <div className="col">
              <label>Create Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                id="pass"
                value={state.user.password}
                onChange={(e) => {
                  setState({
                    user: {
                      ...state.user,
                      password: e.target.value,
                    },
                  });

                  console.log(state.user.password);
                }}
              ></input>
              {Object.keys(userPass2Err).map((key) => {
                return <div style={{ color: "red" }}>{userPass2Err[key]}</div>;
              })}
            </div>
          </div>
          <button className="btn primary-btn mt-3" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
