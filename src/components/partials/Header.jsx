import { Box, Grid, Typography } from "@mui/material";
import { currentTheme as theme } from "../../theme";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../../assets/header-img.png")})`,
        backgroundSize: "cover",
        backgroundColor: theme.black,
      }}
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="78%" marginTop="5rem">
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box
            className="title"
            width={{
              xs: "60%",
              xl: "55%",
            }}
          >
            <Typography
              variant="p"
              fontSize="1rem"
              fontFamily="Raleway"
              color="rgba(128, 128, 128, 0.9)"
              sx={{
                maxWidth: "60%",
                fontWeight: "500",
              }}
            >
              INTERIOR-EXTERIOR
            </Typography>
            <Typography
              variant="h1"
              color="rgb(255,255,255)"
              fontFamily="Bodoni Moda"
              fontSize={{ xs: "4rem", sm: "5rem", md: "7.7rem", xl: "10rem" }}
              lineHeight="0.95"
              letterSpacing="-0.01562em"
              sx={{
                paddingBottom: { xs: "0rem", lg: "2rem" },
                paddingTop: "2rem",
              }}
            >
              Elegancia para tu hogar
            </Typography>
          </Box>
          <Box
            className="text-sofa"
            width={{ xs: "100%", sm: "60%", xl: "13%" }}
            mt={{ xs: 5, xl: 0 }}
            display="flex"
            justifyContent={{ xs: "flex-start", xl: "flex-end" }}
          >
            <Typography
              textAlign={{ xs: "left", xl: "right" }}
              fontFamily="Raleway"
              color="rgba(128, 128, 128, 0.9)"
              fontSize={{ xs: "1rem", xl: "1.1rem" }}
              sx={{
                paddingBottom: "1rem",
                fontSize: "1.1rem",
                fontWeight: "800",
              }}
            >
              Un espacio elegante nos hace querer pasar mas tiempo en ??l. Por
              eso creamos dise??os interesantes, que con los colores adecuados,
              har??n de tu hogar el lugar que siempre so??aste.
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
