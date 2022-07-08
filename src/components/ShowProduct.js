import React, { Component } from "react";
import ProductService from "../Service/ProductService";
import product from "../model/Product";

class ShowProduct extends Component {
  constructor() {
    super();

    this.state = {
      product: new product(),
      products: [],
    };
    this.productService = new ProductService();
  }
  componentDidMount() {
    this.productService
      .getAllProduct()
      .then((result) => {
        alert(JSON.stringify(result));
        this.setState({ product: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.products.length > 0 ? (
            <table className="">
              <tr>
                <th>Image Url</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Vendor Id</th>
                <th>created At</th>
                <th>category Id</th>
              </tr>
              <tbody>
                {this.getSnapshotBeforeUpdate.products.map((prod) => (
                  <tr>
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
  }
}

export default ShowProduct;
