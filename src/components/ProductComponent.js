import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteProduct,
  fetchProducts,
  getProductById,
} from "../redux/product/productAction";
import Header from "./Header";

const ProductComponent = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let userId = localStorage.getItem("userID");
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="container ">
      <div>
        <h3>Manage Product</h3>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(`/vendor/add-product`)}
        >
          Add Product
        </button>
        <div className="row">
          <div className="row my-3">
            {products
              .filter((prod) => prod.vendorId == userId)
              .map((cat) => (
                <div className="col">
                  <div className="card mb-3" style={{ width: "540px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={cat.imgUrl}
                          className="img-fluid rounded-start"
                          alt={cat.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body md-4">
                          <h5 className="card-title">{cat.name}</h5>
                          <p className="card-text">{cat.description}</p>
                          <div className="row">
                            <div className="col">
                              <button
                                className="btn btn-outline-warning"
                                onClick={() =>
                                  navigate(`/vendor/update-product/${cat.id}`)
                                }
                              >
                                Update
                              </button>
                            </div>
                            <div className="col">
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => handleDelete(cat.id)}
                              >
                                Delete
                              </button>
                            </div>
                            <div className="col">
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => navigate(`/products`)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductComponent;
