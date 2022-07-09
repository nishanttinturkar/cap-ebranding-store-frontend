import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import isURL from "validator/lib/isURL";
import Category from "../model/Category";
import CategoryService from "../service/CategoryService";
import Header from "./Header";
import {useDispatch } from "react-redux";
import { addCategory } from "../redux/category/categoryActions";



function AddCategory() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let service = new CategoryService();
  const [state, setState] = useState({ category: new Category() });
  const [catNameErr, setCategorynameErr] = useState("");
  const [catDescriptionErr, setCategoryDescriptionErr] = useState("");
  const [catImgUrlErr, setCategoryImgUrlErr] = useState("");
  const [catUserIdErr, setCategoryUserIdErr] = useState("");

  const formValidation = () => {
    let isValid = true;
    const catNameErr = {};
    const catDescriptionErr = {};
    const catImgUrlErr = {};
    const catUserIdErr = {};
   
    if (state.category.name.trim().length <= 0) {
      catNameErr.catNameRequired = "Name is required";
      isValid = false;
    }
    if (state.category.description.trim().length <= 0) {
      catDescriptionErr.catDescriptionRequired = "Description is required";
      isValid = false;
    }
    if (state.category.imgUrl.length === 0 ) {
      catImgUrlErr.catImgUrlRequired = "Image is required";
      isValid = false;
    }
    if (state.category.userId.trim().length <= 0) {
      catUserIdErr.catUserIdRequired = "User Id is required";
      isValid = false;
    }
    

    setCategorynameErr(catNameErr);
    setCategoryDescriptionErr(catDescriptionErr);
    setCategoryImgUrlErr(catImgUrlErr);
    setCategoryUserIdErr(catUserIdErr);
    return isValid;
  }

  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="card " >
          <form>
            <div>
              <h2>Create Category</h2>
              <div className="row" >
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
                    return <div style={{ color: "red" }}>{catNameErr[key]}</div>
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
                    return <div style={{ color: "red" }}>{catDescriptionErr[key]}</div>
                  })}
                </div>
                <div className="col m-3">
                  <label>Image Url</label>
                  <input
                    className="form-control"
                    type="url" required
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
                    return <div style={{ color: "red" }}>{catImgUrlErr[key]}</div>
                  })}
                </div>
              </div>
              <div className="row" >
                <div className="col m-3">
                  <label>User Id</label>
                  <input
                    className="form-control "
                    type="number"
                    //maxLength={10}
                    //placeholder="9876543210"
                    value={state.category.userId}
                    onChange={(e) => {
                      setState({
                        category: {
                          ...state.category,
                          userId: e.target.value,
                        },
                      });
                    }}
                  />
                  {Object.keys(catUserIdErr).map((key) => {
                    return <div style={{ color: "red" }}>{catUserIdErr[key]}</div>
                  })}
                </div>
              </div>
              <br />
              <button
                className="btn btn-outline-primary m-3"
                onClick={(e) => {
                  e.preventDefault();
                  let isValid = formValidation()
                  if (!isValid) {
                    return false;
                  } else {
                    service
                      .addCategory(state.category)
                      .then((result) => {
                        alert("Category added!");
                        navigate("/categories");
                      })
                      .catch((error2) => {
                        alert(error2);
                      });
                      dispatch(addCategory(state.category))
                  }
                }}>Add Category</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCategory: (cat) => { dispatch(addCategory(cat))},
//   };
// };


// export default connect(null, mapDispatchToProps)(AddCategory);

export default AddCategory