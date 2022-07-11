import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Product from "../model/Product"
import ProductService from "../service/ProductService"
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../redux/product/productAction"

function AddProducts() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let service = new ProductService();
    const [state, setState] = useState({ product: new Product() });
    const [value, setValue] = useState("");

    const handleChange = (categoryId) => {
      setValue(value);
    };
    return (
        <div>
            <div className="container my-4">
                <h2>Create Product</h2>
                <div className="card">
                    <form>
                        <div>
                            <div className="row" >
                                <div className="col m-3">
                                    <label>Product name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Headphone"
                                        value={state.product.name}
                                        onChange={(e) => {
                                            setState({
                                                product: {
                                                    ...state.product,
                                                    name: e.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                                <div className="col m-3">
                                    <label>Product description</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="product description"
                                        value={state.product.description}
                                        onChange={(e) => {
                                            setState({
                                                product: {
                                                    ...state.product,
                                                    description: e.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                                <div className="col m-3">
                                    <label>Price</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="1234"
                                        value={state.product.price}
                                        onChange={(e) => {
                                            setState({
                                                product: {
                                                    ...state.product,
                                                    price: e.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m-3">
                                    <label>Image URL</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="http://imgurl"
                                        value={state.product.imgUrl}
                                        onChange={(e) => {
                                            setState({
                                                product: {
                                                    ...state.product,
                                                    imgUrl: e.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m-3">
                                    <label>Vendor Id</label>
                                    <select
                                        name="vendorId"
                                        value={state.categoryId}
                                        onChange={() => handleChange()}
                                    >
                                        <option value="160">160</option>
                                        <option value="102">102</option>
                                        <option value="103">103</option>
                                        <option value="104">104</option>
                                        <option value="105">105</option>
                                    </select>
                                </div>
                                <div className="col m-3">
                                    <label>category Id</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="1234"
                                        value={state.product.categoryId}
                                        onChange={(e) => {
                                            setState({
                                                product: {
                                                    ...state.product,
                                                    categoryId: e.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                                <div className="col m-3">
                                    <label>Created at</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={state.product.createdAt}
                                        onChange={(e) => {
                                            setState({
                                                product: {
                                                    ...state.product,
                                                    createdAt: e.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                                <div className="col m-3">
                                    <label>Modified at</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={state.product.modifiedAt}
                                        onChange={(e) => {
                                            setState({
                                                product: {
                                                    ...state.product,
                                                    modifiedAt: e.target.value,
                                                },
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m-3">
                                    <button
                                        className="btn btn-outline-primary mt-3"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(addProducts(state.product))
                                        }}
                                    >Add Product
                                    </button>
                                </div>  
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AddProducts