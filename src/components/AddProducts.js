import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Product from "../Model/Product"
import ProductService from "../Service/ProductService"
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../redux/product/productAction"

function AddProducts() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let service = new ProductService();
  const [state, setState] = useState({ product: new Product() });
  return (
    <div className="container">
      <form>
        <div>
          <h2>Create Product</h2>
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
            value={state.product.careatedAt}
            onChange={(e) => {
              setState({
                product: {
                  ...state.product,
                  careatedAt: e.target.value,
                },
              });
            }}
          />
            </div>
          </div>
          <br />
          <label>Modified at</label>
          <input
            className="form-control"
            type="text"
            value={state.product.modifiedAt}
            onChange={(e) => {
              setState({
                product: {
                  ...state.product,
                  modifiedAt: e.target.value,
                },
              });
            }}
          />
          <br />
          <label>Product name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Headphone"
            value={state.product.name}
            onChange={(e) => {
              setState({
                product: {
                  ...state.product,
                  name: e.target.value,
                },
              });
            }}
          />
          <br />
          <label>Product description</label>
          <input
            className="form-control"
            type="text"
            placeholder="product description"
            value={state.product.description}
            onChange={(e) => {
              setState({
                product: {
                  ...state.product,
                  description: e.target.value,
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
            value={state.product.price}
            onChange={(e) => {
              setState({
                product: {
                  ...state.product,
                  price: e.target.value,
                },
              });
            }}
          />
          <br />
          <div className="col">
              <label>Vendor Id</label>
              <input
                className="form-control"
                type="number"
                placeholder="1234"
                value={state.product.vendorId}
                onChange={(e) => {
                  setState({
                    product: {
                      ...state.product,
                      vendorId: e.target.value,
                    },
                  });
                }}
              />
          <br />
          <label>category Id</label>
              <input
                className="form-control"
                type="number"
                placeholder="1234"
                value={state.product.categoryId}
                onChange={(e) => {
                  setState({
                    product: {
                      ...state.product,
                      categoryId: e.target.value,
                    },
                  });
                }}
              />
          <br />
          
          
          <label>Image URL</label>
          <input
            className="form-control"
            type="text"
            placeholder="http://imgurl"
            value={state.product.imgUrl}
            onChange={(e) => {
              setState({
                product: {
                  ...state.product,
                  imgUrl: e.target.value,
                },
              });
            }}
          />
          <br />
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addProducts(state.product))
            }}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}


export default AddProducts
