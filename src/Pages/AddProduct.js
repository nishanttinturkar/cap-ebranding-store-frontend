import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Product from "../model/Product";
import ProductService from "../service/ProductService";

import { useDispatch } from "react-redux";
import { addProducts } from "../redux/product/productAction"

function AddProduct() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let service = new ProductService();
  
  const [state, setState] = useState({ product: new Product() });
  const [prodNameErr, setProductnameErr] = useState("");
  const [prodDescriptionErr, setProductDescriptionErr] = useState("");
  const [prodImgUrlErr, setProductImgUrlErr] = useState("");
  const [prodVendorIdErr, setProductVendorIdErr] = useState("");
  const [prodPriceErr, setProductPriceErr] = useState("");
  const [prodCategoryIdErr, setCategoryIdErr] = useState("");
  const [value, setValue] = useState("");
  const formValidation = () => {
    // alert("Validation");
    let isValid = true;
    const prodNameErr = {};
    const prodDescriptionErr = {};
    const prodImgUrlErr = {};
    const prodVendorIdErr = {};
    const prodPriceErr = {};
    // const prodCategoryIdErr = {};
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
    if (state.product.vendorId.trim().length <= 0) {
      prodVendorIdErr.prodVendorIdRequired = "vendor Id is required";
      isValid = false;
    }
    // if (state.product.categoryId.trim().length <= 0) {
    //   prodcategoryIdErr.prodCategoryIdRequired = "category Id is required";
    //   isValid = false;
    // }
    if (state.product.price.trim().length <= 0) {
      prodPriceErr.prodPriceRequired = "Price is required";
      isValid = false;
    }
    setProductnameErr(prodNameErr);
    setProductDescriptionErr(prodDescriptionErr);
    setProductImgUrlErr(prodImgUrlErr);
    setProductVendorIdErr(prodVendorIdErr);
    setProductPriceErr(prodPriceErr);
    // setCategoryIdErr(prodCategoryIdErr);
    return isValid;
  };

  const handleChange = (categoryId) => {
    setValue(value);
  }
  return (
    <div>

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
                    type="number"
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
                  <label>Vendor Id</label>
                  <input
                    className="form-control "
                    type="number"
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
                  {Object.keys(prodVendorIdErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{prodVendorIdErr[key]}</div>
                    );
                  })}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col m-3">
                  <label>Category Id</label>
                  {/* <select 
                  name = "categoryId"
                  value = {state.product.categoryId}
                  onChange={(e) => {
                    setState({
                      product: {
                        ...state.product,
                        categoryId: e.target.value,
                      },
                    });
                  }}>
                  <option value = "160">160</option>
                  <option value = "161">161</option>
                  <option value = "162">162</option>
                  <option value = "163">163</option>
                  </select> */}
                  <select
                            className="form-control my-2"
                            value={state.employee.department.departmentId}
                            onChange={(event) =>
                                setState({ employee: { ...state.employee, department: { ...state.employee.department, departmentId: event.target.value } } })
                            }
                        >
                            {departments.map((dept) => (
                                <option key={dept.value} value={dept.value}>
                                    {dept.display}
                                </option>
                            ))}
                        </select>
                </div>
              </div>
              <button
                className="btn btn-outline-primary m-3"
                onClick={(e) => {
                  e.preventDefault();
                  let isValid = formValidation();
                  if (!isValid) {
                    return false;
                  } else {

                      dispatch(addProducts(state.product))
                      .then((result) => {
                        alert("Product added!");
                        navigate("/prodcuts");
                      })
                      .catch((error2) => {
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