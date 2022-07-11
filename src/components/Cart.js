import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartItemById,
  deleteShoppingCartItem,
} from "../redux/shoppingCartItem/shoppingCartItemActions";
import {
  selectShippingDetails,
  selectShoppingCart,
} from "../redux/Cart/cartActions";
import { fetchShoppingCart } from "../redux/shoppingCart/shoppingCartAction";
import ShoppingCartItems from "../model/ShoppingCartItems";
import CartNav from "./CartNav";

const Cart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userId = localStorage.getItem("userID");

  useEffect(() => {
    dispatch(getCartItemById(userId));
  }, []);

  useEffect(() => {
    dispatch(selectShoppingCart());
  }, []);

  const { shoppingCartItems } = useSelector((state) => state.shoppingCartItems);
  const { totalPayment } = useSelector((state) => state.shoppingCartItems);
  const { shoppingCarts } = useSelector((state) => state.shoppingCarts);
  console.log("Shopping Carts", shoppingCarts);
  const cartObj = shoppingCarts.filter((cart) => cart.userId == userId);
  const cartId = cartObj[0];
  console.log("cart Obj", cartObj);
  console.log("totalPay", totalPayment);
  const [totalErr, setTotalErr] = useState("");
  console.log("***Shopping Cart Items***", shoppingCartItems);
  // useEffect(() => {
  //     // dispatch(getCartItemById())

  //     // dispatch(fetchShoppingCart())

  //   }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove item?")) {
      dispatch(deleteShoppingCartItem(id));
    }
  };

  var total = 0;
  for (var i = 0; i < shoppingCartItems.length; i++) {
    total += shoppingCartItems[i].quantity * shoppingCartItems[i].productPrice;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("total", total);
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      navigate("/address");
      dispatch(selectShippingDetails());
    }
  };

  console.log("total: ", total);

  console.log("Shopping cart: ", shoppingCartItems);

  const formValidation = () => {
    let isValid = true;
    const totalErr = {};

    if (total == null || total == 0) {
      totalErr.totalRequired = "You don't have any item to checkout.";
      isValid = false;
    }

    setTotalErr(totalErr);
    return isValid;
  };

  return (
    <div className="container">
      <CartNav />
      <div className="row m-5">
        <div className=" col-8">
          <h2>Shopping Cart</h2>
          <hr style={{ color: "black", height: "1px" }} />
          {shoppingCartItems.map((item) => {
            return (
              <div>
                <div className="card p-2">
                  <div className=" row">
                    <div className="col-3">
                      <div className="card-image-container ">
                        <img
                          src={item.imageUrl}
                          className="img-fluid rounded-start card-image"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card-body display-card">
                        <h5 className="card-title">{item.productName}</h5>
                        <p className="card-text">
                          {"\u20B9"} {item.productPrice}
                        </p>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <div>
                          <button
                            className=" action-button"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDelete(item.id);
                              dispatch(getCartItemById(userId));
                            }}
                          >
                            Remove Item
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
        </div>
        <div className=" col-4 summary">
          <div className="card d-flex">
            <h2>Summary</h2>
            <hr style={{ color: "black", height: "1px" }} />
            <h2>Total: {total}</h2>
            <hr style={{ color: "black", height: "1px" }} />
            <button className="action-button" onClick={handleSubmit}>
              Checkout
            </button>
            {Object.keys(totalErr).map((key) => {
              return <div style={{ color: "red" }}>{totalErr[key]}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
