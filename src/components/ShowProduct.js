import React, { Component, useEffect } from "react";
import ProductService from "../Service/ProductService";
import product from "../model/Product";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/product/productAction";

const ShowProduct = () => {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div>
        {products.length > 0 ? (
          <table className="table table-borderd">
            <thead>
              <tr>
                <th>Image Url</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Vendor Id</th>
                <th>created At</th>
                <th>category Id</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod}>
                  <td>prod.imgUrl</td>
                  <td>prod.name</td>
                  <td>prod.description</td>
                  <td>prod.Price</td>
                  <td>prod.vendorId</td>
                  <td>prod.createdAt</td>
                  <td>prod.categoryId</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No Product Found</div>
        )}
      </div>
    </div>
  );
};

export default ShowProduct;
