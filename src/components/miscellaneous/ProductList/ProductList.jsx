import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetProducts from "../../../hooks/useGetProducts";
import "./productList.css";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import EditProduct from "../Dashboard/EditProduct/EditProduct";
import { currentTheme as theme } from "../../../theme";

export default function ProductList() {
  const [products] = useGetProducts();
  const [temp, setTemp] = useState({});
  const handleClick = params => {
    setTemp(params);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "name",
      headerName: "Nombre del producto",
      width: 500,
      editable: true,
    },
    {
      field: "images",
      headerName: "Imágen",
      width: 80,
      renderCell: params => {
        return (
          <div>
            <img
              className="productListImage"
              src={params.row.images[0]}
              alt="product"
              width="50px"
            />
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 400,
      renderCell: params => {
        return (
          <>
            {/* <Link to={`/user/` + params.row.id}> */}
            <Button
              onClick={() => handleClick(params.row)}
              style={{ margin: "5px" }}
              size="small"
              variant="outlined"
              sx={{
                color: theme.black,
                borderColor: theme.black,
                "&:hover": {
                  color: theme.black_hover,
                  borderColor: theme.black_hover,
                },
              }}
            >
              Editar
            </Button>
            {/* </Link> */}
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: theme.black,
                borderColor: theme.black,
                "&:hover": {
                  color: theme.black_hover,
                  borderColor: theme.black_hover,
                },
              }}
            >
              Borrar
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        item
        xs={12}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100%", width: "100%" }}
        >
          <Box width="80%" height="100%">
            <DataGrid
              rows={products}
              columns={columns}
              getRowId={row => row._id}
              pageSize={12}
              rowsPerPageOptions={[12]}
              checkboxSelection
              disableSelectionOnClick
              sx={{ minHeight: { xs: "650px" } }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100%", width: "100%" }}
        >
          <Box width="80%" height="100%">
            <EditProduct product={temp} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
