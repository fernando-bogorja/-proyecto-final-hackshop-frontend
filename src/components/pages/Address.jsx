import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useUserHook from "../../hooks/User";
import { Navigate } from "react-router-dom";
import { currentTheme as theme, effects } from "../../theme";
import FormControl from "@mui/material/FormControl";
import { useFastRedirect } from "../../hooks/useRedirect";

export default function Address() {
  const [user, setUser, logout, signup, addAddress] = useUserHook();
  const redirect = useFastRedirect("/profile");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const send = {
      line_one: data.get("line_one"),
      line_two: data.get("line_two"),
      city: data.get("city"),
      department: data.get("department"),
      zipCode: data.get("zipCode"),
      country: data.get("country"),
      phone: data.get("phone"),
      user: user.data._id,
    };
    addAddress(send);
    redirect();
  };

  React.useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Box width="100%" my={20} display="flex" justifyContent="center">
      <Box
        width="80%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="502px"
      >
        <Grid container>
          <Grid item xs={12}>
            <Box width="100%" display="flex" justifyContent="center">
              <Typography
                component="h3"
                fontSize={{ xs: "28px", md: "40px" }}
                fontFamily={theme.fonts.title}
                marginBottom="3rem"
              >
                Añadir una dirección de envío
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Box width="100%" display="flex" justifyContent="center">
              <Box
                width={{ sx: "100%", md: "80%", lg: "60%", xl: "50%" }}
                display="flex"
                justifyContent="center"
              >
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          type="text"
                          id="line_one"
                          name="line_one"
                          label="Linea 1 de dirección"
                          fullWidth
                          autoComplete="line one"
                          variant="standard"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          type="text"
                          id="line_two"
                          name="line_two"
                          label="Linea 2 de dirección"
                          fullWidth
                          autoComplete="line two"
                          variant="standard"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          type="text"
                          id="city"
                          name="city"
                          label="Ciudad"
                          fullWidth
                          autoComplete="city"
                          variant="standard"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          type="text"
                          id="department"
                          name="department"
                          label="Departamento"
                          fullWidth
                          autoComplete="state"
                          variant="standard"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          label="Código postal"
                          fullWidth
                          autoComplete="postal code"
                          variant="standard"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          type="text"
                          id="phone"
                          name="phone"
                          label="Número de teléfono"
                          fullWidth
                          autoComplete="phone"
                          variant="standard"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          type="text"
                          id="country"
                          name="country"
                          label="País"
                          fullWidth
                          autoComplete="country"
                          variant="standard"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <Button
                          fullWidth
                          type="submit"
                          sx={{
                            backgroundColor: theme.black,
                            color: theme.white,
                            mt: "3rem",
                            py: "10px",
                            ":hover": {
                              backgroundColor: theme.black_hover,
                            },
                          }}
                        >
                          Añadir dirección
                        </Button>
                      </FormControl>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
