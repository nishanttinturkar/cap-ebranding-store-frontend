import React, { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getItemsByOrderId } from "../redux/orderItems/orderItemAction";
import OrderItems from "../model/OrderItems";

const ViewItems = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userId = localStorage.getItem("userID");
  const [state, setState] = useState({ items: new OrderItems() });
  const { orderItems } = useSelector((state) => state.orderItems);
  const { shoppingCarts } = useSelector((state) => state.shoppingCarts);
  const { shoppingCartItems } = useSelector((state) => state.shoppingCartItems);

  console.log("Order Id", id);
  useEffect(() => {
    dispatch(getItemsByOrderId(id));
  }, []);

  console.log(orderItems);

  //   const addToCart = (e) => {
  //     e.preventDefault();
  //     let cart = new ShoppingCartItems(null, null, fruit, cartId.id, product.id);
  //     console.log(cart);
  //     dispatch(addShoppingCartItem(cart));
  //     dispatch(fetchShoppingCartItem());
  //   };

  // console.log(product)

  return (
    <div className="container">
      <h3>Order Items #{id}</h3>
      {orderItems.map((item) => {
        return (
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col card-image-container">
                <img
                  src={item.imageUrl}
                  class="img-fluid rounded-start card-image"
                  alt="..."
                />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">{item.productName}</h5>
                  <p class="card-text">{item.productDesc}</p>
                </div>
              </div>
              <div class="col">
                <div class="card-body">
                  <h5 class="card-title">
                    Item Price: <br /> <br />
                    {"\u20B9"} {item.price}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ViewItems;
