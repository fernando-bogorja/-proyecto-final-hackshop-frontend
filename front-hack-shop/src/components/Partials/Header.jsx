import { Box, Grid, Typography } from "@mui/material";
import { currentTheme as theme } from "../../theme";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../../assets/header-img.png")})`,
        backgroundSize: "cover",
        backgroundColor: "#000",
      }}
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="78%">
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box className="title" width={{ xs: "100%", xl: "60%" }}>
            <Typography variant="p" fontSize="1rem">
              INTERIOR-EXTERIOR
            </Typography>
            <Typography
              variant="h1"
              color="rgb(255,255,255)"
              fontFamily="Bodoni Moda"
              fontSize="10rem"
              lineHeight="0.95"
              letterSpacing={"-0.01562em"}
            >
              Elegancia para tu hogar
            </Typography>
          </Box>
          <Box
            className="text-sofa"
            width={{ xs: "40%", xl: "13%" }}
            display="flex"
            justifyContent={{ xs: "flex-start", xl: "flex-end" }}
          >
            <Typography
              variant="p"
              textAlign={{ xs: "left", xl: "right" }}
              text
              fontFamily="Raleway"
              color="rgba(128, 128, 128, 0.9)"
            >
              Un espacio elegante nos hace querer pasar mas tiempo en él. Por
              eso creamos diseños interesantes, que con los colores adecuados,
              harán de tu hogar el lugar que siempre soñaste.
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
