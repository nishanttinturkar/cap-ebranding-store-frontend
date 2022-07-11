import axios from "axios";
// var axios = require("axios")
class CategoryService {
  
  baseUrl = `http://localhost:8091/store/category`;
  getAllCategories() {
    // alert("inside get all categories");
    var res = axios.get(this.baseUrl );
    console.log(res);
    return res;
    // return axios.get(this.baseUrl);
  }

  addCategory(category) {
    console.log("inside service" + JSON.stringify(category));
    return axios.post(this.baseUrl, category);
  }

  updateCategory(category) {
    // alert("inside update category");
    return axios.put(this.baseUrl, category);
  }

  getCategoryById(category) {
    return axios.get(this.baseUrl + "/"+ category);
  }

  deleteCategoryById(id) {
    return axios.delete(this.baseUrl + "/" + id);
}

}

// module.exports = {
//   CategoryService
// }

export default CategoryService;
