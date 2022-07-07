import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { currentTheme as theme, effects } from "../../theme";

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
        height={{ xl: "100vh" }}
        bgcolor={theme.white}
        sx={{
          backgroundImage: `url(${require("../../assets/header-aboutus.png")})`,
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
      >
        <Typography
          component="h4"
          fontSize={50}
          textAlign="center"
          paddingBottom="30px"
          color={theme.white}
          fontFamily={theme.fonts.title}
          fontWeight="bold"
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
            border="4px solid red"
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

      <Box sx={{ width: "80%", border: "4px solid green" }}>
        <Grid container>
          <Grid item xs={12} my={20} border="2px solid blue">
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
                  <Typography variant="body1" color={theme.text}>
                    Esta página surge como resultado del proyecto final
                    realizado en Hack Academy, en el marco de su Coding Bootcamp
                    de full-stack Web Developer. El mismo consiste en un curso
                    de fuerte carga teórico-práctica, con una duración de 3
                    meses, el cual implica unas 600 horas de dedicación
                    intensiva. Como consigna se nos solicitó la implementación
                    de un sitio e-commerce, para el cual el equipo tomó como
                    temática la mueblería de diseño. Se contó con un plazo de 3
                    semanas para realizarlo y cada uno de los integrantes
                    invirtió aproximadamente 150hs de trabajo. Cómo puntapié
                    inicial tomamos un emprendimiento existente, llamado Reizen
                    que, con el permiso de sus creadoras, parte de su branding
                    fue utilizado para que el sitio se viera mas real.
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
          <Grid item xs={12} my={20} border="2px solid blue">
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
                <Typography
                  color={theme.text}
                  sx={{ lineHeight: "30px" }}
                  variant="body1"
                >
                  Para el desarrollo de las ideas iniciales, el equipo optó por
                  utilizar la herramienta Figma ya que con ella es fácil
                  interactuar entre los integrantes en tiempo real.. En primer
                  lugar, desarrollamos un MER (Modelo Entidad - Relación) Para
                  tener claro cuáles serian las partes que formarían el proyecto
                  y su estructura. Luego de esto se decidió la base de datos a
                  utilizar, resultando la elegida, MongoDB. A partir de aquí los
                  esquemas definidos fueron: Usuario, Producto, Categoría, Orden
                  y Dirección de envío. Las ideas de diseño fueron tomadas de
                  varios sitios similares en cuanto a temática y contenido
                  tratando de, con cada parte, formar un todo armonioso. En
                  cuanto a la metodología de trabajo utilizada encontramos en la
                  herramienta "xxxxxxxxxxxxx GitHub" una buena forma de dividir
                  y asignar las tareas, siguiendo la metodología SCRUM. A su
                  vez, utilizamos Discord quién brinda una comunicación fluida
                  entre los integrantes del equipo y con los instructores.
                  Gracias a todo esto el proyecto fue creado y organizado de
                  manera 100% remota. El trabajo fue dividido en dos partes, por
                  un lado el código del back-end y por otro el del front-end.
                  Para los cuales fueron creados dos repositorios en GitHub. Al
                  comenzar a pasar las ideas a código, decidimos planear la
                  estructura básica del back-end (rutas, modelos, controladore)
                  entre todos, para luego poder conectar las distintas partes
                  del front-end de manera individual y más fluída. El equipo
                  trabajó muy cómodo desde este marco y el grupo humano fue muy
                  contributivo, alegre y solidario entre si, lo que permitió
                  llegar a un buen avance para cada Demo y a un mejor resultado
                  final.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} my={20} border="2px solid blue">
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
                <Typography variant="body1" color={theme.text}>
                  Durante los últimos días del desarrollo, se fueron puliendo
                  funcionalidades, tales como la del carrito de compras y el
                  login. A su vez se fueron adecuando las partes del front-end
                  al diseño propuesto, se eligieron fuentes, íconos, imágenes,
                  tamaño de los componentes, etc . lo cual implicó mucha
                  dedicación en los detalles para que el proyecto sea responsive
                  y para asegurar una mejor experiencia del usuario.
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
          <Grid item xs={12} my={20} border="2px solid blue">
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
          <Grid item xs={12} my={20} border="2px solid blue">
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
                <Typography variant="body1" color={theme.text}>
                  Ha sido realmente una experiencia muy linda y gratificante y
                  estamos muy contentos con el resultado logrado. Llegamos a la
                  conclusión, luego de estos meses de trabajo intenso, de que no
                  importa la cultura idioma o rama de experticia previa de cada
                  uno, los lenguajes de programación son universales. Este
                  proyecto no es sólo una unión de código, sino también de
                  voluntades y de esfuerzo de cuatro personas con una meta en
                  común: superarse y abrirse paso en una nueva etapa de sus
                  vidas. Muchas gracias por tomarse el tiempo de leer esta
                  pequeña reseña de lo que fue el proceso de nuestro proyecto
                  final. Esperamos que éste sea el primero de muchos proyectos
                  por venir. Feli Fer Fede Lu
                </Typography>
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
        fontWeight="bold"
      >
        {name}
      </Typography>
      <Typography
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
