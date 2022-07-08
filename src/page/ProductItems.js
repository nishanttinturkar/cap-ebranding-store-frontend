import React, { Component } from "react";
import Header from "../Components/Header";
import Product from "../model/Product";
import ProductService from "../service/ProductService";
import ProductComponents from "./ProductComponents";

export class ProductItems extends Component {
  constructor() {
    super();
    this.state = {
      // Product: new Product(),
      products: [],
    };

    this.ProductService = new ProductService();
  }

  async componentDidMount() {
    this.ProductService.getAllProduct()
      .then((result) => {
        // alert(JSON.stringify(result));
        this.setState({ products: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h2> Product </h2>
          <div className="row">
            {this.state.products.map((prod) => {
              return (
                <div className="col-md-3">
                  <ProductComponents
                    name={prod.name}
                    description={prod.description}
                    imgUrl={prod.imgUrl}
                    price={prod.price}
                  />
                </div>
              );
            })}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItems;
