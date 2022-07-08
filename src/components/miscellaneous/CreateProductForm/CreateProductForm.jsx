import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { currentTheme as theme } from "../../../theme";
import useCrudProducts from "../../../hooks/useCrudProducts";
import axios from "axios";
export default function Form() {
  const { createProduct } = useCrudProducts();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const validateInput = (value) => {
    //regex only for letters and numbers
    const regex = /^[a-zA-Z0-9]+$/;
    if (value.length > 0) {
      return regex.test(value);
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.category = "62c34c60f34be21cdf0c3f1c";
    createProduct(formData);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    //console.log("Form data", formData);
  }, [formData]);

  return (
    error && (
      <Typography variant="body1" color="error">
        {error}
      </Typography>
    ),
    (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Agrega un Producto
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Address Begin*/}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Nombre del Producto"
                fullWidth
                autoComplete="given-name"
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
                autoComplete="family-name"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="madeIn"
                name="madeIn"
                label="Lugar de Fabricación"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="stock"
                name="stock"
                label="Stock"
                type="number"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="description"
                name="description"
                label="Descripción"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="image"
                name="image"
                label="Link Imagen"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="upholstery"
                name="upholstery"
                label="upholstery"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="size"
                name="size"
                label="size"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="length"
                name="length"
                label="length"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="depth"
                name="depth"
                label="depth"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="tall"
                name="tall"
                label="tall"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="featured"
                name="featured"
                label="featured"
                type="text"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={3} my={2}>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                //onSubmit={}
                variant="contained"
                sx={{
                  backgroundColor: theme.black,
                  "&:hover": { backgroundColor: theme.black_hover },
                }}
              >
                Confirmar Crear Producto
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  );
}
