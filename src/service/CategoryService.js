import axios from "axios";
class CategoryService {
  
  baseUrl = `http://localhost:8091/store/category`;
  getAllCategories() {
    alert("inside get all categories");
    // var res = axios.get(this.baseUrl + "/129");
    // console.log(res);
    // return res;
    return axios.get(this.baseUrl);
  }

  addCategory(category) {
    console.log("inside service" + JSON.stringify(category));
    return axios.post(this.baseUrl, category);
  }

  updateCategory(category) {
    alert("inside update category");
    return axios.put(this.baseUrl+ category);
  }

  getCategoryById(id) {
    return axios.get(this.baseUrl +'/'+ id);
  }

  deleteCategoryById(category) {
    return axios.delete(this.baseUrl+"/"+category.id, category);
}

}
export default CategoryService;
