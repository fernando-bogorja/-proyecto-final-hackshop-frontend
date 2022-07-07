import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Form() {
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
    const { name, email, phone, address, city, zip, country } = formData;
    if (
      validateInput(name) &&
      validateInput(email) &&
      validateInput(phone) &&
      validateInput(address) &&
      validateInput(city) &&
      validateInput(zip) &&
      validateInput(country)
    );
    else {
      //console.log("VALID");
      setError("Por favor, rellene todos los campos correctamente");
      //console.log("INVALID");
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log(formData);
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
                Confirmar Crear Producto
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  );
}
