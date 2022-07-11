import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Address from "../model/Address";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/Address/AddressActions";
import { Link } from "react-router-dom";

import AddressService from "../service/AddressService";

function AddAddress() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let service = new AddressService();
  const [state, setState] = useState({ address: new Address() });
  const [addressLine1Err, setAddressLine1Err] = useState("");
  const [addressLine2Err, setAddressLine2Err] = useState("");
  const [postalCodeErr, setPostalCodeErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [countryErr, setCountryErr] = useState("");

  var usersId = localStorage.getItem("userID");

  const formValidation = () => {
    //  alert("validation")
    let isValid = true;
    const addressLine1Err = {};
    const addressLine2Err = {};
    const postalCodeErr = {};
    const cityErr = {};
    const countryErr = {};
    //alert(state.address.department.departmentId)
    if (state.address.addressLine1.trim().length <= 0) {
      addressLine1Err.AddressLine1Required = "Address Line1 is required";
      isValid = false;
    }
    if (state.address.addressLine2.trim().length <= 0) {
      addressLine2Err.addressLine2Required = "Address Line2 is required";
      isValid = false;
    }
    if (
      state.address.postalCode.trim().length < 6 ||
      state.address.postalCode.trim().length > 6
    ) {
      postalCodeErr.postalCodeRequired = "Postal Code should be 6 digits";
      isValid = false;
    }
    if (state.address.city.trim().length <= 0) {
      cityErr.CityRequired = "City is required";
      isValid = false;
    }
    if (state.address.country.trim().length <= 0) {
      countryErr.CountryRequired = "Country is required";
      isValid = false;
    }
    setAddressLine1Err(addressLine1Err);
    setAddressLine2Err(addressLine2Err);
    setPostalCodeErr(postalCodeErr);
    setCityErr(cityErr);
    setCountryErr(countryErr);
    return isValid;
  };

  useEffect(() => {
    setState({
      address: {
        ...state.address,
        userId: usersId,
      },
    });
  }, []);

  return (
    <div className="container">
      <form>
        <div>
          <h2>Create Address</h2>
          <div className="row">
            <div className="col">
              <label>Addressline1</label>
              <input
                className="form-control"
                type="text"
                placeholder="Addressline1"
                value={state.address.addressLine1}
                onChange={(e) => {
                  setState({
                    address: {
                      ...state.address,
                      addressLine1: e.target.value,
                    },
                  });
                }}
              />
              {Object.keys(addressLine1Err).map((key) => {
                return (
                  <div style={{ color: "red" }}>{addressLine1Err[key]}</div>
                );
              })}
            </div>
          </div>
          <br />
          <label>Addressline2</label>
          <input
            className="form-control"
            type="text"
            placeholder="address"
            value={state.address.addressLine2}
            onChange={(e) => {
              setState({
                address: {
                  ...state.address,
                  addressLine2: e.target.value,
                },
              });
            }}
          />
          {Object.keys(addressLine2Err).map((key) => {
            return <div style={{ color: "red" }}>{addressLine2Err[key]}</div>;
          })}
          <br />
          <label>Postal Code</label>
          <input
            className="form-control"
            type="number"
            maxLength={10}
            placeholder="56834"
            value={state.address.postalCode}
            onChange={(e) => {
              setState({
                address: {
                  ...state.address,
                  postalCode: e.target.value,
                },
              });
            }}
          />
          {Object.keys(postalCodeErr).map((key) => {
            return <div style={{ color: "red" }}>{postalCodeErr[key]}</div>;
          })}
          <br />
          <label>City</label>
          <input
            className="form-control"
            type="text"
            placeholder="city"
            value={state.address.city}
            onChange={(e) => {
              setState({
                address: {
                  ...state.address,
                  city: e.target.value,
                },
              });
            }}
          />
          {Object.keys(cityErr).map((key) => {
            return <div style={{ color: "red" }}>{cityErr[key]}</div>;
          })}
          <br />
          <label>Country</label>
          <input
            className="form-control"
            type="text"
            placeholder="country"
            value={state.address.country}
            onChange={(e) => {
              setState({
                address: {
                  ...state.address,
                  country: e.target.value,
                },
              });
            }}
          />
          {Object.keys(countryErr).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {countryErr[key]}
              </div>
            );
          })}

          <br />
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              let isValid = formValidation();
              if (!isValid) {
                return false;
              } else {
                dispatch(addAddress(state.address));
                navigate("/address");
              }
            }}
          >
            Add Address
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAddress;
