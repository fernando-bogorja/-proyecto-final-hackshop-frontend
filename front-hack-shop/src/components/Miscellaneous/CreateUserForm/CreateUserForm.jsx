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
    )
      console.log("VALID");
    else {
      setError("Por favor, rellene todos los campos correctamente");
      console.log("INVALID");
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  useEffect(() => {
    console.log("Form data", formData);
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
          Datos de Usuario
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Address Begin*/}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombre"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Apellido"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Telefono"
                type="number"
                fullWidth
                autoComplete="phone number"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                label="Contraseña"
                fullWidth
                type="password"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="line_one"
                name="line_one"
                label="Linea de dirección 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="line_two"
                name="line_two"
                label="Linea de dirección 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="Ciudad"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="department"
                name="department"
                label="Departamento"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zipCode"
                name="zipCode"
                label="Codigo postal"
                type="number"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="País"
                fullWidth
                autoComplete="shipping country"
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
                Confirmar Crear Usuario
              </Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  );
}
