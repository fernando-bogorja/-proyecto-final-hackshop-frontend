import React from "react";
import { useGetAllProductsQuery } from "../../redux/api-requests/products-req";
import Container from "@mui/material/Container";
//import { useState, useEffect } from "react";
//import axios from "axios";
//Components
import Carousel from "../Miscellaneous/Carousel/Carousel";
import ProductCard from "../Miscellaneous/ProductCard/ProductCard";
import Header from "../Partials/Header";
import { Link } from "react-router-dom";
import BannerPhotos from "../Miscellaneous/BannerPhotos/BannerPhotos";

const Loader = () => {
  return (
    <div className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const categories = ["Butacas", "Mesas", "Bibliotecas", "Racks", "Sofás"];
  /*
//Llamada a la api por axios asi no se guarda en la store
  let urlGet = "http://localhost:3001/api/products";
  const [allProducts, setAllProducts] = useState([]);
  const marta = async () => {
    try {
      const response = await axios.get(urlGet);
      console.log("algo hace");
      return setAllProducts(response.data.data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  useEffect(() => {
    marta();
  }, []);
*/
  return (
    <div className="div">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Loader />
      ) : (
        <>
          <div>
            <Header />
            <Container maxWidth="xl">
              {categories.map((category, index) => (
                <Carousel key={index} category={category}>
                  {data
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </Carousel>
              ))}
            </Container>
            <BannerPhotos />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
