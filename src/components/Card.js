import React from 'react'
import visacard from '../images/visacard.png'
import mastercard from '../images/mastercard.png'
//import "../components/styles.css";
import Header from '../components/Header';


function Card() {
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

                      <label for="cc-number" className="control-label"> CARD NUMBER</label>
                      <input type="number" name="number" className="form-control inputtxt" placeholder="8459 1783 1541" />
                      {/* <input type="tel" id="cc-number "  className='input-lg form-control cc-number' autocomplete="cc-number" placeholder=".... .... .... ...."name=""></input> */}
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-exp" className="control-label"> CARD EXPIRY</label>
                          <input type="number" name="number" className="form-control expiry" placeholder="MM/YY" />



                        </div>


                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-cvc" className="control-label"> CARD CVC</label>
                          <input type="number" name="number" className="form-control cvv" placeholder="123" />
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
      <div>
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
                      {/* <input type="tel" id="cc-number "  className='input-lg form-control cc-number' autocomplete="cc-number" placeholder=".... .... .... ...."name=""></input> */}

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="padding">
        <div className='row' >
          <div className="container d-flexvjustify-content-center">
            <div className="col-md-6 col-sm-8">

              <div className="form-group" >
                <div className="col-mod-6">
                  <input type="button"
                    value="Make Payment"
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

export default Card
