//import React from 'react'
import visacard from '../images/visacard.png'
import mastercard from '../images/mastercard.png'
//import "../components/styles.css";
import Header from './Header';
import PaymentService from '../service/PaymentService';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Payment from '../model/Payment';
import Debit from '../model/Debit';

function Payments() {

  // const navigate=useNavigate();
  let dispatch = useDispatch();
  let service = new PaymentService();

  const [state, setState] = useState({ debit: new Debit() });

  const [paymentCARD_NUMBERErr, setPaymentCARD_NUMBERErr] = useState("");
  const [paymentCARD_EXPIRYErr, setPaymentCARD_EXPIRYErr] = useState("");
  const [paymentCARD_CVCErr, setPaymentCARD_CVVErr] = useState("");

  const formValidation = () => {
    // const regex =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let isValid = true;
    const paymentCARD_NUMBERErr = {};
    const paymentCARD_EXPIRYErr = {};
    const paymentCARD_CVCErr = {};


    if (state.debit.cardNumber.trim().length <= 15 ||
      state.debit.cardNumber.trim().length >= 17) {
      paymentCARD_NUMBERErr.paymentCARD_NUMBERRequired = "CARD_NUMBER should not be less than 16 digit";
      isValid = false;
    }
    if (state.debit.cardNumber.trim().length <= 3 ||
      state.debit.cardNumber.trim().length >= 5) {
      paymentCARD_EXPIRYErr.paymentCARD_EXPIRYRequired = "CARD_EXPIRY should be 4 digit required";
      isValid = false;
    }
    if (state.debit.cardNumber.trim().length <= 3) {
      paymentCARD_CVCErr.paymentCARD_CVCRequired = "CARD_CVV is required";
      isValid = false;
    }
    setPaymentCARD_NUMBERErr(paymentCARD_NUMBERErr);
    setPaymentCARD_EXPIRYErr(paymentCARD_EXPIRYErr);
    setPaymentCARD_CVVErr(paymentCARD_CVCErr);

    return isValid;
  };
  function handleSubmit(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      dispatch(Payments(state.debit));
    }
  }

  return (


    <div>
      <Header />
      {/* <script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script> */}
      <div className="padding">

        <div className="row">

          <div className="container d-flexvjustify-content-center">
            <div className="col-md-6 col-sm-8">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-mod-6">
                      <span>CREDIT/DEBIT CARD PAYMENT</span>
                    </div>
                    <div className="col-mod-6 text-right" style={{ marginTop: "10px" }}>
                      <img src={mastercard} width="25" className="image" />
                      <img src={visacard} width="25" className="image" />

                    </div>

                  </div>
                </div>
                <div className='card-body' style={{ height: "340px" }}>

                  <form action="#" onsubmit="return validation()">
                    <div className="form-group">

                      <label for="cc-number" className="control-label"> CARD_NUMBER</label>
                      <input type="number" maxLength={16} className="form-control " placeholder="8459 1783 1541 2222"
                        value={state.debit.cardNumber}
                        onChange={(e) => {
                          setState({
                            debit: {
                              ...state.debit,
                              cardNumber: e.target.value,
                            },
                          });
                        }}

                      />
                      {
                        Object.keys(paymentCARD_NUMBERErr).map((key) => {
                          return <div style={{ color: "red" }}>{paymentCARD_NUMBERErr[key]}
                          </div>
                        })

                      }
                      {/* <input type="tel" id="cc-number "  className='input-lg form-control cc-number' autocomplete="cc-number" placeholder=".... .... .... ...."name=""></input> */}
                    </div>

                    {/* <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-number" className="control-label"> CARD_EXPIRY</label>
                          <input type="number" maxLength={4} className="form-control"   placeholder="MM/YY"  */}
                    <div class="row">

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="cc-exp" class="control-label">CARD EXPIRY</label>
                          <input id="cc-exp" type="tel" class="input-lg form-control cc-exp" autocomplete="cc-exp"
                            placeholder="&bull;&bull; / &bull;&bull;" required

                          //  value={state.debit.cardExpiry}
                          //  onChange={(e) => {
                          //    setState({
                          //      debit: {
                          //        ...state.debit,
                          //        cardExpiry: e.target.value,
                          //      },
                          //    });
                          //  }}

                          />

                          {
                            Object.keys(paymentCARD_EXPIRYErr).map((key) => {
                              return <div style={{ color: "red" }}>{paymentCARD_EXPIRYErr[key]}
                              </div>;
                            })}


                        </div>


                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-number" className="control-label"> CARD_CVC</label>
                          <input type="number" className="form-control " maxLength={3} placeholder="123"
                            value={state.debit.cardCVC}
                            onChange={(e) => {
                              setState({
                                debit: {
                                  ...state.debit,
                                  cardCVC: e.target.value,
                                },
                              });
                            }}
                          />

                          {
                            Object.keys(paymentCARD_CVCErr).map((key) => {
                              return <div style={{ color: "red" }}>{paymentCARD_CVCErr[key]}
                              </div>;
                            })}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="numeric" className='control-label'>
                        CARD HOLDER NAME</label>
                      <input type="text"
                        className=" input-lg form-control"></input>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <div>
        <div className="padding">
          <div className="row">
            <div className="container d-flexvjustify-content-center">
              <div className="col-md-6 col-sm-8">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-mod-6">
                        <span>upi</span>
                      </div>
                    </div>
                  </div>
                  <div className='card-body' style={{ height: "100px" }}>
                    <div className="form-group">

                      <label for="cc-upi" className="control-label">upi</label>
                      <input type="text" name="number" className="form-control inputtxt" placeholder="ganga@oksbi" />


                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <div className="padding">
        <div className='row' >
          <div className="container d-flexvjustify-content-center">
            <div className="col-md-6 col-sm-8">

              <div className="form-group" >
                <div className="col-mod-6">
                  <input type="button"
                    value="Make Payment"
                    onClick={handleSubmit}
                    className=" btn btn-success btn-sn "

                    style={{ fontSize: ".8em" }}
                  />

                  <input type="button"
                    value="Cancel Payment"
                    className=" btn btn-danger btn-sn "
                    style={{ fontSize: ".8em" }}
                  />




                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments
