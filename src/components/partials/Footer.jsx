import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppButton from "../miscellaneous/AppButtons/AppButton";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { currentTheme as theme, effects, toastConfig } from "../../theme";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  let location = useLocation();
  //console.log("PATHNAME", location.pathname);
  //const pathsWithOutFooter = ["/dashboard","/"]
  const handleClick = () => {
    toast.info("Gracias por Suscribirse");
  };
  if (location.pathname === "/") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={5}
        paddingBottom={7}
        paddingLeft={2}
        paddingRight={2}
        marginTop="auto"
        marginBottom="20%"
        sx={{
          width: "100%",
          backgroundColor: theme.black30,
          zIndex: "1300",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          py={10}
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
                display: { xs: "none", lg: "block" },
              }}
              md={0}
              lg={4}
              xl={4}
            >
              <Typography
                variant="h6"
                fontSize={18}
                color={theme.gray}
                fontFamily="Raleway"
                mt={12}
                mb={1}
              >
                ¡Suscríbete para recibir nuestras novedades!
              </Typography>
              <Box display="flex" flexDirection="row" alignItems="center">
                <TextField
                  id="outlined-basic"
                  label="Correo electrónico"
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: "#575757",
                    borderRadius: "5px",
                    width: "65%",
                  }}
                />
                <Box width="35%" ml={1}>
                  <AppButton onClick={handleClick} color={theme.gray}>
                    Suscribirme
                  </AppButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} xl={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box className="box-icon-logo" mb={3}>
                  <img
                    style={{ width: "185px" }}
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
                  <Box mx={1.5}>
                    <Link
                      href="/"
                      style={{
                        color: "white",
                      }}
                    >
                      <Instagram fontSize="large" />
                    </Link>
                  </Box>
                  <Box mx={1.5}>
                    <Link
                      href="/"
                      style={{
                        color: "white",
                      }}
                    >
                      <LinkedIn fontSize="large" />
                    </Link>
                  </Box>
                  <Box mx={1.5}>
                    <Link
                      href="/"
                      style={{
                        color: "white",
                      }}
                    >
                      <Facebook fontSize="large" />
                    </Link>
                  </Box>
                  <Box mx={1.5}>
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
                  mt={2}
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
                  <Typography
                    color={theme.white}
                    className={effects.zoom}
                    fontFamily="Raleway"
                    fontWeight="500"
                  >
                    <Link href="/" className={`link-none`}>
                      Inicio
                    </Link>
                  </Typography>
                  <Typography
                    color={theme.white}
                    className={effects.zoom}
                    fontFamily="Raleway"
                    fontWeight="500"
                  >
                    <Link href="/about" className={`link-none`}>
                      Sobre este proyecto
                    </Link>
                  </Typography>
                  <Typography
                    color={theme.white}
                    className={effects.zoom}
                    fontFamily="Raleway"
                    fontWeight="500"
                  >
                    <Link href="/cart" className={`link-none`}>
                      Carrito
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} xl={4}>
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
                      lg: "50%",
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
                    color={theme.gray}
                    mt={{ xs: 0, sm: 2, lg: 12 }}
                    mb={1}
                    fontFamily="Raleway"
                    fontWeight="400"
                  >
                    Medios de pago
                  </Typography>
                  {/* ICONOS */}
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="row"
                  >
                    <Box mx={1}>
                      <img
                        style={{ width: "50px" }}
                        srcSet={require("../../assets/logos/icon-mastercard.png")}
                        alt="logo"
                        className={effects.zoom}
                      />
                    </Box>
                    <Box mx={1}>
                      <img
                        style={{ width: "50px" }}
                        srcSet={require("../../assets/logos/icon-visa.png")}
                        alt="logo"
                        className={effects.zoom}
                      />
                    </Box>
                    <Box mx={1}>
                      <img
                        style={{ width: "50px" }}
                        srcSet={require("../../assets/logos/icon-paypal.png")}
                        alt="logo"
                        className={effects.zoom}
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
  }
};

export default Footer;
