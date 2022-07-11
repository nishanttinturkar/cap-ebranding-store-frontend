import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Payment from "../model/Payment";
import PaymentService from "../service/PaymentService";
import { addPayment } from "../redux/payment/paymentAction";

import {  useDispatch } from "react-redux";



function AddPayment(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let service = new PaymentService();
  const [state, setState] = useState({ payment: new Payment() });
  // const [payIdErr, setIdErr] = useState("");
    const [payAmountErr, setAmountErr] = useState("");
    const [payUserIdErr, setUserIdErr] = useState("");
    const [payModeErr, setModeErr] = useState("");
    const [payStatusErr, setStatusErr] = useState("");
    
    const formValidation = () => {
       
      let isValid = true;
      // const payIdErr = {};

      const payAmountErr = {};
      const payUserIdErr = {};
      const payModeErr = {};
      const payStatusErr = {};

      // alert(state.payment.department.departmentId)
        // if(state.payment.Id.trim().length<=0){
        //     payIdErr.IdRequired=" ID is required";
        //     isValid=false;
        // }
        if(state.payment.amount.trim().length<=0){
            payAmountErr.AmountRequired=" Amount is required";
            isValid=false;
        }
        if(state.payment.userId.trim().length<=0){
           payUserIdErr.UserIdRequired=" UserId is required";
            isValid=false;
        }
        if(state.payment.mode.trim().length<=0){
          payModeErr.ModeRequired=" Mode is required";
          isValid=false;
      }
        if(state.payment.status.trim().length<=0){
            
            payStatusErr.StatusRequired="Status is required";
            isValid=false;
        }
        // setIdErr(payIdErr);
        setAmountErr(payAmountErr);
        setUserIdErr(payUserIdErr);
        setModeErr(payModeErr);
        setStatusErr(payStatusErr);
        
       
        return isValid;
    }
    function handleClick(e) {
      e.preventDefault();
      let isValid = formValidation()
      if (!isValid) {
          return false;
      }
      else {
          props.addPaymeny(state.payment);
          navigate('/payments');

      }
  }
  return (
    <div className="container">
      <form>
        <div>
          <h2>Create Payment</h2>
          <div className="row">
            <div className="col">
             <label>Payment id</label>
              <input
                className="form-control"
                type="number"
                placeholder="1234"
                value={state.payment.id}
                onChange={(e) => {
                  setState({
                    payment: {
                      ...state.payment,
                      id: e.target.value,
                    },
                  });
                }}
              /> 
            </div>
            <div className="col">
              <label> Amount</label>
              <input
                className="form-control"
                type="number"
                placeholder="1200"
                value={state.payment.amount}
                onChange={(e) => {
                  setState({
                    payment: {
                      ...state.payment,
                      amount: e.target.value,
                    },
                  });
                }}
              /><br>
              </br>
              {Object.keys(payAmountErr).map((key)=>{
                  return <div style={{color:"red"}}>{payAmountErr[key]}</div>
              })}
            </div>
          </div>
          <br />
          <label>Mode</label>
          <input
            className="form-control"
            type="text"
            placeholder="upi"
            value={state.payment.mode}
            onChange={(e) => {
              setState({
                payment: {
                  ...state.payment,
                  mode: e.target.value,
                },
              });
            }}
          />
          {Object.keys(payModeErr).map((key)=>{
                                return <div style={{color:"red"}}>{payModeErr[key]}</div>
                            })}
          <br />
          <label>Status</label>
          <input
            className="form-control"
            type="text"
             placeholder="successfull"
            value={state.payment.status}
            onChange={(e) => {
              setState({
                payment: {
                  ...state.payment,
                  status: e.target.value,
                },
              });
            }}
          />
          <br></br>
                             {Object.keys(payStatusErr).map((key)=>{
                                return <div style={{color:"red"}}>{payStatusErr[key]}</div>
                            })}
          <div className="col">
              <label>UserId</label>
              <input
                type="number"
                
                placeholder="12"
                
                value={state.payment.userId}
                onChange={(e) => {
                  setState({
                    payment: {
                      ...state.payment,
                      userId: e.target.value,
                    },
                  });

                  console.log(state.payment.userId);
                }}
              /><br/>
              {Object.keys(payUserIdErr).map((key)=>{
                 return <div style={{color:"red"}}>{payUserIdErr[key]}</div>
             })}

              
            </div>
            <br/>
          
            <div className="col">
              <label>created At</label>
              <input
                type="text"
                
                placeholder="12/04/2022"
                
                value={state.payment.createdAt}
                onChange={(e) => {
                  setState({
                    payment: {
                      ...state.payment,
                      createdAt: e.target.value,
                    },
                  });

                  console.log(state.payment.createdAt);
                }}
              />
            </div>
          
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              let isValid=formValidation()
              if(!isValid){
                return false;
              }
              else{
              
              // service
              //   .addPayment(state.payment)
              //   .then((result) => {
              //     alert("Payment added into db.");
              //     navigate("/payments");
              //   })
              //   .catch((error2) => {
                  
              //     console.log(error2);
              //   });
              dispatch(addPayment(state.payment))
              }
            }}
          >
            Add Payment
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPayment;