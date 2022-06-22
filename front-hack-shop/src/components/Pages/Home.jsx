import React from "react";
import {
  productsApi,
  useGetAllProductsQuery,
} from "../../redux/api-requests/products-req";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

//Components
import Carousel from "../Miscellaneous/Carousel/Carousel";
import ProductCard from "../Miscellaneous/ProductCard/ProductCard";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = product => {
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
            <Carousel category="Productos destacados">
              {data.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Carousel>
            <Carousel category="Añadidos recientemente">
              {data.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
