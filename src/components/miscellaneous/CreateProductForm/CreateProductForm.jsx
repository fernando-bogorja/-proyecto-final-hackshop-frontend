import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { currentTheme as theme } from "../../../theme";
import useCrudProducts from "../../../hooks/useCrudProducts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Form() {
  const { createProduct, categories } = useCrudProducts();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");

  const validateInput = value => {
    //regex only for letters and numbers
    const regex = /^[a-zA-Z0-9]+$/;
    if (value.length > 0) {
      return regex.test(value);
    }
    return false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    formData.category = category;
    createProduct(formData);
  };

  const handleChange = event => {
    setImages(event.target.images);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChangeCategory = event => {
    setCategory(event.target.value);
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
                id="made_in"
                name="made_in"
                label="Lugar de Fabricación"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="stock"
                name="stock"
                label="Stock"
                type="number"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="description"
                z
                name="description"
                label="Descripción"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="upholstery"
                name="upholstery"
                label="Tapizado"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="size"
                name="size"
                label="Tamaño"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="length"
                name="length"
                label="Largo"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="depth"
                name="depth"
                label="Profundidad"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="tall"
                name="tall"
                label="Altura"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Categoria"
                  onChange={handleChangeCategory}
                  variant="standard"
                >
                  {categories.map(category => (
                    <MenuItem value={category._id}>{category.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="images"
                name="images"
                label="Primera imágen"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="images"
                name="images"
                label="Segunda imágen"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
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
