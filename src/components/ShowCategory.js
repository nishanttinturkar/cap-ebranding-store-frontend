import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Category from "../model/Category";
import { fetchCategory } from "../redux/category/categoryActions";
import CategoryService from "../service/CategoryService";

const ShowCategory =() =>{
  let dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
   
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);


    return (
      <div>
        <div>
          {categories.length > 0 ? (
            <table className="table table-bordered" >
              <thead>
              <tr>
                <th>Category Name</th>
                <th>Category Description</th>
                <th>Image Url</th>
              </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat}>
                    <td>{cat.name}</td>
                    <td>{cat.description}</td>
                    <td>{cat.imgUrl}</td>
                    <td><Link className="btn btn-warning" to={{ pathname: `/categories/update-category/${cat.id}` }}>Update</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No Category Found</div>
          )}
        </div>
      </div>
    );
}

export default ShowCategory;
