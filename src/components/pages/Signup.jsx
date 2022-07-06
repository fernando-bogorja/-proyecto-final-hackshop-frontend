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

export default function Signup() {
  const [user, handleSetUser, handleLogout, handleSignup] = useUserHook();
  const [asAdmin, setAsAdmin] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const send = {
      name: data.get("name"),
      lastName: data.get("lastName"),
      phone: data.get("phone"),
      email: data.get("email"),
      password: data.get("password"),
      isAdmin: asAdmin,
    };
    handleSignup(send);
  };

  if (user.data) {
    return <Navigate to="/profile" />;
  } else {
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
                >
                  Crea una cuenta
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} justifyContent="center">
              <Box width="100%" display="flex" justifyContent="center">
                <Box
                  width={{ sx: "100%", md: "60%", lg: "45%", xl: "30%" }}
                  display="flex"
                  justifyContent="center"
                >
                  <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            type="text"
                            id="name"
                            name="name"
                            label="Nombre"
                            fullWidth
                            autoComplete="fist name"
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            type="text"
                            id="lastName"
                            name="lastName"
                            label="Apellido"
                            fullWidth
                            autoComplete="last name"
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            type="text"
                            id="phone"
                            name="phone"
                            label="Número de teléfono"
                            fullWidth
                            autoComplete="phone number"
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            type="email"
                            id="email"
                            name="email"
                            label="Correo electrónico"
                            fullWidth
                            autoComplete="email"
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            type="password"
                            id="password"
                            name="password"
                            label="Contraseña"
                            fullWidth
                            autoComplete="password"
                            variant="standard"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="¿Deseas registrarte como administrador?"
                            checked={asAdmin}
                            onChange={() => setAsAdmin(!asAdmin)}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <Button
                            fullWidth
                            type="submit"
                            sx={{
                              backgroundColor: theme.black,
                              color: theme.white,
                              py: "10px",
                              ":hover": {
                                backgroundColor: theme.black_hover,
                              },
                            }}
                          >
                            Registrate
                          </Button>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Box
                      mt={2}
                      width="100%"
                      display="flex"
                      justifyContent="center"
                    >
                      <Link href="/signin" variant="body2" color={theme.black}>
                        ¿Ya tienes una cuenta?
                      </Link>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
