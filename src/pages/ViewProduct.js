import React, { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Product from "../model/Product";
import { getProductById } from "../redux/product/productAction";
import { fetchShoppingCart } from "../redux/shoppingCart/shoppingCartAction";
import ShoppingCartItems from "../model/ShoppingCartItems";
import {
  addShoppingCartItem,
  fetchShoppingCartItem,
} from "../redux/shoppingCartItem/shoppingCartItemActions";

const ViewProduct = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let userId = localStorage.getItem("userID");
  const [state, setState] = useState({ product: new Product() });
  const { product } = useSelector((state) => state.products);
  const { shoppingCarts } = useSelector((state) => state.shoppingCarts);
  const { shoppingCartItems } = useSelector((state) => state.shoppingCartItems);

  console.log(shoppingCarts);
  const cartObj = shoppingCarts.filter((cart) => cart.userId == userId);
  const cartItem = shoppingCartItems.filter(
    (item) => item.productId == product.id
  );
  console.log(cartObj);
  const cartId = cartObj[0];
  console.log(cartId);
  const [fruit, setFruit] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(fetchShoppingCart());
  }, []);

  const addToCart = (e) => {
    e.preventDefault();
    let cart = new ShoppingCartItems(null, null, fruit, cartId.id, product.id);
    console.log(cart);
    dispatch(addShoppingCartItem(cart));
    dispatch(fetchShoppingCartItem());
  };

  // console.log(product)

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col p-3">
          <div className="image-container d-flex">
            <img
              src={product.imgUrl}
              className="img-fluid rounded-start product-image"
              alt="..."
            />
          </div>
        </div>
        <div className="col">
          <div className="card p-2 m-3">
            <h2>{product.name}</h2>
            <hr style={{ color: "black", height: "1px" }} />
            <div className="row">
              <div className="col" style={{ textAlign: "center" }}>
                <b>
                  {" "}
                  {"\u20B9"} {product.price}
                </b>
              </div>
              <div className="col" style={{ textAlign: "center" }}>
                <select
                  id="fruits"
                  defaultValue="Select fruit"
                  onChange={(e) => setFruit(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <hr style={{ color: "black", height: "1px" }} />
            <p>{product.description}</p>
            <hr style={{ color: "black", height: "1px" }} />
            <div className="row p-2">
              <div className="col" style={{ textAlign: "right" }}>
                <button className="btn action-button" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewProduct;
