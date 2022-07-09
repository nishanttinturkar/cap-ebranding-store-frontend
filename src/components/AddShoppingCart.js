import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCart from "../model/ShoppingCart"
import ShoppingCartService from "../service/ShoppingCartService"
import { addShoppingCart } from "../redux/shoppingCart/shoppingCartAction";

 
function AddShoppingCart(props) {
  let dispatch = useDispatch();
//   const navigate = useNavigate();
  let service = new ShoppingCartService();
  const [state, setState] = useState({ shoppingCarts: new ShoppingCart() });
  return (
    <div className="container">
      <form>
        <div>
          <h2>Create Shopping Cart</h2>
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
            <label>Shopping Cart Id</label>
          <input
            className="form-control"
            type="text"
            value={state.shoppingCarts.id}
            onChange={(e) => {
              setState({
                shoppingCarts: {
                  ...state.id,
                  id: e.target.value,
                },
              });
            }}
          />

            <label>User id</label>
                <input
                    className="form-control"
                    type="text"
                    value={state.shoppingCarts.userId}
                    onChange={(e) => {
                  setState({
                    shoppingCarts: {
                      ...state.shoppingCarts,
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
              dispatch(addShoppingCart(state.shoppingCarts))
              // service
              //   .addOrderItems(state.orderItems)
              //   .then((result) => {
              //     alert("Order item added into db.");
              //     navigate("/ordersItems");
              //   })
              //   .catch((error2) => {
              //     alert(error2);
              //   });
            }}>
            Add Shopping Cart
          </button>
          </div>
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
 export default AddShoppingCart
