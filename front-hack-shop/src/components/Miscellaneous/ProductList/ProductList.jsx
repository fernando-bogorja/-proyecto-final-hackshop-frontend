import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetProducts from "../../../Hooks/useGetProducts";
import "./productList.css";
import { Button } from "@mui/material";
const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "images",
    headerName: "Image",
    width: 60,
    renderCell: (params) => {
      return (
        <div>
          <img className="productListImage" src={params.row.images[0]} alt="" />
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          {/* <Link to={`/user/` + params.row.id}> */}
          <Button style={{ margin: "5px" }} size="small" variant="outlined">
            Editar
          </Button>
          {/* </Link> */}
          <Button size="small" variant="outlined">
            Borrar
          </Button>
        </>
      );
    },
  },
];

export default function ProductList() {
  const [products] = useGetProducts();
  return (
    <Box sx={{ height: 650, width: 510 }}>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
