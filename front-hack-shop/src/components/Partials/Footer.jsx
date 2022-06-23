import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
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
              srcSet={require("../../assets/reizen-logo.png")}
            />
            <div style={{ paddingTop: "15px" }} className="div">
              <Link to="" className="link-none" style={{ marginLeft: "8px" }}>
                <Instagram />
              </Link>

              <Link to="" className="link-none" style={{ marginLeft: "8px" }}>
                <LinkedIn />
              </Link>
              <Link to="" className="link-none" style={{ marginLeft: "8px" }}>
                <Facebook />
              </Link>
              <Link to="" className="link-none" style={{ marginLeft: "8px" }}>
                <Twitter />
              </Link>
            </div>
            <div className="div">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  listStyle: "none",
                  color: "white",
                  paddingTop: "10px",
                }}
              >
                <li style={{ marginLeft: "15px" }}>
                  <Link className="link-none" to="/">
                    HOME
                  </Link>
                </li>
                <li style={{ marginLeft: "15px" }}>
                  {" "}
                  <Link className="link-none" to="/">
                    SOBRE NOSOTROS
                  </Link>
                </li>
                <li style={{ marginLeft: "15px" }}>
                  {" "}
                  <Link className="link-none" to="/">
                    BLOG
                  </Link>
                </li>
                <li style={{ marginLeft: "15px" }}>
                  {" "}
                  <Link className="link-none" to="/">
                    CONTACTO
                  </Link>
                </li>
              </ul>
            </div>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
