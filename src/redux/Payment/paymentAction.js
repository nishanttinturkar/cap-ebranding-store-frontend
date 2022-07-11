import PaymentService from "../../service/PaymentService";
import OrderService from "../../service/OrderService";
import Order from "../../model/Order";
import {
  ADD_PAYMENT_REQUEST,
  FETCH_PAYMENTS_REQUEST,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE,
  SEARCH_PAYMENTS_REQUEST,
} from "./paymentTypes.js";
import orderReducer from "../order/orderReducer";

export const addPaymentRequest = (pay) => {
  return {
    type: ADD_PAYMENT_REQUEST,
    payload: pay, //data from database
  };
};
export const fetchPaymentsRequest = () => {
  return {
    type: FETCH_PAYMENTS_REQUEST,
  };
};

export const fetchPaymentsSuccess = (payments) => {
  return {
    type: FETCH_PAYMENTS_SUCCESS,
    payload: payments, //data from database
  };
};
export const fetchPaymentsFailure = (error) => {
  return {
    type: FETCH_PAYMENTS_FAILURE,
    payload: error,
  };
};
export const searchPayment = (empId) => {
  return {
    type: SEARCH_PAYMENTS_REQUEST,
    payload: empId,
  };
};

export const addPayment = (pay) => {
  return (dispatch) => {
    let service = new PaymentService();
    let odrservice = new OrderService();
    service
      .addPayment(pay)
      .then((response) => {
        alert("payment added");
        const payment = response.data;
        console.log(payment);
        localStorage.setItem("paymentId", payment.id);
        dispatch(addPaymentRequest(payment)); //take action as parameter,reudcer is triggered
        console.log("paymentId =", payment.id);
        let total = localStorage.getItem("total");
        let address = localStorage.getItem("address");
        let userId = localStorage.getItem("userID");

        var order = new Order(null, total, payment.id, userId, address);
        console.log("order", order);
        odrservice
          .addOrder(order)
          .then((odrresponse) => {
            console.log(odrresponse.data);
            alert("order Added");
            
          })
          .catch((odrerror) => {
            console.log(odrerror.response.data);
          });
      })
      .catch((error) => {
        alert(error);
        // dispatch(fetchEmployeesFailure(error.message));
      });
  };
};
export const fetchPayments = () => {
  return (dispatch) => {
    let service = new PaymentService();
    service
      .getAllPayments()
      .then((response) => {
        const payments = response.data;
        console.log(payments);
        dispatch(fetchPaymentsSuccess(payments)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        dispatch(fetchPaymentsFailure(error.message));
      });
  };
};
