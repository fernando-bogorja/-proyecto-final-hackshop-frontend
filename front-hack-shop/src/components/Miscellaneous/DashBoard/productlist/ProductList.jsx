import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productsRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetAllProductsQuery } from "../../../../redux/api-requests/products-req";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImage" src={params.row.avatar} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={`/user/` + params.row.id}>
            <button className="userListEdit">Edit</button>
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
  //const { data, error, isLoading } = useGetAllProductsQuery();
  const [data, setData] = useState(productsRows);
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        diseableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
