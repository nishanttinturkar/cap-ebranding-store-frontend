import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAddresss, deleteUser } from "../redux/Address/AddressActions";
import { useNavigate } from "react-router";
import {
  selectPaymentOptions,
  selectShippingDetails,
} from "../redux/Cart/cartActions";
import CartNav from "./CartNav";

function Address() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { addresss } = useSelector((state) => state.address);

  useEffect(() => {
    dispatch(fetchAddresss());
  }, []);

  console.log(addresss);
  var userId = localStorage.getItem("userID");
  console.log(userId);

  useEffect(() => {
    dispatch(selectShippingDetails());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
    dispatch(selectPaymentOptions());
  };

  const handleClick = (e) => {
    e.preventDefault();

    navigate("/address/add");
  };

  return (
    <div className="container">
      <CartNav />
      <div className="address-card-container">
        <div className="row">
          {addresss
            .filter((addr) => addr.userId == userId)
            .map((address) => {
              return (
                <div className="row">
                  <div className="col">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option1"
                      value={`${address.addressLine1}, ${address.addressline2}, ${address.city}, ${address.country}. - ${address.postalCode}`}
                      onChange={(e) => {
                        localStorage.setItem("address", e.target.value);
                      }}
                      autocomplete="off"
                    />
                    <label className="btn radio-card" for="option1">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-text">
                            {address.addressLine1}, {address.addressLine2}
                          </p>
                          <p className="card-text">
                            {address.city}, {address.country}. -{" "}
                            {address.postalCode}
                          </p>
                          {/* <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a> */}
                        </div>
                      </div>
                    </label>
                  </div>
                  <br />
                </div>
              );
            })}
        </div>
        <div>
          <button
            className="btn btn-outline-primary mt-3"
            onClick={handleClick}
          >
            {" "}
            Add Address
          </button>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default Address;
