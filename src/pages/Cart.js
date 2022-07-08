import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShoppingCart,
  selectShippingDetails,
  selectPaymentOptions,
} from "../redux/Cart/cartActions";

const Cart = () => {
  let dispatch = useDispatch();
  const cartNavSelector = useSelector((state) => state.cartNavSelector);
  console.log(cartNavSelector);
  return (
    <div className="container">
      <div className="row">
        <div
          className={
            cartNavSelector.cart ? "col cart-nav active" : "col cart-nav"
          }
          onClick={() => dispatch(selectShoppingCart())}
        >
          1. Shopping Cart
        </div>
        <div
          className={
            cartNavSelector.shipping ? "col cart-nav active" : "col cart-nav"
          }
          onClick={() => dispatch(selectShippingDetails())}
        >
          2. Shipping Details
        </div>
        <div
          className={
            cartNavSelector.payment ? "col cart-nav active" : "col cart-nav"
          }
          onClick={() => dispatch(selectPaymentOptions())}
        >
          3. Payment Options
        </div>
      </div>
    </div>
  );
};

export default Cart;
