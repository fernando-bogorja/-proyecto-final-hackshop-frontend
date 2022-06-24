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
              <Carousel category="Añadidos recientemente">
                {data.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Carousel>
              <Carousel category="Añadidos recientemente">
                {data.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Carousel>
              <Carousel category="Añadidos recientemente">
                {data.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Carousel>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
