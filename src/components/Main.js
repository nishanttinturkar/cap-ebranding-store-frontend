import React from "react";
import axios from "axios";
import Product from "../model/Product";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      product: new Product(),
      Products: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8091/store/product`)
      .then((result) => {
        alert(JSON.stringify(result));
        this.setState({ Products: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>
          <span className="badge badge-primary">Product Form</span>
        </h2>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="user Id"
              value={this.state.User.userId}
              onChange={(e) => {
                this.setState({
                  user: { ...this.state.user, id: e.target.value },
                });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Main;
