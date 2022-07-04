import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { currentTheme as theme, effects } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const MobileRenderer = () => {
  return (
    <Box
      width="50px"
      height="50px"
      bgcolor={theme.black}
      color={theme.white}
      position="fixed"
      display={{ xs: "inline-block", md: "none" }}
      sx={{
        right: 0,
        bottom: "400px",
        lineHeight: "50px",
        zIndex: "10001",
        transformOrigin: "bottom right",
        textAlign: "center",
        borderRadius: "10px 0 0 10px",
        ":hover": { bgcolor: theme.black_hover },
      }}
    >
      <Link to="/about" className="link-none" style={{ padding: "20px" }}>
        <FontAwesomeIcon icon={faQuestion} />
      </Link>
    </Box>
  );
};

function AboutPopUp() {
  return (
    <React.Fragment>
      <MobileRenderer />
      <Box
        width="230px"
        height="50px"
        bgcolor={theme.black}
        color={theme.white}
        position="fixed"
        display={{ xs: "none", md: "inline-block" }}
        sx={{
          transform: "rotate(-90deg)",
          right: 0,
          top: "130px",
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
    </React.Fragment>
  );
}

export default AboutPopUp;
