import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/User/UserActions";

const ManageUsers = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container">
      <div>
        <h3>Manage Users</h3>
        <div className="row">
          {/* <div className="col-4">
            <div className="action-card-1">
              <p>Find User By ID</p>
              <div className="find-user-container">
                <form className="d-flex " role="search">
                  <input
                    className="form-control me-2 find-field"
                    type="search"
                    placeholder="User ID"
                    aria-label="Search"
                  />
                  <button className="btn primary-btn" type="submit">
                    Find
                  </button>
                </form>
              </div>
            </div>
          </div> */}

          <div className="action-card-1">
            <p>Users List</p>
            <div className="row">
              {users.map((usr) => (
                <div className="action-card-1 row">
                  <div className="col">
                    <p>
                      {usr.firstName} {usr.lastName}
                    </p>
                    <p>Gender: {usr.gender}</p>
                    <p>Email: {usr.email}</p>
                    <p>Mobile: {usr.phone}</p>
                  </div>
                  <div className="col-4 action-button-container">
                    <button>Make Admin</button>
                    <br />
                    <button>Make Vendor</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
