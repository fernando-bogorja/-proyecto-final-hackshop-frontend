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

export default function SignIn() {
  const [user, handleSetUser] = useUserHook();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const send = {
      email: data.get("email"),
      password: data.get("password"),
    };
    handleSetUser(send);
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
                  Inicia sesión para continuar
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
                    <FormControl sx={{ mb: "30px" }} fullWidth>
                      <TextField
                        required
                        type={"email"}
                        id="email"
                        name="email"
                        label="Correo electrónico"
                        fullWidth
                        autoComplete="email"
                        variant="standard"
                      />
                    </FormControl>
                    <FormControl sx={{ mb: "50px" }} fullWidth>
                      <TextField
                        required
                        type={"password"}
                        id="password"
                        name="password"
                        label="Contraseña"
                        fullWidth
                        autoComplete="password"
                        variant="standard"
                      />
                    </FormControl>
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
                        Iniciar sesión
                      </Button>
                    </FormControl>
                    <Box
                      mt={2}
                      width="100%"
                      display="flex"
                      justifyContent="center"
                    >
                      <Link href="/signup" variant="body2" color={theme.black}>
                        ¿No tienes una cuenta?
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
