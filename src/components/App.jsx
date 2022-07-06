import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardMain from "./miscellaneous/Dashboard/views/Main/Main";
import Cart from "./pages/Cart";
import NavBar from "./partials/NavBar";
import Footer from "./partials/Footer";
import Product from "./pages/Product";
import Dashboard from "./miscellaneous/Dashboard/Dashboard";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import ProductList from "./miscellaneous/ProductList/ProductList";
import Categories from "./miscellaneous/Dashboard/Categories/Categories";
import UserList from "./miscellaneous/Dashboard/userList/UserList";
import CreateUserForm from "./miscellaneous/CreateUserForm/CreateUserForm";
import CreateProductForm from "./miscellaneous/CreateProductForm/CreateProductForm";
import { useSelector } from "react-redux";
import ContextMenu from "./miscellaneous/ContextMenu/ContextMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPopUp from "./partials/AboutPopUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Address from "./pages/Address";

function App() {
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <div className="App">
      {/* SIGNIN / SIGNUP ROUTES */}
      <div className="div">
        <ToastContainer />
        <ContextMenu />
        <AboutPopUp />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/address" element={<Address />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard component={<DashboardMain />} token={user.token} />
            }
          />
          <Route path="/checkout" element={<Checkout />} token={user.token} />
          <Route
            path="/dashboard/products"
            element={
              <Dashboard component={<ProductList />} token={user.token} />
            }
          />
          <Route
            path="/dashboard/categories"
            element={
              <Dashboard component={<Categories />} token={user.token} />
            }
          />
          <Route
            path="/dashboard/users"
            element={<Dashboard component={<UserList />} token={user.token} />}
          />
          <Route
            path="/dashboard/createUserForm"
            element={
              <Dashboard component={<CreateUserForm />} token={user.token} />
            }
          />
          <Route
            path="/dashboard/createProductForm"
            element={
              <Dashboard component={<CreateProductForm />} token={user.token} />
            }
          />
          <Route path="/dashboard/products" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
