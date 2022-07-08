import axios from "axios";

class ProductService {
  baseUrl = `http://localhost:8091/store/product`;
  getAllProduct() {
    //alert("inside get all product");
    return axios.get(this.baseUrl);
  }

  addProduct(product) {
    console.log("inside service" + JSON.stringify(product));
    return axios.post(this.baseUrl, product);
  }

  deleteProduct(product) {
    return axios.delete(this.baseUrl, product);
  }

  updateProduct(product) {
    return axios.put(this.baseUrl, product);
  }

  getProductById(id) {
    return axios.get(this.baseUrl + "/" + id);
  }

  deleteProductById(product) {
    return axios.delete(this.baseUrl + "/" + product.id, product);
  }
}
export default ProductService;
