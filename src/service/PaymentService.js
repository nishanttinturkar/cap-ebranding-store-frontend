//import axios from "axios";
var axios = require('axios')

class PaymentService {
    baseUrl = `http://localhost:8088/store/payment`
    getAllPayments() {
        // alert('inside get all orders')
        // alert("inside get all payments") ;
        var res = axios.get(this.baseUrl);
        console.log(res);
        return res;
    }
    addPayment(payment) {
        console.log("inside service"+JSON.stringify(payment))
        return axios.post(this.baseUrl,payment);
    }
}
// export default PaymentService;
module.exports = {



    PaymentService



}
