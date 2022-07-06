import axios from "axios";
class UserService {
  baseUrl = `http://localhost:8091/store/user`;

  getAllUsers() {
    alert("inside get all users");
    var res = axios.get(this.baseUrl + "/129");
    console.log(res);
    return res;
  }

  addUser(user) {
    console.log("inside service" + JSON.stringify(user));
    return axios.post(this.baseUrl, user);
  }

  validateUser(loginCred) {
    console.log("inside service" + JSON.stringify(loginCred));
    var res = axios.post(this.baseUrl + "/login", loginCred);
    console.log(res);
    return res;
  }
}
export default UserService;
