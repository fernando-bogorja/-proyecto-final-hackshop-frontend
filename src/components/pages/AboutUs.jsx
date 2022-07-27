import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { currentTheme as theme, effects } from "../../theme";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        py={20}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bgcolor={theme.white}
        sx={{
          backgroundImage: `url(${require("../../assets/header-aboutus.png")})`,
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
      >
        <Typography
          component="h4"
          fontSize={60}
          textAlign="center"
          paddingTop={1}
          paddingBottom="30px"
          color={theme.white}
          fontFamily="Bodoni Moda"
          fontWeight="500"
        >
          ¡Sobre este proyecto!
        </Typography>

        <Grid
          container
          width="100%"
          justifyContent="center"
          columns={{ xs: 12, sm: 3 }}
        >
          <Box
            width="80%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
          >
            <PeopleCard
              name="Lucía Rodriguez"
              image={require("../../assets/linkedin-lu.png")}
              linkedin="lurodriguezroldan"
              github="LuuRoldan"
            />
            <PeopleCard
              name="Felipe Fontana"
              image={require("../../assets/linkedin-feli.png")}
              linkedin="felipefontana/"
              github="elFonTii/"
            />
            <PeopleCard
              name="Federico Gorriaran"
              image={require("../../assets/linkedin-fede.png")}
              linkedin="federico-gorriaran/"
              github="fedegorriaran"
            />
            <PeopleCard
              name="Fernando Bogorja"
              image={require("../../assets/linkedin-fer.png")}
              linkedin="fernando-bogorja-rodriguez/"
              github="fernando-bogorja"
            />
          </Box>
        </Grid>
      </Box>

      <Box display="flex" sx={{ width: "78%" }}>
        <Grid container display="flex" justifyContent="center">
          <Grid justifyContent="center" item xs={12} marginBottom={10}>
            <Box display="flex" justifyContent="flex-start" pt={15}>
              <Typography fontFamily={theme.fonts.title} variant="h3">
                ¿Como nace este proyecto?
              </Typography>
            </Box>

            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 10 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="justify"
                sx={{
                  flexDirection: {
                    sm: "row",
                    xl: "column",
                  },
                  alignItems: "flex-start",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  maxWidth={{ xs: "100%", md: "80%" }}
                  textAlign="left"
                >
                  <Typography
                    fontFamily={theme.fonts.text}
                    color={theme.text}
                    variant="body1"
                    fontSize={18}
                  >
                    Esta página surge como resultado del proyecto final
                    realizado en Hack Academy, en el marco de su
                    <b style={{ color: theme.black }}>
                      {" "}
                      Coding Bootcamp de full-stack Web Developer
                    </b>
                    . El mismo consiste en un curso de fuerte carga
                    teórico-práctica, con una duración de 3 meses, el cual
                    implica unas 600 horas de dedicación intensiva. Como
                    consigna se nos solicitó la implementación de un{" "}
                    <b style={{ color: theme.black }}> sitio e-commerce</b>,
                    para el cual el equipo tomó como temática la mueblería de
                    diseño. Se contó con un plazo de 3 semanas para realizarlo y
                    cada uno de los integrantes invirtió aproximadamente{" "}
                    <b style={{ color: theme.black }}> 150hs de trabajo</b>.
                    Cómo puntapié inicial tomamos un emprendimiento existente,
                    llamado <b style={{ color: theme.black }}>Reizen</b> que,
                    con el permiso de sus creadoras, parte de su branding fue
                    utilizado para que el sitio se viera mas real.
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="initial"
                width={{ xs: "70%", md: "50%" }}
                pt={{ xs: 20, md: 0 }}
                pb={{ xs: 20, md: 0 }}
                bgcolor={theme.white}
                borderRadius="10px"
              >
                <img
                  style={{ objectFit: "contain" }}
                  width="60%"
                  srcSet={require("../../assets/logo_sin_fondo_negro_reizen.png")}
                  alt="logo-reizen"
                />
              </Box>
            </Box>
          </Grid>
          <hr class="shine" style={{ width: "400px" }}></hr>
          <Grid item xs={12} mb={10}>
            <Box display="flex" justifyContent="flex-start" py={5}>
              <Typography fontFamily={theme.fonts.title} variant="h3">
                El inicio...
              </Typography>
            </Box>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="center"
              maxWidth={{ xs: "100%", md: "100%" }}
              marginBottom="8%"
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 3 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
              >
                <img
                  width="60%"
                  srcSet={require("../../assets/figma.png")}
                  alt="logo-reizen"
                />
              </Box>
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 5, md: 3 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="center"
              >
                <Typography
                  color={theme.text}
                  sx={{ lineHeight: "30px" }}
                  fontFamily={theme.fonts.text}
                  variant="body1"
                  fontSize={18}
                  textAlign="left"
                  width={{ md: "100%" }}
                >
                  Para el desarrollo de las ideas iniciales, el equipo optó por
                  utilizar la herramienta{" "}
                  <b style={{ color: theme.black }}>Figma</b> ya que con ella es
                  fácil interactuar entre los integrantes en tiempo real. En
                  primer lugar, desarrollamos un{" "}
                  <b style={{ color: theme.black }}>MER</b> (Modelo Entidad -
                  Relación) para tener claro cuáles serian las partes que
                  formarían{" "}
                  <b style={{ color: theme.black }}>
                    el proyecto y su estructura
                  </b>
                  . Luego de esto se decidió la base de datos a utilizar,
                  resultando la elegida,{" "}
                  <b style={{ color: theme.black }}>MongoDB</b>. A partir de
                  aquí los esquemas definidos fueron:{" "}
                  <b style={{ color: theme.black }}>
                    Usuario, Producto, Categoría, Orden y Dirección de envío
                  </b>
                  .<br></br>
                  <p style={{ paddingTop: "3%" }}>
                    Las ideas de diseño fueron tomadas de varios sitios
                    similares en cuanto a temática y contenido tratando de, con
                    cada parte, formar un todo armonioso. En cuanto a la{" "}
                    <b style={{ color: theme.black }}>metodología de trabajo</b>{" "}
                    utilizada encontramos en la herramienta{" "}
                    <b style={{ color: theme.black }}>
                      "Project boards de GitHub"
                    </b>{" "}
                    una buena forma de dividir y asignar las tareas, siguiendo
                    la metodología SCRUM. A su vez, utilizamos Discord quién
                    brinda una comunicación fluida entre los integrantes del
                    equipo y con los instructores. Gracias a todo esto{" "}
                    <b style={{ color: theme.black }}>
                      el proyecto fue creado y organizado
                    </b>{" "}
                    de manera <b style={{ color: theme.black }}>100% remota</b>.{" "}
                  </p>{" "}
                  <p style={{ paddingTop: "3%" }}>
                    El trabajo fue dividido en{" "}
                    <b style={{ color: theme.black }}>dos partes</b>, por un
                    lado el código del{"  "}
                    <b style={{ color: theme.black }}>back-end</b> y por otro el
                    del <b style={{ color: theme.black }}>front-end</b>. Para
                    los cuales fueron creados dos repositorios en GitHub.
                  </p>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <hr class="shine" style={{ width: "400px" }}></hr>
          <Grid item xs={12} my={20}>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="flex-start"
              mb={5}
            >
              <Typography
                textAlign="center"
                fontFamily={theme.fonts.title}
                variant="h3"
              >
                MER
              </Typography>
              <img
                width="100%"
                srcSet={require("../../assets/ecommerce-mer.png")}
                alt="mer-reizen"
              />
            </Box>
          </Grid>
          <hr class="shine" style={{ width: "400px" }}></hr>
          <Grid item xs={12} my={20}>
            <Box display="flex" justifyContent="flex-start" mb={5}>
              <Typography
                textAlign="center"
                fontFamily={theme.fonts.title}
                variant="h3"
              >
                Proceso
              </Typography>
            </Box>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box
                width={{ xs: "100%", md: "38%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
                textAlign="left"
              >
                <Typography
                  variant="body1"
                  color={theme.text}
                  fontFamily={theme.fonts.text}
                  fontSize={18}
                >
                  <p style={{ paddingTop: "3%" }}>
                    Al comenzar a pasar las ideas a código, decidimos planear la{" "}
                    <b style={{ color: theme.black }}>estructura básica</b> del
                    back-end (
                    <b style={{ color: theme.black }}>
                      rutas, modelos, controladore
                    </b>
                    ) entre todos, para luego poder conectar las distintas
                    partes del front-end de manera individual y más fluída. El{" "}
                    <b style={{ color: theme.black }}>equipo</b> trabajó muy
                    cómodo desde este marco y el grupo humano fue muy{" "}
                    <b style={{ color: theme.black }}>
                      contributivo, alegre y solidario
                    </b>{" "}
                    entre si, lo que permitió llegar a un buen avance para cada
                    Demo y a un mejor resultado final.
                  </p>
                  <p style={{ paddingTop: "3%" }}>
                    Durante los{" "}
                    <b style={{ color: theme.black }}>
                      últimos días del desarrollo
                    </b>
                    , se fueron puliendo funcionalidades, tales como la del
                    carrito de compras y el login. A su vez{" "}
                    <b style={{ color: theme.black }}>
                      se fueron adecuando las partes del front-end al diseño
                      propuesto
                    </b>
                    , se eligieron fuentes, íconos, imágenes, tamaño de los
                    componentes, etc . lo cual implicó mucha dedicación en los
                    detalles para que el proyecto sea{" "}
                    <b style={{ color: theme.black }}>responsive</b> y para
                    asegurar una{" "}
                    <b style={{ color: theme.black }}>
                      mejor experiencia del usuario
                    </b>
                    .
                  </p>
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
              >
                <img
                  style={{ objectFit: "contain" }}
                  width="100%"
                  srcSet={require("../../assets/mockup.png")}
                  alt="logo-reizen"
                />
              </Box>
            </Box>
          </Grid>
          <hr class="shine" style={{ width: "400px" }}></hr>
          <Grid item xs={12} my={20}>
            <Box display="flex" justifyContent="flex-start" py={5}>
              <Typography
                textAlign="center"
                fontFamily={theme.fonts.title}
                variant="h3"
              >
                Resultado..
              </Typography>
            </Box>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="center"
              maxWidth={{ xs: "100%", md: "100%" }}
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                py={{ xs: 2, md: 0 }}
                minHeight="300px"
                bgcolor={theme.white}
                borderRadius="10px"
              >
                <img
                  width="90%"
                  srcSet={require("../../assets/hello_world.jpg")}
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
                <Typography
                  color={theme.text}
                  sx={{ lineHeight: "30px" }}
                  fontFamily={theme.fonts.text}
                  variant="body1"
                  fontSize={18}
                  textAlign="left"
                  width={{ md: "100%" }}
                >
                  Ha sido realmente una{" "}
                  <b style={{ color: theme.black }}>
                    experiencia muy linda y gratificante
                  </b>{" "}
                  y estamos muy contentos con el resultado logrado . Llegamos a
                  la conclusión, luego de estos meses de trabajo intenso, de que
                  no importa la cultura idioma o rama de experticia previa de
                  cada uno,{" "}
                  <b style={{ color: theme.black }}>
                    los lenguajes de programación son universales
                  </b>
                  .
                  <p style={{ paddingTop: "3%" }}>
                    Este proyecto no es sólo una unión de código, sino también
                    de voluntades y de esfuerzo de cuatro personas con una meta
                    en común: superarse y abrirse paso en una nueva etapa de sus
                    vidas.{" "}
                    <b style={{ color: theme.black }}>
                      Muchas gracias por tomarse el tiempo de leer
                    </b>{" "}
                    esta pequeña reseña de lo que fue el proceso de nuestro
                    proyecto final. Esperamos que éste sea el primero de muchos
                    proyectos por venir.
                  </p>
                  <p
                    style={{
                      paddingTop: "20%",
                      color: theme.black,
                      textAlign: "right",
                    }}
                  >
                    <b>Felipe, Federico, Fernando y Lucía.</b>
                  </p>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <hr class="shine" style={{ width: "400px" }}></hr>
          <Grid item xs={12} my={20}>
            <Box sx={{ display: "block", width: "100%" }}>
              <Typography fontFamily={theme.fonts.title} variant="h3">
                Tecnoligías
              </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-start" pt={10}>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 20 }}
                >
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/javascript.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="JavaScript"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/node-js.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Node.js"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon textAlign="center">
                        <img
                          style={{ width: "55px" }}
                          srcSet={require("../../assets/express.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Express.js"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/mongodb.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="MongoDB"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/react.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="React.js"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/redux.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Redux"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/logo-vercel.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Vercel"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/git.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText primary="Git" sx={{ textAlign: "right" }} />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/github.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="GitHub"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>
                        <img
                          style={{ width: "30px" }}
                          srcSet={require("../../assets/material-ui-1.png")}
                          alt="logo"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Material UI"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const PeopleCard = ({ image, name, linkedin, github }) => {
  return (
    <Box padding={2} margin={2} sx={{ borderRadius: "8px" }}>
      <img
        style={{ borderRadius: "50%", marginBottom: "20px" }}
        width="250px"
        srcSet={image}
        alt=""
      />
      <Typography
        textAlign="center"
        variant="h6"
        fontSize="25px"
        color={theme.white}
        fontFamily={theme.fonts.title}
        fontWeight="400"
      >
        {name}
      </Typography>
      <Typography
        fontFamily="Raleway"
        textAlign="center"
        variant="body1"
        color={theme.white}
        fontWeight="thin"
        py={2}
      >
        Fullstack Developer Jr
      </Typography>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        marginTop={2}
        marginBottom={2}
      >
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          className="link-none"
        >
          <FontAwesomeIcon
            className={effects.zoom}
            style={{ marginRight: "15px" }}
            icon={faLinkedin}
            size="2x"
            color={theme.white}
          />
        </a>
        <a href={`https://github.com/${github}`} className="link-none">
          <FontAwesomeIcon
            className={effects.zoom}
            icon={faGithubSquare}
            size="2x"
            color={theme.white}
          />
        </a>
      </Box>
    </Box>
  );
};
export default AboutUs;
