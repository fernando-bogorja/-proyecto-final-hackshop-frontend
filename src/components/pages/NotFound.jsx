import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { currentTheme as theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";

export default function NotFound() {
  const counter = useRedirect(5);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Box
        minHeight="60%"
        width={{ xs: "90%", sm: "60%", lg: "40%", xl: "35%" }}
        mt={10}
        textAlign="center"
      >
        <Typography
          variant="h1"
          fontFamily={theme.fonts.title}
          fontWeight="bold"
          fontSize={250}
          color={theme.gray}
          sx={{ letterSpacing: "40px" }}
          mb={10}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          color={theme.text}
          fontFamily={theme.fonts.title}
          fontWeight="bold"
        >
          Redireccionando en {counter} segundos
        </Typography>
      </Box>
    </Box>
  );
}
