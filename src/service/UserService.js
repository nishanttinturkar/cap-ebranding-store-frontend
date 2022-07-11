import axios from "axios";
var axios = require("axios");
class UserService {
  baseUrl = `http://localhost:8091/store/user`;

  getAllUsers() {
    var res = axios.get(this.baseUrl);
    console.log(res);
    return res;
  }

  addUser(user) {
    console.log("inside service" + JSON.stringify(user));
    return axios.post(this.baseUrl, user);
  }

  deleteUserById(userId) {
    return axios.delete(this.baseUrl + "/" + userId);
  }

  updateUser(user) {
    return axios.put(this.baseUrl, user);
  }

  getUserById(userId) {
    return axios.get(this.baseUrl + "/" + userId);
  }

  validateUser(loginCred) {
    console.log("inside service" + JSON.stringify(loginCred));
    var res = axios.post(this.baseUrl + "/login", loginCred);
    console.log(res);
    return res;
  }
}
export default UserService;

// module.exports = { UserService };
