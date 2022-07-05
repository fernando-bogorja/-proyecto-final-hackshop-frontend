import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetProducts from "../../../../hooks/useGetProducts";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Categories() {
  const [temp, setTemp] = useState({});
  const [products, categories] = useGetProducts();

  const handleClick = (params) => {
    console.log("esto", params);
    setTemp(params);
  };

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
            rows={categories}
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
          <EditCategories categoryName={temp} />
        </Box>
      </Grid>
    </Grid>
  );
}

function EditCategories({ categoryName }) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (event) => {
    console.log("handlea");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (categoryName.name) setFormData(categoryName);
  }, [categoryName]);

  return (
    <React.Fragment>
      <Grid container justifyContent="center" spacing={2}>
        <Grid
          justifyContent="center"
          flexDirection="column"
          item
          xs={12}
          lg={6}
        >
          <Box
            display="flex"
            justifyContent="center"
            sx={{ height: "100%", width: "100%" }}
          >
            <Button type="submit" variant="contained" color="primary">
              Agregar Nueva Categoría
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Typography mt="10px" textAlign="center" variant="h6" gutterBottom>
        Editar Categoría {formData.name}
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Nombre"
              fullWidth
              value={formData.name}
              autoComplete=""
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid justifyContent="center" container spacing={3} my={2}>
          <Grid item xs={6}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Confirmar Cambios en Edicion de Categoría
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
