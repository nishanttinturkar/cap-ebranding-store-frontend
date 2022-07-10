import axios from "axios";
class RoleService {
  baseUrl = `http://localhost:8091/store/role`;

  getAllRoles() {
    var res = axios.get(this.baseUrl);
    console.log(res);
    return res;
  }

  addRole(role) {
    console.log("inside service" + JSON.stringify(role));
    return axios.post(this.baseUrl, role);
  }
}
export default RoleService;
