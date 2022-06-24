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
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/listusers" element={<UserListIndex />} />
        <Route path="/user/:userid" element={<UserIndex />} />
        <Route path="/newUser" element={<NewUserIndex />} />
        <Route path="/listproducts" element={<ProductListIndex />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
