import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { currentTheme as theme } from "../../../../theme";
import useCrudProducts from "../../../../hooks/useCrudProducts";

export default function EditProduct({ product }) {
  const { editProduct } = useCrudProducts();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    upholstery: "",
    size: "",
    made_in: "",
    length: "",
    depth: "",
    tall: "",
  });
  const [error, setError] = useState("");

  const validateInput = value => {
    //regex only for letters and numbers
    const regex = /^[a-zA-Z0-9]+$/;
    if (value.length > 0) {
      return regex.test(value);
    }
    return false;
  };

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    editProduct({
      ...formData,
      [event.target.name]: event.target.value,
      id: product._id,
    });
  };

  useEffect(() => {
    if (product.name && product.description) setFormData(product);
  }, [product]);

  return (
    error && (
      <Typography variant="body1" color="error">
        {error}
      </Typography>
    ),
    (
      <Box display="flex" justifyContent="center" width="100%">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Address Begin*/}
            <Grid item xs={12}>
              <Typography variant="h6" fontSize={20}>
                Datos de Producto
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="price"
                name="price"
                label="Precio"
                fullWidth
                type="number"
                value={formData.price}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="description"
                name="description"
                label="Descripci??n"
                fullWidth
                value={formData.description}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="made_in"
                name="made_in"
                label="Procedencia"
                fullWidth
                type="text"
                value={formData.made_in}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="size"
                name="size"
                label="Tama??o"
                fullWidth
                type="text"
                value={formData.size}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="upholstery"
                name="upholstery"
                label="Material"
                fullWidth
                type="text"
                value={formData.upholstery}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="stock"
                name="stock"
                label="Stock"
                fullWidth
                type="number"
                value={formData.stock}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="length"
                name="length"
                label="Largo"
                fullWidth
                value={formData.length}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="tall"
                name="tall"
                label="Altura"
                fullWidth
                value={formData.tall}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="depth"
                name="depth"
                label="Profundidad"
                fullWidth
                value={formData.depth}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            {/* PROBLEMA PARA DEFINIR CATEGORIA
              <Grid item xs={12} sm={12}>
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                value={formData.category}
                label="Categrory"
                onChange={handleChange}
              >
                <MenuItem value={"Butacas"}>Butacas</MenuItem>
                <MenuItem value={"Mesas"}>Mesas</MenuItem>
                <MenuItem value={"Bibliotecas"}>Bibliotecas</MenuItem>
                <MenuItem value={"Racks"}>Racks</MenuItem>
                <MenuItem value={"Sof??s"}>Sof??s</MenuItem>
              </Select>
            </Grid> */}
          </Grid>
          <Divider />
          <Grid container spacing={3} my={2}>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: theme.black,
                  "&:hover": { backgroundColor: theme.black_hover },
                }}
              >
                Confirmar Cambios en Edicion de Producto
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    )
  );
}
