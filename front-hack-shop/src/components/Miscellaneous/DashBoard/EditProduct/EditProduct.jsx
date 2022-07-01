import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";

export default function EditProduct({ product }) {
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

  const validateInput = (value) => {
    //regex only for letters and numbers
    const regex = /^[a-zA-Z0-9]+$/;
    if (value.length > 0) {
      return regex.test(value);
    }
    return false;
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
      <React.Fragment>
        <Typography textAlign="center" variant="h6" gutterBottom>
          Datos de Producto
        </Typography>
        <form>
          <Grid container spacing={3}>
            {/* Address Begin*/}
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
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Descripción"
                fullWidth
                value={formData.description}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="size"
                name="size"
                label="Tamaño"
                fullWidth
                type="text"
                value={formData.size}
                autoComplete=""
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
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
                <MenuItem value={"Sofás"}>Sofás</MenuItem>
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
                color="primary"
              >
                Confirmar Cambios en Edicion de Producto
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  );
}
