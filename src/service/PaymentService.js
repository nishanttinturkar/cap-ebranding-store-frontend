import axios from "axios";

class PaymentService {
    baseUrl = `http://localhost:8088/store/payment`
    getAllPayments() {
        // alert('inside get all orders')
        alert("inside get all payments") ;
        var res = axios.get(this.baseUrl +"/38");
        console.log(res);
        return res;
    }
    addPayment(payment) {
        console.log("inside service"+JSON.stringify(payment))
        return axios.post(this.baseUrl,payment);
    }
}
export default PaymentService;

