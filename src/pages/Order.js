import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import headPhone from "../Images/headPhone.jpg";
import { getOrderByUserId } from "../redux/order/orderActions";

const Orders = () => {
  let dispatch = useDispatch();
  const { order } = useSelector((state) => state.orders);
  const { items } = useSelector((state) => state.orders);
  const navigate = useNavigate();

  console.log("From Orders", items);

  let userId = localStorage.getItem("userID");

  useEffect(() => {
    dispatch(getOrderByUserId(userId));
  }, []);

  return (
    <div className="container">
      {/* <h2>Your Orders</h2>  <br/> */}
      {order.length > 0 ? (
        <div>
          {order.map((item) => (
            <div className="card p-2">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src="https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000"
                    width="200"
                    height="200"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <br />
                  <h5>Shiped to</h5>
                  <p>{item.address}</p>
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      Order Amount:
                      {"\u20B9"} {item.total}
                    </h5>
                    <p className="card-text">Order Id: #{item.id}</p>
                  </div>
                </div>
                <div className="col-2" style={{ marginTop: "50px" }}>
                  <button
                    className="btn btn-outline-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/orders/item/" + item.id);
                    }}
                  >
                    View Items
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Orders</h2>
          <h4>Order Not found</h4>
        </div>
      )}
    </div>
  );
};
export default Orders;
