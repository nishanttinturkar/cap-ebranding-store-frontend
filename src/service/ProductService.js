import axios from "axios";
class ProductService {
  baseUrl = "http://localhost:8091/store";
  getProductsById(Id) {
    return axios.get(this.baseUrl + `/product/${Id}`);
  }
  getAllProducts() {
    return axios.get(this.baseUrl + "/product");
  }
  addProducts(product) {
    console.log("inside service" + JSON.stringify(product));
    return axios.post(this.baseUrl + "/product", product);
  }

  updateProduct(product) {
    return axios.put(this.baseUrl + "/product/", product);
  }

  deleteProductById(id) {
    return axios.delete(this.baseUrl + "/product" + "/" + id);
  }
}
export default ProductService;
