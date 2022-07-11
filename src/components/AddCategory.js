import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Category from "../model/Category";
import CategoryService from "../service/CategoryService";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addCategory } from "../redux/category/categoryActions";

function AddCategory() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let service = new CategoryService();
  const [state, setState] = useState({ category: new Category() });
  const [catNameErr, setCategorynameErr] = useState("");
  const [catDescriptionErr, setCategoryDescriptionErr] = useState("");
  const [catImgUrlErr, setCategoryImgUrlErr] = useState("");

  const formValidation = () => {
    let isValid = true;
    const catNameErr = {};
    const catDescriptionErr = {};
    const catImgUrlErr = {};
    const regex =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (state.category.name.trim().length <= 1) {
      catNameErr.catNameRequired = "Name is required";
      isValid = false;
    }
    if (state.category.description.trim().length < 10) {
      catDescriptionErr.catDescriptionRequired = "Description is required";
      isValid = false;
    }
    if (
      state.category.imgUrl.trim().length === 0 ||
      regex.test(state.category.imgUrl) === false
    ) {
      catImgUrlErr.catImgUrlRequired = "Image is required";
      isValid = false;
    }

    setCategorynameErr(catNameErr);
    setCategoryDescriptionErr(catDescriptionErr);
    setCategoryImgUrlErr(catImgUrlErr);
    return isValid;
  };

  return (
    <div>
      <div className="container my-4">
        <div className="card ">
          <form>
            <div>
              <h2>Create Category</h2>
              <div className="row">
                <div className="col m-3">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Apparel"
                    value={state.category.name}
                    onChange={(e) => {
                      setState({
                        category: {
                          ...state.category,
                          name: e.target.value,
                        },
                      });
                    }}
                  />
                  {Object.keys(catNameErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{catNameErr[key]}</div>
                    );
                  })}
                </div>
                <div className="col m-3">
                  <label>Description</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="This is description for category"
                    value={state.category.description}
                    onChange={(e) => {
                      setState({
                        category: {
                          ...state.category,
                          description: e.target.value,
                        },
                      });
                    }}
                  />
                  {Object.keys(catDescriptionErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>
                        {catDescriptionErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="col m-3">
                  <label>Image Url</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL"
                    value={state.category.imgUrl}
                    onChange={(e) => {
                      setState({
                        category: {
                          ...state.category,
                          imgUrl: e.target.value,
                        },
                      });
                    }}
                  />
                  {Object.keys(catImgUrlErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{catImgUrlErr[key]}</div>
                    );
                  })}
                </div>
              </div>
              <br />
              <button
                className="btn btn-outline-success m-3"
                onClick={(e) => {
                  e.preventDefault();
                  let isValid = formValidation();
                  if (!isValid) {
                    return false;
                  } else {
                    dispatch(addCategory(state.category));
                    navigate("/categories");
                  }
                }}
              >
                Add Category
              </button>
              <Link className="btn btn-outline-danger m-3" to="/categories">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
