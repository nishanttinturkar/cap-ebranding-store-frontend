import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductItems from "./page/ProductItems";
import ProductDetails from "./page/productDetails";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<AddProduct />} />
          <Route exact path="/products" element={<ProductItems />} />
          {/* <Route exact path="/products/details " element={<ProductDetails />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
