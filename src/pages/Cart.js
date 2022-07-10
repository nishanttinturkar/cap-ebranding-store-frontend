import React from "react";
import CartNav from "../components/CartNav";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Address from "../components/Address";

function Cart() {
  return (
    <div className="container">
      <CartNav />

      <Address />
    </div>
  );
}

export default Cart;
