import React, { useEffect } from "react";
import { getUserById } from "../redux/User/UserActions";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  let userId = localStorage.getItem("userID");
  const { user } = useSelector((state) => state.users);
  let dispatch = useDispatch();

  console.log(userId);
  useEffect(() => {
    dispatch(getUserById(userId));
  }, []);

  return (
    <div className="container">
      <h3>View Profile</h3>
      <div className="profile-container">
        <div>
          <h4>Profile Details</h4>
          <div className="row">
            <p className="col">Name</p>
            <p className="col-1">:</p>
            <p className="col">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div className="row">
            <p className="col">Email</p>
            <p className="col-1">:</p>
            <p className="col">{user.email}</p>
          </div>
          <div className="row">
            <p className="col">Phone</p>
            <p className="col-1">:</p>
            <p className="col">{user.phone}</p>
          </div>
          <div className="row">
            <p className="col">Role</p>
            <p className="col-1">:</p>
            <p className="col">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
