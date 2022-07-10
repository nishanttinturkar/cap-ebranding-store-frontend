import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/User/UserActions";
import { useNavigate } from "react-router";

const ManageUsers = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };

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

          <div>
            <p>Users List</p>
            <div className="row">
              {users.map((usr) => (
                <div className="card col-6">
                  <div className="card-body row">
                    <div className="col">
                      <p>
                        {usr.firstName} {usr.lastName}
                      </p>
                      <p>Gender: {usr.gender}</p>
                      <p>Email: {usr.email}</p>
                      <p>Mobile: {usr.phone}</p>
                    </div>
                    <div className="col-4 action-button-container">
                      {/* {usr.role == "admin" ? (
                        <p>Role: Admin</p>
                      ) : (
                        <button>Make Admin</button>
                      )}
                      <br />
                      {usr.role == "vendor" ? (
                        <p>Role: Vendor</p>
                      ) : (
                        <button>Make Vendor</button>
                      )}
                      <br /> */}

                      <button onClick={() => handleDelete(usr.id)}>
                        Delete User
                      </button>
                      <button
                        onClick={() => navigate(`/admin/update-user/${usr.id}`)}
                      >
                        Update User
                      </button>
                    </div>
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
