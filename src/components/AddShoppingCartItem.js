import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartItems from "../model/ShoppingCartItems"
import ShoppingCartService from "../service/ShoppingCartService"
import { addShoppingCartItem } from "../redux/shoppingCartItem/shoppingCartItemActions";

 
function AddShoppingCartItem(props) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let service = new ShoppingCartService();
  const [state, setState] = useState({ shoppingCartItems: new ShoppingCartItems() });
  return (
    <div className="container">
      <form>
        <div>
          <h2>Create Cart Items</h2>
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
            value={state.shoppingCartItems.createdAt}
            onChange={(e) => {
              setState({
                shoppingCartItems: {
                  ...state.shoppingCartItems,
                  createdAt: e.target.value,
                },
              });
            }}
          />

            <label>Modified at</label>
                <input
                    className="form-control"
                    type="text"
                    value={state.shoppingCartItems.modifiedAt}
                    onChange={(e) => {
                  setState({
                    shoppingCartItems: {
                      ...state.shoppingCartItems,
                      modifiedAt: e.target.value,
                    },
                });
            }}
          />
        </div>
          </div>
          <br />
          <label>Product Id</label>
          <input
            className="form-control"
            type="number"
            placeholder="1234"
            value={state.shoppingCartItems.productId}
            onChange={(e) => {
              setState({
                shoppingCartItems: {
                  ...state.shoppingCartItems,
                  productId: e.target.value,
                },
              });
            }}
          />
         <br />
          <label>Cart Id</label>
          <input
            className="form-control"
            type="number"
            placeholder="1234"
            value={state.shoppingCartItems.cartId}
            onChange={(e) => {
              setState({
                shoppingCartItems: {
                  ...state.shoppingCartItems,
                  cartId: e.target.value,
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
                value={state.shoppingCartItems.quantity}
                onChange={(e) => {
                  setState({
                    shoppingCartItems: {
                      ...state.shoppingCartItems,
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
              dispatch(addShoppingCartItem(state.shoppingCartItems))
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
            Add Cart Item
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
 export default AddShoppingCartItem
