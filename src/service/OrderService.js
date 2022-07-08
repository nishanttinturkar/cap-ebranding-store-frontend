import axios from "axios";
class OrderService {
    baseUrl = 'http://localhost:8080/store'
    getAllOrders() {
        // alert('inside get all orders')
        return axios.get(this.baseUrl + '/order');
    }
    addOrder(order) {
        console.log("inside service"+JSON.stringify(order))
        return axios.post(this.baseUrl + '/order', order);
    }
    // getAllUser() {

    //     return axios.get(this.baseUrl + '/User' + 147);
    // }
    addOrderItems(orderItems) {
        console.log('inside service'+JSON.stringify(orderItems))
        return axios.post(this.baseUrl+'/order_items', orderItems)
    }
    

    getAllOrderItems() {
        return axios.get(this.baseUrl+'/order_items')
    }
    getOrderItemsbyId(odrItemId) {
        return axios.get(this.baseUrl + '/order_items/1')
    }
    // addItems(orderItems) {
    //     return axios.post(this.baseUrl, orderItems)
    // }
}
export default OrderService;