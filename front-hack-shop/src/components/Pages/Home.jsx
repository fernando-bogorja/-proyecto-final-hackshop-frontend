import React from "react";
import { Container, Box } from "@mui/material";
//import { useState, useEffect } from "react";
//import axios from "axios";
//Components
import Carousel from "../Miscellaneous/Carousel/Carousel";
import ProductCard from "../Miscellaneous/ProductCard/ProductCard";
import Header from "../Partials/Header";
import useGetProducts from "../../Hooks/useGetProducts";
import BannerPhotos from "../Miscellaneous/BannerPhotos/BannerPhotos";
import Typography from "@mui/material/Typography";

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
  const [products, categories, isLoading] = useGetProducts();
  // console.log(useGetProducts());
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Header />
            <React.Suspense fallback={<Loader />}>
              {categories.map(category => (
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  key={category.id}
                  py={3}
                  sx={{
                    backgroundColor: "#fff",
                  }}
                >
                  <Box width="80%" sx={{ borderRadius: "5px" }}>
                    <Carousel key={category._id} category={category.name}>
                      {products
                        .filter(
                          product => product.category._id === category._id
                        )
                        .map(product => (
                          <ProductCard product={product} />
                        ))}
                    </Carousel>
                  </Box>
                </Box>
              ))}
            </React.Suspense>
            {/* <BannerPhotos /> */}
          </Box>
        </>
      )}
    </div>
  );
};

export default Home;
