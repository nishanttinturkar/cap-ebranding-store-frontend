
import React, { useEffect } from "react";
import Payment from "../model/Payment";
import PaymentService from "../service/PaymentService";
import { useSelector, useDispatch } from "react-redux";
import { fetchPayments } from "../redux/payment/paymentActions";

const ShowPayment =() =>{
  let dispatch = useDispatch();
  const { payments} = useSelector((state) => state.payment);
   
  useEffect(() => {
    dispatch(fetchPayments());
  }, []);

  

  
    return (
      <div>
        <div>
          {payments.length > 0 ? (
            <table className="table table-bordered">
              <tr>
                <th> Id</th>
                <th>Amount</th>
                <th>mode</th>
                <th>UserId</th>
                <th>Status</th>
                
                <th>Created At</th>
              </tr>
              <tbody>
                {payments.map((payment) => (
                  <tr>
                    <td>{payment.id}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.mode}</td>
                    <td>{payment.userId}</td>
                    <td>{payment.status}</td>
                   
                    <td>{payment.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No Payment Found</div>
          )}
        </div>
      </div>
    );
  }


export default ShowPayment;
