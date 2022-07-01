import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashboardMain from "./Miscellaneous/Dashboard/views/Main/Main";
import Cart from "./Pages/Cart";
import NavBar from "./Partials/NavBar";
import Footer from "./Partials/Footer";
import Product from "./Pages/Product";
import Dashboard from "./Miscellaneous/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs";
import Product3d from "./Pages/Product3d";
import SignIn from "./Pages/Signin";
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
function App() {
  const user = useSelector((state) => state.user);
  if (!user.token) {
    return <SignIn />;
  }
  return (
    <div className="App">
      {/* SIGNIN / SIGNUP ROUTES */}
      <ToastContainer />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <NavBar />
      <ContextMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/3ditem" element={<Product3d />} />
        <Route
          path="/dashboard"
          element={<Dashboard component={<DashboardMain />} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/dashboard/products"
          element={<Dashboard component={<ProductList />} />}
        />
        <Route
          path="/dashboard/categories"
          element={<Dashboard component={<Categories />} />}
        />
        <Route
          path="/dashboard/users"
          element={<Dashboard component={<UserList />} />}
        />
        <Route
          path="/dashboard/createUserForm"
          element={<Dashboard component={<CreateUserForm />} />}
        />
        <Route
          path="/dashboard/createProductForm"
          element={<Dashboard component={<CreateProductForm />} />}
        />
        <Route path="/dashboard/products" element={<Dashboard />} />
        <Route path="/henri" element={<Henri />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
