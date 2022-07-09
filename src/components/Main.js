import React from "react";
import axios from "axios";
import Category from "../model/Category";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      category: new Category(),
      categories: [],
    };
  } //jest test unit(test the service layer)
  componentDidMount() {
    axios
      .get(`http://localhost:8091/store/category`) //getmapping
      .then((result) => {
        alert(JSON.stringify(result));
        this.setState({ categories: result.data });
      })
      .catch((error) => {
        alert(error);
      });
    // alert("hi") //executed asyn
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2>
          <span className="badge badge-primary">Category Form</span>
        </h2>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="userID"
              value={this.state.user.userId}
              onChange={(e) => {
                this.setState({
                  user: { ...this.state.user, id: e.target.value },
                });
              }}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="firstName"
              value={this.state.user.userName}
              onChange={(e) =>
                this.setState({
                  user: { ...this.state.user, firstName: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="lastName"
              value={this.state.user.userName}
              onChange={(e) =>
                this.setState({
                  user: { ...this.state.user, lastName: e.target.value },
                })
              }
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="userSalary"
              value={this.state.user.userSalary}
              onChange={(e) =>
                this.setState({
                  user: { ...this.state.user, userSalary: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="departmentID"
              value={this.state.user.department.id}
              onChange={(e) =>
                this.setState({
                  user: {
                    ...this.state.user,
                    department: {
                      ...this.state.user.department,
                      id: e.target.value,
                    },
                  },
                })
              }
            />
          </div>

          <button
            className="btn btn-outline-primary"
            onClick={(e) => {
              e.preventDefault();
              alert(JSON.stringify(this.state.user));
              axios
                .post(`http://localhost:8091/store/user`, this.state.user)
                .then((result) => {
                  alert(result.data);
                })
                .catch((error) => {
                  alert(error);
                });
              axios
                .get(`http://localhost:8091/store/user/12`)
                .then((result) => {
                  this.setState({ users: result.data });
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          >
            Add User
          </button>
        </form>

        <div>
          {this.state.users.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>User Name</th>
                  <th>User Salary</th>
                  <th>Department ID</th>
                  <th>Department Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((e) => (
                  <tr>
                    <td>{e.userId}</td>
                    <td>{e.userName}</td>
                    <td>{e.userSalary}</td>
                    <td>{e.department.id}</td>
                    <td>{e.department.name}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e2) => {
                          e2.preventDefault();
                          alert(JSON.stringify(this.state.user));
                          axios
                            .post(
                              `http://localhost:8089/UserManagement/rest/users/`,
                              this.state.user
                            )
                            .then((result) => {
                              alert(result.data);
                            })
                            .catch((error) => {
                              alert(error);
                            });
                          axios
                            .get(
                              `http://localhost:8089/UserManagement/rest/users/`
                            )
                            .then((result) => {
                              //alert(JSON.stringify(result));
                              this.setState({ users: result.data });
                            })
                            .catch((error) => {
                              alert(error);
                            });
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No User Present</div>
          )}
        </div>
      </div>
    );
  }
}
export default Main;
