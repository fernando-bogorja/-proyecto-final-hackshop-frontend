import { Box } from "@mui/system";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { currentTheme as theme } from "../../theme";

const AboutUs = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      my={15}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box width="100%" bgcolor={theme.white} borderRadius="10px">
              <Typography
                component="h4"
                fontSize={50}
                textAlign="center"
                borderBottom="2px solid "
                paddingBottom="50px"
              >
                ¡Sobre este proyecto!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              className="box-header"
              width="100%"
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              borderRadius="10px"
            >
              <Box
                width="100%"
                display="flex"
                sx={{
                  backgroundImage: `url(${require("../../assets/header-aboutus.png")})`,
                  backgroundSize: "cover",
                  backgroundColor: "black",
                  "&:after": { content: "''", backgroundColor: "white" },
                }}
              >
                <PeopleCard
                  name="Lucía Rodriguez"
                  image={require("../../assets/linkedin-lucia.JPG")}
                />
                <PeopleCard
                  name="Fernando Bogorja"
                  image={require("../../assets/linkedin-fernando-bogorja.png")}
                />
                <PeopleCard
                  name="Pepita Organa"
                  image={require("../../assets/linkedin-profile-example-3.png")}
                />
                <PeopleCard
                  name="Pepita Organa"
                  image={require("../../assets/linkedin-profile-example-3.png")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
              >
                <Box maxWidth="80%">
                  {" "}
                  <Typography variant="body1">
                    Esta página es el producto final que surge como resultado de
                    nuestro proceso de aprendizaje dentro del Coding Bootcamp.
                    <br />
                    Hack Academy
                    <br />
                    Como consigna se nos solicitó la implementación de un sitio
                    e-commerce, para el cual el equipo tomó como temática la
                    venta de muebles de diseño. Durante 3 arduas semanas, los 4
                    integrantes del equipo, le dedicaron mas de 150 hs de
                    trabajo c/u.
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-start"
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                bgcolor={theme.white}
                borderRadius="10px"
              >
                <img
                  style={{ objectFit: "contain" }}
                  width="100%"
                  srcSet={require("../../assets/logo_sin_fondo_negro_reizen.png")}
                  alt="logo-reizen"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
              >
                <img
                  width="450px"
                  srcSet={require("../../assets/figma.png")}
                  alt="logo-reizen"
                />
              </Box>
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="center"
              >
                {" "}
                <Typography variant="h4">El inicio del proyecto</Typography>
                <Typography sx={{ lineHeight: "30px" }} variant="body1">
                  Layouts creados en figma, sacando ideas de páginas similares
                  en cuanto a la temática y sus contenidos. A la hora de pasar
                  todo esto al codigo, el equipo siempre estuvo en constante
                  comunicacíon, mediante discord, herramienta fundamental que
                  empleamos para así estar conectados y poder tomar decisiones.
                  <br />
                  Dividimos el proyecto en dos partes, back y front, comenzando
                  por definir la estructura principal del backend, con sus
                  respectivos endpoints/rutas, modelos y controladores, para
                  luego conectarlo al front, este paso inicial fue entre todos
                  como para tener una base donde desarrollar las diferentes
                  partes por separado.
                  <br />
                  Optamos por la asignación de diferentes tareas para cada uno
                  del equipo, así como también. en otras etapas. la
                  implementación de perprograming, ya que en determinadas
                  circunstancias ,alguno del equipo en particular, que se
                  encontraba con mayor facilidad, para poder realiar alguna
                  tarea en especifico, explicara para que todos pudiesemos
                  aprender un poco mas durante la aplicación de código.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
              >
                <Typography variant="h4">Proceso final</Typography>
                <Typography variant="body1">
                  {" "}
                  Durante los ultimos dias del proyecto, se fueron puliendo
                  funcionalidades como por ejemplo, las del carrito de compras,
                  así como también, todo lo relacionado al responsive de las
                  vistas, para una mejor experiencia del usuario.
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
              >
                <img
                  style={{ objectFit: "contain" }}
                  width="450px"
                  srcSet={require("../../assets/mockup.png")}
                  alt="logo-reizen"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
              ></Box>
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
              >
                <Typography variant="body1">
                  {" "}
                  Fue realmente una experiencia muy linda y gratificante,
                  contentos del resultado que pudimos lograr. Muchas gracias por
                  tomarse el tiempo de leer toda esta pequeña gran parte de lo
                  que fue la experiencia de nuestro proyecto final. Esperemos
                  que este sea el primero, de muchos proyectos por venir!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Typography variant="h4">MER</Typography>
              <img
                width="100%"
                srcSet={require("../../assets/ecommerce-mer.png")}
                alt="mer-reizen"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
const PeopleCard = ({ image, name }) => {
  return (
    <Box margin={2}>
      <img
        style={{ borderRadius: "50%" }}
        width="250px"
        srcSet={image}
        alt=""
      />
      <Typography textAlign="center" component="h5">
        {name}
      </Typography>
      <Box>
        {" "}
        <GitHub /> <LinkedIn />
      </Box>
    </Box>
  );
};
export default AboutUs;
