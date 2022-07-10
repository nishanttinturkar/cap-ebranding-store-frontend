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
  var userId = localStorage.getItem("userID");
  console.log(userId);

  return (
    <div>
      <div className="address-card-container">
        <div className="row">
          {addresss
            .filter((addr) => addr.userId == userId)
            .map((address) => {
              return (
                <div class="col-sm-6">
                  <div>
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
      <h5>Add New Address</h5>
      <div>
        
      </div>
    </div>
  );
}

export default Address;
