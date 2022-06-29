import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppButton from "../Miscellaneous/AppButtons/AppButton";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { currentTheme as theme } from "../../theme";

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={2}
      sx={{
        width: "100%",
        backgroundColor: theme.black,
        height: "100%",
        zIndex: "1300",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          width: "80%",
          height: "100%",
          zIndex: "1300",
        }}
      >
        <Grid
          spacing={2}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            sx={{
              display: { xs: "block", sm: "none", xs: "none", md: "block" },
            }}
            md={3}
            lg={4}
            xl={4}
          >
            <Typography variant="h6" fontSize={18} color="white">
              Suscribíte y recibí nuestras novedades!
            </Typography>
            <Box display="flex" flexDirection="row" alignItems="center">
              <TextField
                id="outlined-basic"
                label="Correo electrónico"
                variant="filled"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  width: "65%",
                }}
              />
              <Box width="35%">
                <AppButton backgroundColor=" #ACA092" color="white">
                  Suscribirme
                </AppButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="box-icon-logo">
                <img
                  style={{ width: "150px" }}
                  srcSet={require("../../assets/reizen-logo.png")}
                  alt="logo"
                />
              </Box>
              <Box
                className="box-icon-social-networks"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                width="100%"
                my={2}
              >
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <Instagram fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <LinkedIn fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <Facebook fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <Twitter fontSize="large" />
                  </Link>
                </Box>
              </Box>
              <Box
                className="box-links"
                display="flex"
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  alignItems: "center",
                }}
                justifyContent="space-between"
                width="65%"
              >
                <Typography>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/about"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Nosotros
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Blog
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Contacto
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={4} xl={4}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Box
                className="box-payment-icons"
                sx={{
                  display: "flex",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontSize={18}
                  color="white"
                >
                  Medios de pago
                </Typography>
                {/* ICONOS */}
                <Box display="flex" justifyContent="center" flexDirection="row">
                  <Box>
                    <img
                      style={{ width: "50px" }}
                      srcSet={require("../../assets/logos/icon-mastercard.png")}
                      alt="logo"
                    />
                  </Box>
                  <Box>
                    <img
                      style={{ width: "50px" }}
                      srcSet={require("../../assets/logos/icon-visa.png")}
                      alt="logo"
                    />
                  </Box>
                  <Box>
                    <img
                      style={{ width: "50px" }}
                      srcSet={require("../../assets/logos/icon-paypal.png")}
                      alt="logo"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
