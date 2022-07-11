import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import OrderItems from "../model/OrderItems"
import OrderService from "../service/OrderService"
import { addOrderItems } from "../redux/orderItems/orderItemAction";

 
function AddOrderItems(props) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let service = new OrderService();
  const [state, setState] = useState({ orderItems: new OrderItems() });
  return (
    <div className="container">
      <form>
        <div>
          <h2>Create Order Items</h2>
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
            value={state.orderItems.careatedAt}
            onChange={(e) => {
              setState({
                orderItems: {
                  ...state.orderItems,
                  careatedAt: e.target.value,
                },
              });
            }}
          />

            {/* <label>Modified at</label>
                <input
                    className="form-control"
                    type="text"
                    value={state.orderItems.modifiedAt}
                    onChange={(e) => {
                  setState({
                    orderItems: {
                      ...state.orderItems,
                      modifiedAt: e.target.value,
                    },
                });
            }}
          /> */}
        </div>
          </div>
          <br />
          <label>Product Id</label>
          <input
            className="form-control"
            type="number"
            placeholder="1234"
            value={state.orderItems.productId}
            onChange={(e) => {
              setState({
                orderItems: {
                  ...state.orderItems,
                  productId: e.target.value,
                },
              });
            }}
          />
          <br />
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            placeholder="1234"
            value={state.orderItems.price}
            onChange={(e) => {
              setState({
                orderItems: {
                  ...state.orderItems,
                  price: e.target.value,
                },
              });
            }}
          />
         <br />
          <label>Order Id</label>
          <input
            className="form-control"
            type="number"
            placeholder="1234"
            value={state.orderItems.orderId}
            onChange={(e) => {
              setState({
                orderItems: {
                  ...state.orderItems,
                  orderId: e.target.value,
                },
              });
            }}
          />
          <div className="col">
              <label>Quantity</label>
              <input
                className="form-control"
                type="number"
                placeholder="1234"
                value={state.orderItems.quantity}
                onChange={(e) => {
                  setState({
                    orderItems: {
                      ...state.orderItems,
                      quantity: e.target.value,
                    },
                  });
                }}
              />
          <br />
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addOrderItems(state.orderItems))
              // service
              //   .addOrderItems(state.orderItems)
              //   .then((result) => {
              //     alert("Order item added into db.");
              //     navigate("/ordersItems");
              //   })
              //   .catch((error2) => {
              //     alert(error2);
              //   });
            }}
          >
            Add Order Item
          </button>
        </div>
      </form>
    </div>
  );
}
 
//  const mapDispatchToProps = (dispatch) => {
//    return {
//      addOrder: (order) => { dispatch(addOrder(order))}
//    }
// }

//  export default connect (null, mapDispatchToProps)(AddOrderItems);
 export default AddOrderItems
