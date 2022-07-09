import axios from "axios";
class RoleService {
  baseUrl = `http://localhost:8091/store/role`;

  getAllRoles() {
    var res = axios.get(this.baseUrl + "/155");
    console.log(res);
    return res;
  }

  addRole(role) {
    console.log("inside service" + JSON.stringify(role));
    return axios.post(this.baseUrl, role);
  }

  validateRole(loginCred) {
    console.log("inside service" + JSON.stringify(loginCred));
    var res = axios.post(this.baseUrl + "/login", loginCred);
    console.log(res);
    return res;
  }
}
export default RoleService;
