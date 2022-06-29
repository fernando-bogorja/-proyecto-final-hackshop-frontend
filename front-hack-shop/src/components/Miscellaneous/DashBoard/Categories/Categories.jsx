import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetProducts from "../../../../Hooks/useGetProducts";
import { Button } from "@mui/material";
const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Categoría",
    width: 150,
    editable: true,
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

export default function Categories() {
  const [products, categories] = useGetProducts();
  return (
    <Box textAlign="center" sx={{ height: 650, width: "100%" }}>
      <Button style={{ margin: "5px" }} size="small" variant="outlined">
        Agregar Categoría
      </Button>
      <DataGrid
        rows={categories}
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
