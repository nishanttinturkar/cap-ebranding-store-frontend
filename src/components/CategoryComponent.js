import React, { Component, useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import Category from '../model/Category';
import CategoryService from '../service/CategoryService'
import './myStyle.css'

class CategoryComponent extends Component {

    constructor() {
        super();

        this.state = {
            category: new Category(),
            categories: []
        };

        this.categoryService = new CategoryService();
    }

    componentDidMount() {
        this.categoryService
            .getAllCategories()
            .then((result) => {
                alert(JSON.stringify(result));
                this.setState({ categories: result.data });
            })
            .catch((error) => {
                alert(error);
            });
    }


    render() {

        return (
            <div>
                <div>
                    {this.state.categories.length > 0 ? (
                        <div className="container">
                            <h1>Category</h1>
                            &nbsp;
                           
                                <div className="my-3">
                                    {this.state.categories.map((cat) => {
                                       return <div className="card md-4" style={{ width: "10rem" }} key={cat.id}>
                                            <img src={cat.imgUrl} className="card-img-top" alt="Apparel"></img>
                                            <div className="card-body md-4">
                                                <h5 className="card-title">{cat.name}</h5>
                                                <p className="card-text">{cat.description}</p>
                                                <a href="/categories" className="btn btn-sm btn-primary">Show products</a>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                       
                    ) : (
                        <div>No Category Found</div>
                    )}
                </div>
            </div>
        )
    }
}

export default CategoryComponent
