import PaymentService from "../../service/PaymentService";
import {
  ADD_PAYMENT_REQUEST,
  FETCH_PAYMENTS_REQUEST,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE,
  SEARCH_PAYMENTS_REQUEST,
} from "./paymentTypes";

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
    service
      .addPayment(pay)
      .then((response) => {
        alert("payment added");
        const payment = response.data;
        dispatch(addPaymentRequest(payment)); //take action as parameter,reudcer is triggered
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
