import React from "react";
import Header from "../components/Header";
// import Admin from "./Admin";
// import Authentication from "./Authentication";
// import Cart from "./Cart";
// import Home from "./Home";
// import Order from "./Order";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import ManageUsers from "../components/ManageUsers";
// import UpdateUser from "../components/UpdateUser";
import ShowProduct from "../components/ShowProduct";
import ViewProduct from "./ViewProduct";

function Pages() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          {/* <Route exact path="/" element={<Authentication />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/orders" element={<Order />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/admin/*" element={<Admin />}></Route> */}
          <Route exact path="/product/*" element={<ShowProduct />}></Route>
         
          

          {/* <Route
            exact
            path="/admin/manage-users"
            element={<ManageUsers />}
          ></Route>
          <Route
            exact
            path="/admin/update-user/:id"
            element={<UpdateUser />}
          ></Route> */}
          <Route
            exact
            path="/product/view/:id"
            element={<ViewProduct/>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Pages;