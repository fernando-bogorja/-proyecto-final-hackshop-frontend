import React from "react";
import { Box } from "@mui/material";
//import { useState, useEffect } from "react";
//import axios from "axios";
//Components
import { NavLink } from "react-router-dom";
import Carousel from "../miscellaneous/Carousel/Carousel";
import ProductCard from "../miscellaneous/ProductCard/ProductCard";
import Header from "../partials/Header";
import useGetProducts from "../../hooks/useGetProducts";
import BannerPhotos from "../miscellaneous/BannerPhotos/BannerPhotos";
import Typography from "@mui/material/Typography";
import { currentTheme as theme, effects } from "../../theme";
import Loader from "../miscellaneous/Loader";

const Home = () => {
  const [products, categories, isLoading] = useGetProducts();
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Header />
            <BannerPhotos />
            <React.Suspense fallback={<Loader />}>
              {categories.map(category => (
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  py="2rem"
                  sx={{
                    backgroundColor: theme.white,
                  }}
                  key={category._id}
                >
                  <Box
                    id={category.name}
                    width="80%"
                    sx={{ borderRadius: "5px" }}
                  >
                    <Carousel key={category.name} category={category.name}>
                      {products
                        .filter(
                          product => product.category._id === category._id
                        )
                        .map(product => (
                          <ProductCard key={product._id} product={product} />
                        ))}
                    </Carousel>
                  </Box>
                </Box>
              ))}
            </React.Suspense>
          </Box>
        </>
      )}
    </div>
  );
};

export default Home;
