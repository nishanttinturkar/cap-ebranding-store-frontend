import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import User from "../model/User";
import UserService from "../service/UserService";

function AddUser() {
  const navigate = useNavigate();
  let service = new UserService();
  const [state, setState] = useState({ user: new User() });
  return (
    <div className="container">
      <form>
        <div>
          <h2>Create User</h2>
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
            </div>
          </div>
          <br />
          <label>Office Email Address</label>
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
          <br />
          <div className="row">
            <label className="col-sm-2">Gender:</label>
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
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label>Create Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                id="newPass"
              ></input>
            </div>
            <div className="col">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                id="cnfPass"
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
            </div>
          </div>
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              service
                .addUser(state.user)
                .then((result) => {
                  alert("User added into db.");
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
    </div>
  );
}

export default AddUser;
