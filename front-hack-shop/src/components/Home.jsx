import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
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
                  <h3>{product.name}</h3>
                  <div>
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div>
                    <h6>{product.description}</h6>
                    <h6>${product.price}</h6>
                  </div>
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
