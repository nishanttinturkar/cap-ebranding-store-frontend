import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/product/productAction";

function ProductByCategory() {
  const { products } = useSelector((state) => state.products);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container">
      <div className="row m-4">
        {products
          .filter((prod) => prod.categoryId == id)
          .map((product) => {
            return (
              <div className="col-3">
                <div className="card p-2">
                  <img
                    src={product.imgUrl}
                    width="200"
                    height="200"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body" md-6>
                    <h5 className="card-title">
                      {product.name.slice(0, 15)}...
                    </h5>
                    <p className="card-text">
                      {product.description.slice(0, 30)}...
                    </p>
                    <b className="left">
                      {"\u20B9"}
                      {product.price}
                    </b>
                    <button
                      className="btn btn-outline-primary m-2 right"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/product/view/" + product.id);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ProductByCategory;
