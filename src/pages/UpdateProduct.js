import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Product from "../model/Product";
import ProductService from "../service/ProductService";
import { fetchCategory } from "../redux/category/categoryActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  getProductById,
  updateProduct,
} from "../redux/product/productAction";

function UpdateProduct() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let userId = localStorage.getItem("userID");
  let service = new ProductService();
  const { categories } = useSelector((state) => state.categories);
  const { product } = useSelector((state) => state.products);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  useEffect(() => {
    console.log(product);
    setState({
      product: product,
    });
  }, [product]);

  const [state, setState] = useState({ product: new Product() });
  const [prodNameErr, setProductnameErr] = useState("");
  const [prodDescriptionErr, setProductDescriptionErr] = useState("");
  const [prodImgUrlErr, setProductImgUrlErr] = useState("");
  const [prodVendorIdErr, setProductVendorIdErr] = useState("");
  const [prodPriceErr, setProductPriceErr] = useState("");
  const [categoryErr, setCategoryErr] = useState("");
  const [value, setValue] = useState("");
  const formValidation = () => {
    const regex =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    // alert("Validation");
    let isValid = true;
    const prodNameErr = {};
    const prodDescriptionErr = {};
    const prodImgUrlErr = {};
    const prodPriceErr = {};
    const categoryErr = {};
    if (state.product.name.trim().length <= 3) {
      prodNameErr.prodNameRequired = "Name is cannot be too short!";
      isValid = false;
    }
    if (state.product.description.trim().length <= 5) {
      prodDescriptionErr.prodDescriptionRequired =
        "Description cannot be too short!";
      isValid = false;
    }
    if (
      state.product.imgUrl.length === 0 ||
      regex.test(state.product.imgUrl) === false
    ) {
      prodImgUrlErr.prodImgUrlRequired = "Image is required";
      isValid = false;
    }

    if (state.product.categoryId < 0) {
      categoryErr.categoryRequired = "category Id is required";
      isValid = false;
    }
    if (state.product.price.trim().length <= 0 || state.product.price < 1) {
      prodPriceErr.prodPriceRequired = "Price is required";
      isValid = false;
    }
    setProductnameErr(prodNameErr);
    setProductDescriptionErr(prodDescriptionErr);
    setProductImgUrlErr(prodImgUrlErr);
    setProductPriceErr(prodPriceErr);
    setCategoryErr(categoryErr);
    return isValid;
  };

  const handleChange = (categoryId) => {
    setValue(value);
  };

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

              <br />
              <div className="row">
                <div className="col m-3">
                  <label>Description</label>
                  <textarea
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
              </div>
              <div className="row">
                <div className="col m-3">
                  <label>Category Id</label>
                  <select
                    className="form-control my-2"
                    value={state.product.categoryId}
                    onChange={(event) =>
                      setState({
                        product: {
                          ...state.product,
                          categoryId: event.target.value,
                        },
                      })
                    }
                  >
                    <option key={0} value={-1}>
                      Select Category
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  {Object.keys(categoryErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{categoryErr[key]}</div>
                    );
                  })}
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
                    console.log("update id", state.product.id);
                    dispatch(updateProduct(state.product));
                    navigate("/vendor/manage-product");
                  }
                }}
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default UpdateProduct;
