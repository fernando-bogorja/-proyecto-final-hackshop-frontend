import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashboardMain from "./Miscellaneous/Dashboard/views/Main/Main";
import Cart from "./Pages/Cart";
import NavBar from "./Partials/NavBar";
import Footer from "./Partials/Footer";
import Product from "./Pages/Product";
import Dashboard from "./Miscellaneous/Dashboard/DashBoard";
import AboutUs from "./Pages/AboutUs";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Checkout from "./Pages/Checkout";
import ProductList from "./Miscellaneous/ProductList/ProductList";
import Categories from "./Miscellaneous/Dashboard/Categories/Categories";
import UserList from "./Miscellaneous/Dashboard/userList/UserList";
import CreateUserForm from "./Miscellaneous/CreateUserForm/CreateUserForm";
import CreateProductForm from "./Miscellaneous/CreateProductForm/CreateProductForm";
import { useSelector } from "react-redux";
import ContextMenu from "./Miscellaneous/ContextMenu/ContextMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Henri from "./Miscellaneous/Henri";
import AboutPopUp from "./Partials/AboutPopUp";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";

function App() {
  const user = useSelector(state => state.user);
  return (
    <div className="App">
      {/* SIGNIN / SIGNUP ROUTES */}
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
        <Route
          path="/dashboard"
          element={
            <Dashboard component={<DashboardMain />} token={user.token} />
          }
        />
        <Route path="/checkout" element={<Checkout />} token={user.token} />
        <Route
          path="/dashboard/products"
          element={<Dashboard component={<ProductList />} token={user.token} />}
        />
        <Route
          path="/dashboard/categories"
          element={<Dashboard component={<Categories />} token={user.token} />}
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
        <Route path="/henri" element={<Henri />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
