import axios from "axios";
class ShoppingCartService {
    baseUrl = 'http://localhost:8080/store'
    getAllShoppingCart() {
        // alert('inside get all orders')
        return axios.get(this.baseUrl + '/cart');
    }
    addShoppingCart(cart) {
        console.log("inside service"+JSON.stringify(cart))
        return axios.post(this.baseUrl + '/cart', cart);
    }
    getAllShoppingCartItems() {
        return axios.get(this.baseUrl+ '/cart_items')
    }

    addShoppingCartItem(ShoppingCartItem) {
        console.log("inside service"+ JSON.stringify(ShoppingCartItem))
        return axios.post(this.baseUrl+ '/cart_items', ShoppingCartItem)
    }
   
    getCartById(userId) {
        return axios.get(this.baseUrl + "/" + userId);
      }

    getCartItemById(Id) {
        return axios.get(this.baseUrl+`/cart_items/${Id}`)
    }
}

export default ShoppingCartService