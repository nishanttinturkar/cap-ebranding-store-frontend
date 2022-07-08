import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Order from "../Model/Order"
import OrderService from "../Service/OrderService"
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../redux/order/orderActions";
// import { addOrder } from '../redux/order/orderActions'
// import { connect } from 'react-redux'
 
function AddOrder(props) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let service = new OrderService();
  const [state, setState] = useState({ order: new Order() });
  return (
    <div className="container">
      <form>
        <div>
          <h2>Create Order</h2>
          <div className="row">
            {/* <div className="col">
              <label>Order Id</label>
              <input
                className="form-control"
                type="number"
                placeholder="1234"
                value={state.Order.id}
                onChange={(e) => {
                  setState({
                    Order: {
                      ...state.Order,
                      id: e.target.value,
                    },
                  });
                }}
              />
            </div> */}
            <label>Created at</label>
          <input
            className="form-control"
            type="text"
            value={state.order.careatedAt}
            onChange={(e) => {
              setState({
                order: {
                  ...state.order,
                  careatedAt: e.target.value,
                },
              });
            }}
          />
            
            </div>
          </div>
          <br />
          <label>Payment Id</label>
          <input
            className="form-control"
            type="number"
            placeholder="1234"
            value={state.order.paymentId}
            onChange={(e) => {
              setState({
                order: {
                  ...state.order,
                  paymentId: e.target.value,
                },
              });
            }}
          />
          <br />
          <label>Total</label>
          <input
            className="form-control"
            type="number"
            placeholder="1234"
            value={state.order.total}
            onChange={(e) => {
              setState({
                order: {
                  ...state.order,
                  total: e.target.value,
                },
              });
            }}
          />
          <br />
          <div className="col">
              <label>User Id</label>
              <input
                className="form-control"
                type="number"
                placeholder="1234"
                value={state.order.userId}
                onChange={(e) => {
                  setState({
                    order: {
                      ...state.order,
                      userId: e.target.value,
                    },
                  });
                }}
              />
          <br />
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addOrder(state.order))
              // service
              //   .addOrder(state.order)
              //   .then((result) => {
              //     alert("Order added into db.");
              //     navigate("/Orders");
              //   })
              //   .catch((error2) => {
              //     alert(error2);
              //   });
            }}
          >
            Add Order
          </button>
        </div>
      </form>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addOrder: (order) => { dispatch(addOrder(order))}
//   }
// }

// export default connect (null, mapDispatchToProps)(AddOrder);
export default AddOrder
