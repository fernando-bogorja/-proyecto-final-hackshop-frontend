import { useGetSingleProductQuery } from "../../../../redux/api-requests/products-req";
import { useParams } from "react-router-dom";

function Product({ product }) {
  const { productId } = useParams();

  // dispatch(useGetAllProductsQuery());

  // console.log(useGetSingleProductQuery().data);
  /*
  const { data, error, isLoading } = useGetSingleProductQuery();

  console.log(data.data.name);
*/
  return (
    <div style={{ marginTop: 100 }}>
      {/* // <h2>{data.data.name}</h2> */}
      <p>milanesa</p>
    </div>
  );
}

export default Product;
