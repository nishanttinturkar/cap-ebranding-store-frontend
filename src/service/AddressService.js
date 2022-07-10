import axios from "axios";
class AddressService {
  baseUrl = `http://localhost:8091/store/address`;

  getAllAddresss() {
    var res = axios.get(this.baseUrl);
    console.log(res);
    return res;
  }

  addAddress(address) {
    console.log("inside service" + JSON.stringify(address));
    return axios.post(this.baseUrl, address);
  }

  deleteAddressById(addressId) {
    return axios.delete(this.baseUrl + "/" + addressId);
  }

  updateAddress(address) {
    return axios.put(this.baseUrl, address);
  }

  getAddressById(addressId) {
    return axios.get(this.baseUrl + "/" + addressId);
  }
}
export default AddressService;
