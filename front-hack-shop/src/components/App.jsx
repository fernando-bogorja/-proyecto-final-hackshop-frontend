import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NavBar from "./Partials/NavBar";
import Footer from "./Partials/Footer";
import DashBoard from "./Miscellaneous/DashBoard/DashBoard";
import UserListIndex from "./Miscellaneous/DashBoard/userList/UserListIndex";
import UserIndex from "./Miscellaneous/DashBoard/user/UserIndex";
import NewUserIndex from "./Miscellaneous/DashBoard/newUser/NewUserIndex";
import ProductListIndex from "./Miscellaneous/DashBoard/productlist/ProductListIndex";
import NewProductIndex from "./Miscellaneous/DashBoard/newProduct/NewProductIndex";
import Product from "./Miscellaneous/DashBoard/product/Product";
import AboutUs from "./Pages/AboutUs";
import SignIn from "./Pages/Signin";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector(state => state.user);
  if (!user.token) {
    return <SignIn />;
  }
  return (
    <div className="App">
      {/* SIGNIN / SIGNUP ROUTES */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/listusers" element={<UserListIndex />} />
        <Route path="/user/:userid" element={<UserIndex />} />
        <Route path="/newUser" element={<NewUserIndex />} />
        <Route path="/listproducts" element={<ProductListIndex />} />
        <Route path="/newProduct" element={<NewProductIndex />} />
        <Route path="/theproduct/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
