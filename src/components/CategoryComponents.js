import React, { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const CategoryComponents = (props) => {
  let { id, name, description, imgUrl } = props;
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col my-4">
        <div className="card">
          <img
            src={imgUrl}
            className="card-img-top"
            height={200}
            width={100}
            alt="Apparel"
          />
          <div className="card-body" md-4>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                navigate("/product/category/" + id);
              }}
            >
              Show Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponents;
