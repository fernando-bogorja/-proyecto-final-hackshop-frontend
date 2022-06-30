import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetProducts from "../../../Hooks/useGetProducts";
import "./productList.css";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import EditProduct from "../Dashboard/EditProduct/EditProduct";

export default function ProductList() {
  const [products] = useGetProducts();
  const [temp, setTemp] = useState({});

  const handleClick = (params) => {
    setTemp(params);
  };

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
            <img
              className="productListImage"
              src={params.row.images[0]}
              alt=""
            />
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
            <Button
              onClick={() => handleClick(params.row)}
              style={{ margin: "5px" }}
              size="small"
              variant="outlined"
            >
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

  return (
    <Grid container spacing={2}>
      <Grid justifyContent="center" flexDirection="column" item xs={12} lg={6}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100%", width: "100%" }}
        >
          <DataGrid
            rows={products}
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            sx={{ minHeight: { xs: "650px" } }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box sx={{ height: "100%", width: "100%" }}>
          <EditProduct product={temp} />
        </Box>
      </Grid>
    </Grid>
  );
}
