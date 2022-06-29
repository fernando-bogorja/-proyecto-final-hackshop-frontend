import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppButton from "../Miscellaneous/AppButtons/AppButton";

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <footer>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          backgroundColor: "#8e806a7c",
          height: "200px",
          position: "absolute",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{ width: "90%", height: "100%" }}
        >
          <Grid
            spacing={2}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={3} md={2} lg={4} xl={4}>
              <Box sx={{ color: "white", borderBottom: "1px solid white" }}>
                Suscribíte y recibí nuestras novedades!
              </Box>
              <Box>
                <form>
                  <input
                    type="email"
                    placeholder="Ingresa tu e-mail"
                    style={{
                      border: "2px solid white",
                      borderRadius: "5px",
                    }}
                  />
                  <AppButton backgroundColor=" #ACA092" color="white">
                    Suscribirme
                  </AppButton>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={2} lg={4} xl={4}>
              <Box
                className="box-icon-logo"
                sx={{ borderBottom: "1px solid white" }}
              >
                <img
                  style={{ width: "150px" }}
                  srcSet={require("../../assets/reizen-logo.png")}
                  alt="logo"
                />
              </Box>
              <Box
                className="box-icon-social-networks"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <Instagram />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <LinkedIn />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <Facebook />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                    }}
                  >
                    <Twitter />
                  </Link>
                </Box>
              </Box>
              <Box
                className="box-links"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/about"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Sobre nosotros
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Blog
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Contacto
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={2} lg={4} xl={4}>
              <Box
                sx={{
                  borderBottom: "1px solid white",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Medios de pago
              </Box>
              <Box
                className="box-payment-icons"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
