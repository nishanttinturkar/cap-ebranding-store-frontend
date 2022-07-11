import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAddresss, deleteUser } from "../redux/Address/AddressActions";
import { useNavigate } from "react-router";

function Address() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { addresss } = useSelector((state) => state.address);
  useEffect(() => {
    dispatch(fetchAddresss());

  }, []);

  console.log(addresss);
//   var userId = localStorage.getItem("userID");
  var userId = 154
  console.log(userId);

  return (
    <div className="container">
      <div className="address-card-container">
        <div className="row">
          {addresss
            .filter((addr) => addr.userId == userId)
            .map((address) => {
              return (
                <div className="col-sm-6">
                  <div>
                  <input type="radio" className="btn-check" name="options" id="option1"  value ={`${address.addressLine1}, ${address.addressline2}, ${address.city}, ${address.country}. - ${address.postalCode}`}  
                  onChange={(e) => {
                  localStorage.setItem("address", e.target.value)
                }} autocomplete="off" />
                    <label className="btn radio-card" for="option1">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">{address.addressLine1}, {address.addressline2}</p>
                        <p className="card-text">{address.city}, {address.country}. - {address.postalCode}</p>
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
      </div>

    </div>
  );
}

export default Address;
{/* <div className="container">
    <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" checked/>
    <label className="btn radio-card" for="option1">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    </label>
    <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" />
    <label className="btn " for="option2">
    <div className="">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
    </label>
    </div> */}