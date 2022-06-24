import React from "react";
import { useGetAllProductsQuery } from "../../redux/api-requests/products-req";
import Container from "@mui/material/Container";

//Components
import Carousel from "../Miscellaneous/Carousel/Carousel";
import ProductCard from "../Miscellaneous/ProductCard/ProductCard";
import Header from "../Partials/Header";

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
                    .filter(product => product.category === category)
                    .map(product => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </Carousel>
              ))}
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
