import React, { Component } from "react";
import productDetails from "./productDetails";

class ProductComponents extends Component {
  render() {
    let { name, description, imgUrl, price } = this.props;
    return (
      <div className="product-container">
        <div className="col-md-12">
          <div className="card p-2">
            <img
              src={imgUrl}
              width="200"
              height="205"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" md-6>
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description.slice(0, 65)}...</p>
              <b>
                {"\u20B9"}
                {price}
              </b>
              <a
                href="./productDetails.js"
                target="_blank"
                className="btn btn-primary"
              >
                Product Details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductComponents;
