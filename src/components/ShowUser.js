import React, { Component } from "react";
import User from "../model/User";
import UserService from "../service/UserService";

class ShowUser extends Component {
  constructor() {
    super();

    this.state = {
      user: new User(),
      users: [],
    };

    this.userService = new UserService();
  }

  componentDidMount() {
    this.userService
      .getAllUsers()
      .then((result) => {
        alert(JSON.stringify(result));
        this.setState({ users: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.users.length > 0 ? (
            <table className="table table-bordered">
              <tr>
                <th>User Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Created At</th>
              </tr>
              <tbody>
                {this.state.users.map((usr) => (
                  <tr>
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
  }
}

export default ShowUser;
