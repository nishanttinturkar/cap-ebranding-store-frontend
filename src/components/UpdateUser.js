import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import User from "../model/User";
import Role from "../model/Role";
import UserService from "../service/UserService";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUserById } from "../redux/User/UserActions";
import { addRole } from "../redux/Roles/RoleActions";

function UpdateUser() {
  //const navigate = useNavigate();
  let service = new UserService();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  const [state, setState] = useState({ user: new User() });
  const [roleState, setRole] = useState({ userRole: new Role() });
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  useEffect(() => {
    console.log(user);
    if (user) {
      setState({ user: user });
    }
  }, [user]);

  const assignRole = (role1) => {
    let r = new Role(role1, user.id);
    if (window.confirm(`Are you sure to assign ${role1} role to ${user.id}?`))
      dispatch(addRole(r));
  };

  return (
    <div className="container">
      <h3>Update User</h3>
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
          <label>Office Email Updateress</label>
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
          </div>
          <br />
          <div className="row">
            <div className="col" style={{ textAlign: "center" }}>
              {user.role == "admin" ? (
                <p>Role: Admin</p>
              ) : (
                <button
                  className="action-button"
                  onClick={(e) => {
                    e.preventDefault();
                    assignRole("admin");
                  }}
                >
                  Make Admin
                </button>
              )}
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              {user.role == "admin" ? (
                <p></p>
              ) : user.role == "vendor" ? (
                <p>Role: Vendor</p>
              ) : (
                <button
                  className="action-button"
                  onClick={(e) => {
                    e.preventDefault();
                    assignRole("vendor");
                  }}
                >
                  Make Vendor
                </button>
              )}
            </div>
          </div>
          <br />

          <button
            className="btn primary-btn mt-3"
            onClick={(e) => {
              e.preventDefault();
              dispatch(updateUser(state.user));
              navigate("/admin/manage-users");
            }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
