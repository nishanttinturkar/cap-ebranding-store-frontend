import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Link } from "react-router-dom";
import Category from '../model/Category';
import CategoryService from '../service/CategoryService';

function UpdateCategory() {
  const navigate = useNavigate();
  let service = new CategoryService();
  const [state, setState] = useState({ category: new Category() });
  const { id } = useParams();
  useEffect(() => {
    service.getCategoryById(id).then((result) => {
        alert("inside updated"+JSON.stringify(result.data));
        setState({ category: result.data })
    }).catch((error) => {
        alert(error);
    });
  }, [] );
  
  return (
    <div className="container">
      <form>
        <div>
          <h2>Update Category</h2>
          <div className="row">
            <div className="col">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                id='name'
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
            </div>
            <div className="col">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                id='description'
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
            </div>
          </div>
          <br />
          <label>User Id</label>
          <input
            className="form-control"
            type="number"
            id='userId'
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
          <br />
          
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              service
                .updateCategory(state.category)
                .then(() => {
                  alert("Category updated into db.");
                  setState({ category: new Category() })
                  navigate("/categories");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }}
            >Update Category</button>
            {/* <Link className="btn btn-outline-primary mt-3 ml-3" to='/category'>Cancel</Link> */}
        </div>
      </form>
    </div>
  );
}

export default UpdateCategory
