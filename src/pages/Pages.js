import React from "react";
import Header from "../components/Header";
import Admin from "./Admin";
import Authentication from "./Authentication";
import Cart from "./Cart";
import Home from "./Home";
import Order from "./Order";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Pages() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/login" element={<Authentication />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/orders" element={<Order />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Pages;
