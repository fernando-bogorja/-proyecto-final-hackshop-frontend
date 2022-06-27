import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";
import { width } from "@mui/system";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          backgroundColor: "#8e806a7c",
          marginBottom: 0,
        }}
      >
        <Grid
          item
          xs={3}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Box style={{ paddingLeft: "80px" }}>
            <label
              style={{
                color: "white",
                textAlign: "center",
              }}
              htmlFor=""
            >
              <div style={{ paddingBottom: "10px", fontSize: "20px" }}>
                Suscríbite y recibí todas nuestras novedades!
              </div>
            </label>
            <form action="" style={{ marginTop: "30px" }}>
              <input
                style={{
                  border: "2px solid white ",
                  paddingLeft: "25px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  height: "37px",
                  width: "250px",
                }}
                type="email"
                placeholder="Ingresa tu e-mail"
              />{" "}
              <Button
                style={{ backgroundColor: "#8e806a7c", color: "white" }}
                variant="contained"
              >
                Suscribirme
              </Button>
            </form>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "100px",
              fontSize: "20px",
            }}
          >
            <img
              style={{ width: "150px" }}
              srcSet={require("../../assets/reizen-logo.png")}
              alt="logo"
            />
            <div style={{ paddingTop: "15px" }} className="div">
              <Link
                href=""
                className="link-none"
                style={{
                  marginLeft: "8px",
                  color: "white",
                }}
              >
                <Instagram sx={{ fontSize: "40px" }} />
              </Link>

              <Link
                href=""
                className="link-none"
                style={{ marginLeft: "8px", color: "white" }}
              >
                <LinkedIn sx={{ fontSize: "40px" }} />
              </Link>
              <Link
                href=""
                className="link-none"
                style={{ marginLeft: "8px", color: "white" }}
              >
                <Facebook sx={{ fontSize: "40px" }} />
              </Link>
              <Link
                href=""
                className="link-none"
                style={{ marginLeft: "8px", color: "white" }}
              >
                <Twitter sx={{ fontSize: "40px" }} />
              </Link>
            </div>
            <div className="div" style={{ paddingTop: "5px" }}>
              <Link
                className="link-none"
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingLeft: "10px",
                }}
              >
                Home
              </Link>{" "}
              <Link
                className="link-none"
                href="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingLeft: "10px",
                }}
              >
                Sobre nosotros
              </Link>{" "}
              <Link
                className="link-none"
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingLeft: "10px",
                }}
              >
                Blog
              </Link>{" "}
              <Link
                className="link-none"
                href="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingLeft: "10px",
                }}
              >
                Contacto
              </Link>
            </div>
          </Box>
          <Box style={{ marginLeft: "170px" }}>
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "20px",
                paddingTop: "8px",
                marginRight: "30px",
              }}
            >
              Medios de pago
            </div>
            <div style={{ paddingTop: "35px" }}>
              <img
                style={{ width: "50px", marginRight: "20px" }}
                srcSet={require("../../assets/logos/icon-mastercard.png")}
                alt="logo"
              />
              <img
                style={{ width: "50px", marginRight: "20px" }}
                srcSet={require("../../assets/logos/icon-visa.png")}
                alt="logo"
              />
              <img
                style={{ width: "50px", marginRight: "20px" }}
                srcSet={require("../../assets/logos/icon-paypal.png")}
                alt="logo"
              />
            </div>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
