import axios from "axios";
class ShoppingCartService {
  baseUrl = "http://localhost:8091/store";
  getAllShoppingCart() {
    // alert('inside get all orders')
    return axios.get(this.baseUrl + "/cart");
  }
  
  addShoppingCart(cart) {
    console.log("inside service" + JSON.stringify(cart));
    return axios.post(this.baseUrl + "/cart", cart);
  }

  getAllShoppingCartItems() {
    return axios.get(this.baseUrl + "/cart_items");
  }

  addShoppingCartItem(ShoppingCartItem) {
    console.log("inside service" + JSON.stringify(ShoppingCartItem));
    return axios.post(this.baseUrl + "/cart_items", ShoppingCartItem);
  }

  getCartByUserId(userId) {
    return axios.get(this.baseUrl + "/cart" + "/" + userId);
  }

  getCartItemById(Id) {
    return axios.get(this.baseUrl + `/cart_items/${Id}`);
  }

  deleteShoppingCartItemById(id) {
    return axios.delete(this.baseUrl + `/cart_items/${id}`);
  }
}

export default ShoppingCartService;
