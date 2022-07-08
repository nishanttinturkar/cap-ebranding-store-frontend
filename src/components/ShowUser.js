import React, { useEffect } from "react";
import User from "../model/User";
import UserService from "../service/UserService";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/User/UserActions";

const ShowUser = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div>
        {users.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>User Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usr) => (
                <tr key={usr.id}>
                  <td>{usr.id}</td>
                  <td>{usr.firstName}</td>
                  <td>{usr.lastName}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.phone}</td>
                  <td>{usr.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No User Found</div>
        )}
      </div>
    </div>
  );
};

export default ShowUser;
