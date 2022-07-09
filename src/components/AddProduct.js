import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Product from "../model/Product";
import ProductService from "../service/ProductService";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/productAction";

function AddProduct() {
  const navigate = useNavigate();
  let service = new ProductService();
  const [state, setState] = useState({ product: new Product() });
  const [prodNameErr, setProductnameErr] = useState("");
  const [prodDescriptionErr, setProductDescriptionErr] = useState("");
  const [prodImgUrlErr, setProductImgUrlErr] = useState("");
  const [prodUserIdErr, setProductUserIdErr] = useState("");
  const [prodPriceErr, setProductPriceErr] = useState("");

  const formValidation = () => {
    alert("Validation");
    let isValid = true;
    const prodNameErr = {};
    const prodDescriptionErr = {};
    const prodImgUrlErr = {};
    const prodUserIdErr = {};
    const prodPriceErr = {};

    if (state.product.name.trim().length <= 0) {
      prodNameErr.prodNameRequired = "Name is required";
      isValid = false;
    }
    if (state.product.description.trim().length <= 0) {
      prodDescriptionErr.prodDescriptionRequired = "Description is required";
      isValid = false;
    }
    if (state.product.imgUrl.length === 0) {
      prodImgUrlErr.prodImgUrlRequired = "Image is required";
      isValid = false;
    }
    if (state.product.userId.trim().length <= 0) {
      prodUserIdErr.prodUserIdRequired = "User Id is required";
      isValid = false;
    }
    if (state.product.price.trim().length <= 0) {
      prodPriceErr.prodPriceRequired = "Price is required";
      isValid = false;
    }
    setProductnameErr(prodNameErr);
    setProductDescriptionErr(prodDescriptionErr);
    setProductImgUrlErr(prodImgUrlErr);
    setProductUserIdErr(prodUserIdErr);
    setProductPriceErr(prodPriceErr);
    return isValid;
  };

  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="card ">
          <form>
            <div>
              <h2>Create Product</h2>
              <div className="row">
                <div className="col m-3">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Product"
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
                  {Object.keys(prodNameErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{prodNameErr[key]}</div>
                    );
                  })}
                </div>
                <div className="col m-3">
                  <label>Price</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Price"
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
                  {Object.keys(prodPriceErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{prodPriceErr[key]}</div>
                    );
                  })}
                </div>
                <div className="col m-3">
                  <label>Description</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="This is description for product"
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
                  {Object.keys(prodDescriptionErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>
                        {prodDescriptionErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="col m-3">
                  <label>Image Url</label>
                  <input
                    className="form-control"
                    type="url"
                    placeholder="URL"
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
                  {Object.keys(prodImgUrlErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{prodImgUrlErr[key]}</div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col m-3">
                  <label>User Id</label>
                  <input
                    className="form-control "
                    type="number"
                    value={state.product.userId}
                    onChange={(e) => {
                      setState({
                        product: {
                          ...state.product,
                          userId: e.target.value,
                        },
                      });
                    }}
                  />
                  {Object.keys(prodUserIdErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{prodUserIdErr[key]}</div>
                    );
                  })}
                </div>
              </div>
              <br />
              <button
                className="btn btn-outline-primary m-3"
                onClick={(e) => {
                  e.preventDefault();
                  let isValid = formValidation();
                  if (!isValid) {
                    return false;
                  } else {
                    service
                      .addProduct(state.product)
                      .then((result) => {
                        alert("Product added!");
                        navigate("/prodcuts");
                      })
                      .prodch((error2) => {
                        alert(error2);
                      });
                  }
                }}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
