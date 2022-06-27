import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useGetProducts from "../../../../Hooks/useGetProducts";
import { Link } from "react-router-dom";
const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
  },
  {
    field: "images",
    headerName: "Imagen",
    width: 300,
    renderCell: params => {
      return (
        <div className="userListUser">
          <img className="userListImage" src={params.row.images[0]} alt="" />
        </div>
      );
    },
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: params => {
      return (
        <>
          <Link to={`/user/` + params.row.id}>
            <button className="productListButton">Edit</button>
          </Link>
          <DeleteOutlineIcon
            className="userListDelete"
            // onClick={() => handleDeleteUser(params.row.id)}
          />
        </>
      );
    },
  },
];
const ProductList = () => {
  const [data, categories, isLoading] = useGetProducts();
  return (
    <div className="productList">
      <div className="productListTitle">
        <h1>Lista de Productos</h1>
        <Link to="/newProduct">
          <button className="productListButton">Agregar Producto</button>
        </Link>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <DataGrid
            rows={data}
            getRowId={row => row._id}
            diseableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </>
      )}
    </div>
  );
};

export default ProductList;
