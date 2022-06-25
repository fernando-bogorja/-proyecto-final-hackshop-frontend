import { useGetSingleProductQuery } from "../../../../redux/api-requests/products-req";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  //let params = useParams();
  let params = "62b5d48e9b7e45396f527714";
  let asd = "2222";
  const marta = async () => {
    axios
      .get("http://localhost:3001/api/products/get?_id=" + params)
      .then((response) => {
        console.log("marta-----" + asd, response.data.data.name);
      });
  };
  useEffect(() => {
    marta();
  }, []);
  return (
    <div style={{ marginTop: 100 }}>
      <p>milanesa</p>
      <p>Rinconera</p>
    </div>
  );
}

export default Product;
