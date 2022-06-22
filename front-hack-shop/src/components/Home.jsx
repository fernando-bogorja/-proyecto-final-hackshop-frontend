import React from "react";
import { productsApi, useGetAllProductsQuery } from "../features/productsApi";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); //ejecutar el slice addToCart para agregar item al carrito
    // console.log("---", window.localStorage.getItem("cartItems"));
    navigate("/cart"); // redireccion a carrito
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An Error Occured...</p>
      ) : (
        <>
          <div>
            <h1>All products Lists</h1>
            <div>
              {data?.map((product) => (
                <div key={product.id}>
                  <h3>{productsApi.name}</h3>
                  <div>
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div>
                    <h6>{product.description}</h6>
                    <h6>${product.price}</h6>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
