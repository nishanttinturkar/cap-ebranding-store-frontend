import React from "react";
import { useNavigate, useParams } from "react-router";
import Product from "../model/Product";
import ProductService from "../service/ProductService";
import { Link } from "react-router-dom";

function UpdateProduct() {
  const navigate = useNavigate();
  let service = new ProductService();
  const [state, setState] = useState({ product: new Product() });
  const { id } = useParams();
  useEffect(() => {
    service
      .getProductById(id)
      .then((result) => {
        alert("inside updated" + JSON.stringify(result.data));
        setState({ product: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="container">
      <form>
        <div>
          <h2>Update Product</h2>
          <div className="row">
            <div className="col">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                id="name"
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
            <div className="col">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                id="description"
                //placeholder="Deo"
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
          </div>
          <br />
          <label>Vendor Id</label>
          <input
            className="form-control"
            type="number"
            id="vendor Id"
            value={state.Product.vendorId}
            onChange={(e) => {
              setState({
                Product: {
                  ...state.product,
                  userId: e.target.value,
                },
              });
            }}
          />
          <br />

          {/* <div className="col">
              <label>Price</label>
              <input
                className="form-control"
                type="text"
                id="description"
                //placeholder="Deo"
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
          <br /> */}

          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              service
                .updateProduct(state.product)
                .then(() => {
                  alert("Product updated into db.");
                  setState({ product: new Product() });
                  navigate("/products");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }}
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
