import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPayment } from "../redux/payment/paymentAction";
import visacard from "../Images/mastercard.png";
import mastercard from "../Images/visacard.png";
import Payment from "../model/Payment";
import debitCard from "../model/DebitCard";
import { selectPaymentOptions } from "../redux/Cart/cartActions";
//import "../components/styles.css";

function Card() {
  let dispatch = useDispatch();
  const [state, setState] = useState({ debitCard: new debitCard() });

  let total = localStorage.getItem("total");
  console.log("payment ", total);

  useEffect(() => {
    dispatch(selectPaymentOptions());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let mode =
      "debitCard" + state.debitCard.cardNumber + state.debitCard.holderName;
    let payment = new Payment(total, 154, "Debit Card", "Successful", null);
    console.log(payment);
    dispatch(addPayment(payment));
  };

  return (
    <div className="container">
      <CartNav />
      {/* <script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script> */}
      <div className="padding align-items-centre">
        <div className="row m-5">
          <div className="container d-flexvjustify-content-center">
            <div className="payment-container">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-mod-6">
                      <span>CREDIT/DEBIT CARD PAYMENT</span>
                      <h4>
                        {"\u20B9"} {total}
                      </h4>
                    </div>
                    <div
                      className="col-mod-6 text-right"
                      style={{ marginTop: "10px" }}
                    >
                      <img src={mastercard} width="25" className="image" />
                      <img src={visacard} width="25" className="image" />
                    </div>
                  </div>
                </div>
                <div className="card-body" style={{ height: "340px" }}>
                  <form action="#" onsubmit="return validation()">
                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        {" "}
                        CARD NUMBER
                      </label>
                      <input
                        type="number"
                        name="number"
                        className="form-control inputtxt"
                        placeholder="8459 1783 1541"
                        value={state.debitCard.cardNumber}
                        onChange={(e) => {
                          setState({
                            debitCard: {
                              ...state.debitCard,
                              cardNumber: e.target.value,
                            },
                          });
                        }}
                      />
                      {/* <input type="tel" id="cc-number "  className='input-lg form-control cc-number' autocomplete="cc-number" placeholder=".... .... .... ...."name=""></input> */}
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-exp" className="control-label">
                            {" "}
                            CARD EXPIRY
                          </label>
                          <input
                            type="number"
                            name="number"
                            className="form-control expiry"
                            placeholder="MM/YY"
                            value={state.debitCard.cardExpiry}
                            onChange={(e) => {
                              setState({
                                debitCard: {
                                  ...state.debitCard,
                                  cardExpiry: e.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label for="cc-cvc" className="control-label">
                            {" "}
                            CARD CVC
                          </label>
                          <input
                            type="number"
                            name="number"
                            className="form-control cvv"
                            placeholder="123"
                            value={state.debitCard.cvvNumber}
                            onChange={(e) => {
                              setState({
                                debitCard: {
                                  ...state.debitCard,
                                  cvvNumber: e.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="numeric" className="control-label">
                        CARD HOLDER NAME
                      </label>
                      <input
                        type="text"
                        className=" input-lg form-control"
                        value={state.debitCard.holderName}
                        onChange={(e) => {
                          setState({
                            debitCard: {
                              ...state.debitCard,
                              holderName: e.target.value,
                            },
                          });
                        }}
                      ></input>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        {/* <div className="padding">
          <div className="row">
            <div className="container d-flexvjustify-content-center">
              <div className="payment-container">
                <div className="card ">
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
                      <input type="tel" id="cc-number "  className='input-lg form-control cc-number' autocomplete="cc-number" placeholder=".... .... .... ...."name=""></input> 

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <br /> */}
      <div className="padding">
        <div className="row">
          <div className="container d-flexvjustify-content-center">
            <div className="payment-container">
              <div className="form-group ">
                <div className="col-mod-6">
                  <input
                    type="button"
                    value="Make Payment"
                    className=" btn btn-success btn-sn "
                    onClick={handleSubmit}
                    style={{ fontSize: ".8em" }}
                  />

                  <input
                    type="button"
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
  );
}

export default Card;
