import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#8e806a7c" }}>
      <Grid item xs={3}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <img
            style={{ width: "150px" }}
            srcSet={require("../../assets/reizen-logo.png") alt="logo"}
          />
          <div style={{ paddingTop: "15px" }} className="div">
            <Link
              href=""
              className="link-none"
              style={{ marginLeft: "8px", color: "white" }}
            >
              <Instagram />
            </Link>

            <Link
              href=""
              className="link-none"
              style={{ marginLeft: "8px", color: "white" }}
            >
              <LinkedIn />
            </Link>
            <Link
              href=""
              className="link-none"
              style={{ marginLeft: "8px", color: "white" }}
            >
              <Facebook />
            </Link>
            <Link
              href=""
              className="link-none"
              style={{ marginLeft: "8px", color: "white" }}
            >
              <Twitter />
            </Link>
          </div>
          <div className="div" style={{ paddingTop: "15px" }}>
            <Link
              className="link-none"
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                paddingLeft: "10px",
              }}
            >
              HOME
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
              SOBRE NOSOTROS
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
              BLOG
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
              CONTACTO
            </Link>
          </div>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
