import React from "react";
import Header from "../components/Header";
import Admin from "./Admin";
import Authentication from "./Authentication";
import Cart from "../components/Cart";
import Home from "./Home";
import Order from "./Order";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ManageUsers from "../components/ManageUsers";
import UpdateUser from "../components/UpdateUser";
import AddCategory from "../components/AddCategory";
import Address from "../components/Address";
import UpdateCategory from "../components/UpdateCategory";
import CategoryComponent from "../components/CategoryComponent";
import Vendor from "./Vendor";
import Profile from "../components/Profile";
import CategoryItems from "../components/CategoryItems";
import Categories from "./Categories";
import Payment from "../components/Payment";
import AddAddress from "../components/AddAddress";
import OrderPlaced from "../components/OrderPlaced";
import ViewProduct from "./ViewProduct";
import Product from "./Product";
import ViewItems from "./ViewItems";
import ProductByCategory from "../model/ProductByCategory";
import ProductComponent from "../components/ProductComponent";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
function Pages() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Authentication />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/orders/*" element={<Order />}></Route>
          <Route exact path="/orders/item/:id" element={<ViewItems />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/admin/*" element={<Admin />}></Route>
          <Route exact path="/vendor/*" element={<Vendor />}></Route>
          <Route exact path="/profile/*" element={<Profile />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/product/*" element={<Product />}></Route>
          <Route
            exact
            path="/vendor/add-product"
            element={<AddProduct />}
          ></Route>
          <Route
            exact
            path="/vendor/update-product/:id"
            element={<UpdateProduct />}
          ></Route>
          <Route
            exact
            path="/vendor/manage-products"
            element={<ProductComponent />}
          ></Route>
          <Route
            exact
            path="/product/view/:id"
            element={<ViewProduct />}
          ></Route>
          <Route
            exact
            path="/product/category/:id"
            element={<ProductByCategory />}
          ></Route>
          <Route exact path="/address/*" element={<Address />}></Route>
          <Route exact path="/address/add" element={<AddAddress />}></Route>
          <Route exact path="/order-placed" element={<OrderPlaced />}></Route>
          <Route
            exact
            path="/admin/manage-category"
            element={<CategoryComponent />}
          />
          <Route exact path="/categories/test" element={<Categories />} />
          <Route
            exact
            path="/categories/add-category"
            element={<AddCategory />}
          />

          <Route
            exact
            path="/admin/manage-users"
            element={<ManageUsers />}
          ></Route>
          <Route
            exact
            path="/admin/update-user/:id"
            element={<UpdateUser />}
          ></Route>
          <Route
            exact
            path="/categories/update-category/:id"
            element={<UpdateCategory />}
          />
          <Route exact path="/categories/*" element={<CategoryItems />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Pages;
