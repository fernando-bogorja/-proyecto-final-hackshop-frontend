import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useGetAllProductsQuery } from "../../../../redux/api-requests/products-req";
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
    field: "description",
    headerName: "Descripcion",
    width: 300,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
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
//const handleDeleteUser = (userId) => {};

const ProductList = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("name: ", useGetAllProductsQuery());
  return (
    <div className="productList">
      <div className="productListTitle">
        <h1>Lista de Productos</h1>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An Error Occured...</p>
      ) : (
        <>
          <DataGrid
            rows={data}
            getRowId={(row) => row._id}
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
