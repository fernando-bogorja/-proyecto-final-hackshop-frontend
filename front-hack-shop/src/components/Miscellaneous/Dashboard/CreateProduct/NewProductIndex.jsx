import "./newProductIndex.css";
import NewProduct from "./NewProduct";
import SideBar from "../SideBar/SideBar";

const NewProductIndex = () => {
  return (
    <div>
      <div className="container">
        <SideBar />
        <NewProduct />
      </div>
    </div>
  );
};

export default NewProductIndex;
