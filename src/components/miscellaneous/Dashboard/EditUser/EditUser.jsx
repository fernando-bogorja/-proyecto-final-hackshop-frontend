import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
//import { InputLabel, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { currentTheme as theme } from "../../../../theme";

export default function EditUser({ user }) {
  //console.log(user);
  const [formData, setFormData] = useState({
    name: "",
    isAdmin: "",
  });
  // console.log("FormData", formData);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    //console.log("target name:", event.target.name);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (user.name && user.description) setFormData(user);
    //console.log("formdata", formData);
  }, [user]);

  return (
    error && (
      <Typography variant="body1" color="error">
        {error}
      </Typography>
    ),
    (
      <Box display="flex" justifyContent="center" width="100%">
        <form>
          <Grid container spacing={2}>
            {/* Address Begin*/}
            <Grid item xs={12}>
              <Typography variant="h6" fontSize={20}>
                Datos de Usuario
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
                Confirmar Cambios en Edicion de Usuario
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    )
  );
}
