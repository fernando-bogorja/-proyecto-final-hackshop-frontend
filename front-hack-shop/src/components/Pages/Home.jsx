import React from "react";
import Container from "@mui/material/Container";
//import { useState, useEffect } from "react";
//import axios from "axios";
//Components
import Carousel from "../Miscellaneous/Carousel/Carousel";
import ProductCard from "../Miscellaneous/ProductCard/ProductCard";
import Header from "../Partials/Header";
import useGetProducts from "../../Hooks/useGetProducts";
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
  const categories = ["Butacas", "Mesas", "Bibliotecas", "Racks", "Sofás"];
  const [products, isLoading] = useGetProducts();
  return (
    <div className="div">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Header />
            <Container maxWidth="xl">
              {categories.map((category, index) => (
                <Carousel key={index} category={category}>
                  {products
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
