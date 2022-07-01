import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { currentTheme as theme, effects } from "../../theme";

function AboutPopUp() {
  return (
    <Box
      component="a"
      width="230px"
      height="50px"
      bgcolor={theme.black}
      color={theme.white}
      position="fixed"
      display="inline-block"
      sx={{
        transform: "rotate(-90deg)",
        right: 0,
        top: "200px",
        lineHeight: "50px",
        zIndex: "10001",
        transformOrigin: "bottom right",
        textAlign: "center",
        borderRadius: "10px 10px 0 0",
        ":hover": { bgcolor: theme.black_hover },
      }}
    >
      <Link to="/about" className="link-none">
        {" "}
        Sobre este proyecto
      </Link>
    </Box>
  );
}

export default AboutPopUp;
