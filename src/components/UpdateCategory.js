import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Category from "../model/Category";
import {
  getCategoryById,
  updateCategory,
} from "../redux/category/categoryActions";
import CategoryService from "../service/CategoryService";

function UpdateCategory() {
  const navigate = useNavigate();
  let service = new CategoryService();
  let dispatch = useDispatch();
  const [state, setState] = useState({ category: new Category() });
  const { category } = useSelector((state) => state.categories);
  const { id } = useParams();
  const [catNameErr, setCategorynameErr] = useState("");
  const [catDescriptionErr, setCategoryDescriptionErr] = useState("");
  const [catImgUrlErr, setCategoryImgUrlErr] = useState("");
  useEffect(() => {
    dispatch(getCategoryById(id));
  }, []);

  useEffect(() => {
    console.log(category);
    if (category) {
      setState({ category: category });
    }
  }, [category]);

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
    <div className="container my-4">
      <div className="card ">
        <form>
          <div>
            <h2>Update Category</h2>
            <div className="row">
              <div className="col m-3">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  //placeholder="Jhon"
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
                  return <div style={{ color: "red" }}>{catNameErr[key]}</div>;
                })}
              </div>
              <div className="col m-3">
                <label>Description</label>
                <input
                  className="form-control"
                  type="text"
                  id="description"
                  //placeholder="Deo"
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
                    <div style={{ color: "red" }}>{catDescriptionErr[key]}</div>
                  );
                })}
              </div>
            </div>
            <div className="row">
              <div className="col m-3">
                <label>Image Url</label>
                <input
                  className="form-control"
                  type="text"
                  id="imgUrl"
                  placeholder="https://sample.jpg"
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
              className="btn btn-outline-warning m-3"
              onClick={(e) => {
                e.preventDefault();
                let isValid = formValidation();
                if (!isValid) {
                  return false;
                } else {
                  dispatch(updateCategory(state.category));
                  navigate("/admin/manage-category");
                }
              }}
            >
              Update Category
            </button>
            <Link className="btn btn-outline-primary m-3" to="/categories">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCategory;
