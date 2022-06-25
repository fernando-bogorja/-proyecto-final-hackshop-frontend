//import { useGetSingleProductQuery } from "../../../../redux/api-requests/products-req";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  let params = useParams({});
  let urlGet =
    "http://localhost:3001/api/products/get?_id=" +
    params.productId.replace(":", "");
  const [product, setProduct] = useState([]);
  const marta = async () => {
    try {
      const response = await axios.get(urlGet);
      return setProduct(response.data.data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  useEffect(() => {
    marta();
  }, []);
  return (
    <div style={{ marginTop: 100 }}>
      <p>milanesa</p>
      <p>Nombre: {product.name}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default Product;
