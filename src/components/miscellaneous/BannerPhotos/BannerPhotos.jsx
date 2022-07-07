import { Box, Typography, Grid } from "@mui/material";
import "@fontsource/arima-madurai";
import { currentTheme as theme } from "../../../theme";
import "./BannerPhotos.css";

function BannerFotos() {
  const photo1 = {
    id: 1,
    img: "https://f.fcdn.app/imgs/2454f0/www.kavehome.com.uy/kaveuy/9b99/webp/catalogo/S330VA_23_2/1920-1200/butaca-bobly-tela-varese-rosa.jpg",
    title: "Todos los Espacios",
    width: "21rem",
    height: "46rem",
    backgroundPosition: "21rem 0",
    backgroundSize: "cover",
  };
  const item = [
    {
      id: 2,
      img: "https://f.fcdn.app/imgs/1bfe18/www.kavehome.com.uy/kaveuy/a20d/webp/recursos/48/600x0/banner-3.jpg",
      title: "Recibidor",
      width: "100%",
      height: "21rem",
      backgroundPosition: "21rem 0px",
      backgroundSize: "cover",
    },
    {
      id: 3,
      img: "https://f.fcdn.app/imgs/90a7ed/www.kavehome.com.uy/kaveuy/ccde/webp/recursos/49/600x0/banner-4-vo2.jpg",
      title: "Living",
      width: "21rem",
      height: "21rem",
      backgroundPosition: "21rem 0px",
      backgroundSize: "cover",
    },
    {
      id: 4,
      img: "https://f.fcdn.app/imgs/6c396f/www.kavehome.com.uy/kaveuy/a5a7/webp/recursos/47/600x0/banner.jpg",
      title: "Comedor",
      width: "21rem",
      height: "21rem",
      backgroundPosition: "21rem 0px",
      backgroundSize: "cover",
    },
    {
      id: 5,
      img: "https://f.fcdn.app/imgs/74aa80/www.kavehome.com.uy/kaveuy/9a1d/webp/recursos/50/600x0/banner-copia.jpg",
      title: "Exterior",
      width: "21rem",
      height: "21rem",
      backgroundPosition: "21rem 0px",
      backgroundSize: "cover",
    },
    {
      id: 6,
      img: "https://i0.wp.com/reizen.com.uy/wp-content/uploads/2020/02/2AB8C37E-32C1-463B-A22B-08BD726ED1EE.jpeg?w=1536&ssl=1",
      title: "Dormitorio",
      width: "21rem",
      height: "21rem",
      backgroundPosition: "0px 0px",
      backgroundSize: "cover",
    },
    {
      id: 7,
      img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b138f9f/images/productsets/1481921.jpg?sw=1200",
      title: "Oficina",
      width: "11.5rem",
      height: "11.5rem",
      backgroundPosition: "-50px 0px",
      backgroundSize: "100% 100%",
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      backgroundColor={theme.gray}
      my="3%"
      py="5rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="78%"
        height="100%"
        // backgroundColor="yellow"
      >
        <Box display="flex" alignSelf="flex-start">
          <Typography variant="h4" color="gray" fontFamily={theme.fonts.title}>
            Selecciona por Categoría
          </Typography>
        </Box>
        <Grid
          container
          width="100%"
          columns={{ xs: 12, sm: 3 }}
          justifyContent="space-around"
          // gap={{ xs: 0, xl: "1rem" }}
          // backgroundColor="red"
        >
          {/* column 1 */}
          <Box
            className="grid"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            // backgroundColor="blue"
            sx={{ width: "21rem", height: "50rem" }}
          >
            <figure className="effect-chico">
              <Box
                className="foto foto1"
                width={photo1.width}
                height={photo1.height}
                textAlign="center"
                sx={{
                  background: `url(${photo1.img})`,
                  backgroundPosition: photo1.backgroundPosition,
                  backgroundSize: photo1.backgroundSize,
                }}
              >
                <figcaption>
                  <Typography
                    className="text"
                    variant="h5"
                    color="rgb(30, 30, 30)"
                    fontFamily={theme.fonts.title}
                  >
                    Butacas
                  </Typography>
                  <p>Explora todos nuestros diseños.</p>
                </figcaption>
              </Box>
            </figure>
          </Box>
          {/* column 2 */}
          <Box
            className="grid"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            // backgroundColor="blue"
            textAlign="center"
            marginTop={{
              xs: "4rem",
              sm: "4rem",
              md: "4rem",
              lg: "4rem",
              xl: "8rem",
            }}
            sx={{ width: "21rem", height: "46rem" }}
          >
            <figure className="effect-chico">
              <Box
                className="foto foto2"
                width={item[0].width}
                height={item[0].height}
                sx={{
                  background: `url(${item[0].img})`,
                  backgroundPosition: item[0].backgroundPosition,
                  backgroundSize: item[0].backgroundSize,
                }}
              >
                <figcaption>
                  <Typography
                    className="text"
                    variant="h5"
                    color="rgb(30, 30, 30)"
                    fontFamily={theme.fonts.title}
                  >
                    Racks
                  </Typography>
                  <p>Explora todos nuestros diseños.</p>
                </figcaption>
              </Box>
            </figure>
            <figure className="effect-chico">
              <Box
                className="foto foto3"
                width={item[1].width}
                height={item[1].height}
                sx={{
                  background: `url(${item[1].img})`,
                  backgroundPosition: item[1].backgroundPosition,
                  backgroundSize: item[1].backgroundSize,
                }}
              >
                <figcaption>
                  <Typography
                    className="text"
                    variant="h5"
                    color="rgb(30, 30, 30)"
                    fontFamily={theme.fonts.title}
                  >
                    Sofás
                  </Typography>
                  <p>Explora todos nuestros diseños.</p>
                </figcaption>
              </Box>
            </figure>
          </Box>
          {/* column 3 */}
          <Box
            className="grid"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            // backgroundColor="blue"
            textAlign="center"
            marginTop={{ xs: "4rem", sm: "4rem", md: "4rem", xl: "0rem" }}
            sx={{ width: "21rem", height: "46rem" }}
          >
            <figure className="effect-chico">
              <Box
                className=" foto foto4"
                width={item[2].width}
                height={item[2].height}
                sx={{
                  background: `url(${item[2].img})`,
                  backgroundPosition: item[2].backgroundPosition,
                  backgroundSize: item[2].backgroundSize,
                }}
              >
                <figcaption>
                  <Typography
                    className="text"
                    variant="h5"
                    color="rgb(30, 30, 30)"
                    fontFamily={theme.fonts.title}
                  >
                    Mesas
                  </Typography>
                  <p>Explora todos nuestros diseños.</p>
                </figcaption>
              </Box>
            </figure>
            <figure className="effect-chico">
              <Box
                className="foto foto5"
                width={item[3].width}
                height={item[3].height}
                sx={{
                  background: `url(${item[3].img})`,
                  backgroundPosition: item[3].backgroundPosition,
                  backgroundSize: item[3].backgroundSize,
                }}
              >
                <figcaption>
                  <Typography
                    className="text"
                    variant="h5"
                    color="rgb(30, 30, 30)"
                    fontFamily={theme.fonts.title}
                  >
                    Exterior
                  </Typography>
                  <p>Explora todos nuestros diseños.</p>
                </figcaption>
              </Box>
            </figure>
          </Box>
          {/* column 4 */}
          <Box
            className="grid"
            width={{
              xs: "21rem",
              sm: "21rem",
              md: "21rem",
              lg: "21rem",
              xl: "21rem",
            }}
            height={{ xs: "46rem", md: "46rem", lg: "46rem", xl: "46rem" }}
            display="flex"
            flexDirection={{
              xs: "column",
              sm: "column",
              md: "column",
              lg: "column",
              xl: "column",
            }}
            justifyContent="space-between"
            // backgroundColor="blue"
            textAlign="center"
            marginTop={{
              xs: "4rem",
              sm: "4rem",
              md: "4rem",
              lg: "4rem",
              xl: "0rem",
            }}
          >
            <figure className="effect-chico">
              <Box
                className="foto foto6"
                width={item[4].width}
                height={item[4].height}
                sx={{
                  background: `url(${item[4].img})`,
                  backgroundPosition: item[4].backgroundPosition,
                  backgroundSize: item[4].backgroundSize,
                }}
              >
                <figcaption>
                  <Typography
                    className="text"
                    variant="h5"
                    fontFamily={theme.fonts.title}
                  >
                    Bibliotecas
                  </Typography>
                  <p>Explora todos nuestros diseños.</p>
                </figcaption>
              </Box>
            </figure>
            <Box width="21rem" height="21rem">
              <figure className="effect-chico">
                <Box
                  className="foto foto7"
                  width={{
                    xs: "21rem",
                    md: "21rem",
                    lg: "21rem",
                    xl: `${item[5].width}`,
                  }}
                  height={{
                    xs: "21rem",
                    md: "21rem",
                    lg: "21rem",
                    xl: `${item[5].height}`,
                  }}
                  sx={{
                    background: `url(${item[5].img})`,
                    backgroundPosition: item[5].backgroundPosition,
                    backgroundSize: item[5].backgroundSize,
                  }}
                >
                  <figcaption style={{ padding: "3rem" }}>
                    <Typography
                      className="text"
                      variant="h6"
                      color="rgb(30, 30, 30)"
                      fontFamily={theme.fonts.title}
                    >
                      Oficina
                    </Typography>
                    <p style={{ textAlign: "center", paddingRight: "10px" }}>
                      Explora todos nuestros diseños.
                    </p>
                  </figcaption>
                </Box>
              </figure>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default BannerFotos;

/*     xs, extra-small: 0px - 600px
       sm, small: 600px - 900px
       md, medium: 900px -1200px
       lg, large: 1200px -1536px
       xl, extra-large: 1536px */
