import { useGetSingleProductQuery } from "../../../../redux/api-requests/products-req";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Product({ param }) {
  const { productId } = useParams();
  //-------------- Main Constants
  const [product, setProduct] = useState([]);
  //const [rating, setRating] = useState(0);

  //------- Sin Axios
  const productFetch = async () => {
    const data = await fetch(
      "http://localhost:3001/api/products/get?_id=" + productId
    );
    const productData = await data.json();
    setProduct(data);
  };

  useEffect(() => {
    productFetch();
    console.log(product);
    console.log("param", param);
  }, []);

  return (
    <div style={{ marginTop: 100 }}>
      {/* // <h2>{data.data.name}</h2> */}
      <h1>{product.name}</h1>
      <p>milanesa</p>
    </div>
  );
}

export default Product;
