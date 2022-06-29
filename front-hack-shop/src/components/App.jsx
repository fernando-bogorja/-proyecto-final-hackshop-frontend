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
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user);
  if (!user.token) {
    return <SignIn />;
  }
  return (
    <div className="App">
      <Container maxWidth="xl">
        {/* SIGNIN / SIGNUP ROUTES */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <NavBar />
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
          <Route path="/dashboard/products" element={<Dashboard />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
