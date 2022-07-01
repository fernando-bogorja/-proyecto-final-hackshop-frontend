import { Box } from "@mui/system";
import { GitHub } from "@mui/icons-material";
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box width="100%" bgcolor={theme.white} borderRadius="10px">
              <Typography
                component="h2"
                fontSize={30}
                textAlign="center"
                borderBottom="2px solid "
              >
                ¡Nuestro proyecto!
              </Typography>
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
                px={2}
                width={{ xs: "100%", md: "49%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
              >
                <Typography component="body1">
                  Esta página es el resultado final para nuestro proyecto del
                  Coding Bootcamp. Durante 3 arduas semanas, el equipo, decidió
                  optar como temática, la estructuración de una página web,
                  acerca de venta de muebles, de diferentes categorías. Como
                  todo nuevo proyecto, se estuvo desde el primer minuto,
                  decidiendo que era lo mas conveniente, desde layouts creados
                  en figma, sacando ideas de páginas similares en cuanto a la
                  tematica y sus contenidos. A la hora de pasar todo esto al
                  codigo, el equipo siempre estuvo en constante comunicación,
                  mediante discord, herramienta fundamental que empleamos para
                  así estar conectados y poder tomar decisiones. Por momentos
                  optamos por el asignamiento de diferentes tareas para cada uno
                  del equipo, así como también, en otras etapas, la
                  implementacíon de perprograming, ya que en determinadas
                  circunstancias, alguno del equipo en particular, que se
                  encontraba con mayor facilidad, para poder realizar alguna
                  tarea en especifico, explicara para que todos pudiesemos
                  aprender un poco más durante la aplicación de codigo.
                </Typography>
              </Box>
              <Box
                px={2}
                width={{ xs: "100%", md: "49%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
              >
                <Typography component="body1">
                  Durante los ultimos días del proyecto, se fueron puliendo
                  funcionalidades como por ejemplo, las del carrito de compras,
                  así como tambíen, todo lo relacionado al responsive de las
                  vistas, para una mejor experiencia del usuario. Fue realmente
                  una experiencia muy linda y gratificante, contentos del
                  resultado que pudimos lograr. Muchas gracias por tomarse el
                  tiempo de leer toda esta pequeña gran parte de lo que fue la
                  experiencia de nuestro proyecto final. Esperemos que este sea
                  el primero, de muchos proyectos por venir! <br /> Lucía
                  Rodríguez
                  <br />
                  Felipe Fontana <br /> Federico Gorriaran <br /> Fernando
                  Bogorja
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              bgcolor={theme.white}
              borderRadius="10px"
            >
              <PeopleCard
                name="Pepita Organa"
                image={require("../../assets/linkedin-profile-example-3.png")}
              />
              <PeopleCard
                name="Pepita Organa"
                image={require("../../assets/linkedin-profile-example-3.png")}
              />
              <PeopleCard
                name="Pepita Organa"
                image={require("../../assets/linkedin-profile-example-3.png")}
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
        width="150px"
        srcSet={image}
        alt=""
      />
      <Typography textAlign="center" component="h5">
        {name}
      </Typography>
    </Box>
  );
};
export default AboutUs;
