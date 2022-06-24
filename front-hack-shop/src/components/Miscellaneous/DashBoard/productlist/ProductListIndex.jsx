import SideBar from "../SideBar/SideBar";
import ProductList from "./ProductList";
import "./productListIndex.css";

const ProductListIndex = () => {
  return (
    <div className="container">
      <SideBar />
      <ProductList />
    </div>
  );
};

export default ProductListIndex;
