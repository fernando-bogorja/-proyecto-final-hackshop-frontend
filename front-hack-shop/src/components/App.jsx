import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashboardMain from "./Miscellaneous/Dashboard/views/Main/Main";
import Cart from "./Pages/Cart";
import NavBar from "./Partials/NavBar";
import Footer from "./Partials/Footer";
import Dashboard from "./Miscellaneous/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs";
import SignIn from "./Pages/Signin";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
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
        <Route
          path="/dashboard"
          element={<Dashboard component={<DashboardMain />} />}
        />
        <Route path="/dashboard/products" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
