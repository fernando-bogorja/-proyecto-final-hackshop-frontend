import { Box, Typography, Grid, Link } from "@mui/material";
import "@fontsource/arima-madurai";
import { currentTheme as theme } from "../../../theme";
import "./BannerPhotos.css";

function BannerFotos() {
  // const itemData = [
  //   {
  //     img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw433eddd7/images/productsets/1512503.jpg?sw=1600",
  //     title: "Todos los Espacios",
  //   },
  //   {
  //     img: "https://f.fcdn.app/imgs/1bfe18/www.kavehome.com.uy/kaveuy/a20d/webp/recursos/48/600x0/banner-3.jpg",
  //     title: "Recibidor",
  //   },
  //   {
  //     img: "https://f.fcdn.app/imgs/90a7ed/www.kavehome.com.uy/kaveuy/ccde/webp/recursos/49/600x0/banner-4-vo2.jpg",
  //     title: "Living",
  //   },
  //   {
  //     img: "https://f.fcdn.app/imgs/6c396f/www.kavehome.com.uy/kaveuy/a5a7/webp/recursos/47/600x0/banner.jpg",
  //     title: "Comedor",
  //   },
  //   {
  //     img: "https://f.fcdn.app/imgs/74aa80/www.kavehome.com.uy/kaveuy/9a1d/webp/recursos/50/600x0/banner-copia.jpg",
  //     title: "Exterior",
  //   },
  //   {
  //     img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw644288a9/images/productsets/1685510.jpg?sw=1600",
  //     title: "Dormitorio",
  //   },
  //   {
  //     img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b138f9f/images/productsets/1481921.jpg?sw=1200",
  //     title: "Oficina",
  //   },
  // ];

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        backgroundColor={theme.gray}
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          // border="1px solid pink"
          my="5%"
        >
          <Box
            width="100%"
            className="fotos"
            sx={{
              display: "flex",
              justifyContent: "center",
              zIndex: "5",
              paddingX: { xs: "10%", sm: "none" },
              // border: "2px solid blue",
            }}
          >
            <Grid
              container
              spacing={8}
              columns={{ xs: 3, sm: 6, md: 6, lg: 9, xl: 12 }}
              display="flex"
              justifyContent="center"
              paddingLeft={"0 !important"}
              margin={0}
            >
              <Grid item width="100%" padding={"0 !important"}>
                <Typography
                  variant="h4"
                  color="Grey"
                  fontFamily={theme.fonts.title}
                >
                  Selecciona por Categoría
                </Typography>
              </Grid>
              {/* column 1 */}
              <Grid
                width="21rem"
                display="flex"
                justifyContent="center"
                item
                xs={3}
                marginTop={{ xs: 0, sm: 0, md: 0, lg: "2.5rem", xl: "2.5rem" }}
                padding={"0 !important"}
              >
                <Box
                  className="grid"
                  sx={{
                    position: "absolute",
                    margin: "0 auto",
                    padding: " 1em 0 4em ",
                    maxWidth: "1000px",
                    listStyle: "none",
                    textAlign: "center",
                  }}
                >
                  <figure className="effect-chico">
                    <Box
                      className="foto"
                      zIndex={5}
                      width="21rem"
                      height="46rem"
                      sx={{
                        background: `url(https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw433eddd7/images/productsets/1512503.jpg??auto=format&fit=crop&w=800)`,
                        backgroundPosition: "21rem 0",
                        backgroundSize: "300% 100%",
                      }}
                    ></Box>
                    <figcaption>
                      <Typography
                        className="text"
                        variant="h5"
                        color="white"
                        fontFamily={theme.fonts.title}
                        marginLeft="1rem"
                      >
                        Todos los <span>Espacios</span>
                      </Typography>
                      <p>Explora todos nuestros diseños.</p>
                    </figcaption>
                  </figure>
                </Box>
              </Grid>

              {/* column 2  */}
              <Grid
                item
                xs={3}
                paddingTop={{ xs: "0rem !important" }}
                margin={0}
                display="flex"
                justifyContent="center"
                paddingLeft={"0 !important"}
              >
                <Box
                  className="BoxVert1"
                  width="21rem"
                  zIndex={5}
                  display="flex"
                  flexDirection="column"
                  gap="4rem"
                  marginTop={{
                    xs: "4rem",
                    sm: "4rem",
                    md: 0,
                    lg: "7rem",
                    xl: "7rem",
                  }}
                >
                  <Box
                    className="grid"
                    sx={{
                      position: "relative",
                      margin: "0 auto",
                      // padding: "1em 0 4em",
                      maxWidth: "1000px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <figure className="effect-chico">
                      <Box
                        className="foto"
                        zIndex={5}
                        width="21rem"
                        height="21rem"
                        sx={{
                          background: `url(https://f.fcdn.app/imgs/1bfe18/www.kavehome.com.uy/kaveuy/a20d/webp/recursos/48/600x0/banner-3.jpg?auto=format&fit=crop&w=800)`,
                          backgroundPosition: "21rem 0px",
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <figcaption>
                          <Typography
                            className="text"
                            variant="h5"
                            color="white"
                            fontFamily={theme.fonts.title}
                            marginLeft="1rem"
                          >
                            Recibidor
                          </Typography>
                          <p>Explora todos nuestros diseños.</p>
                        </figcaption>
                      </Box>
                    </figure>
                  </Box>
                  {/* foto 3 */}
                  <Box
                    className="grid"
                    sx={{
                      position: "relative",
                      margin: "0 auto",
                      maxWidth: "1000px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <figure className="effect-chico">
                      <Box
                        className="foto"
                        zIndex={5}
                        width="21rem"
                        height="21rem"
                        sx={{
                          background: `url(https://f.fcdn.app/imgs/90a7ed/www.kavehome.com.uy/kaveuy/ccde/webp/recursos/49/600x0/banner-4-vo2.jpg?auto=format&fit=crop&w=800)`,
                          backgroundPosition: "21rem 0px",
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <figcaption>
                          <Typography
                            className="text"
                            variant="h5"
                            color="white"
                            fontFamily={theme.fonts.title}
                            marginLeft="1rem"
                          >
                            Living
                          </Typography>
                          <p>Explora todos nuestros diseños.</p>
                        </figcaption>
                      </Box>
                    </figure>
                  </Box>
                </Box>
              </Grid>

              {/* column 3 */}
              <Grid
                item
                xs={3}
                padding={0}
                paddingTop={{ xs: "0rem !important" }}
                display="flex"
                justifyContent="center"
                paddingLeft={"0 !important"}
              >
                <Box
                  className="BoxVert2"
                  width="21rem"
                  zIndex={5}
                  display="flex"
                  flexDirection="column"
                  gap="4rem"
                  marginTop={{ xs: "4rem", sm: 0, md: "4rem", lg: 0, xl: 0 }}
                >
                  {/* foto 4*/}
                  <Box
                    className="grid"
                    sx={{
                      position: "relative",
                      margin: "0 auto",
                      maxWidth: "1000px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <figure className="effect-chico">
                      <Box
                        className="foto"
                        width="21rem"
                        height="21rem"
                        sx={{
                          background: `url(https://f.fcdn.app/imgs/6c396f/www.kavehome.com.uy/kaveuy/a5a7/webp/recursos/47/600x0/banner.jpg?auto=format&fit=crop&w=800)`,
                          backgroundPosition: "21rem 0px",
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <figcaption>
                          <Typography
                            className="text"
                            variant="h5"
                            color="white"
                            fontFamily={theme.fonts.title}
                            marginLeft="1rem"
                          >
                            Comedor
                          </Typography>
                          <p>Explora todos nuestros diseños.</p>
                        </figcaption>
                      </Box>
                    </figure>
                  </Box>

                  {/* foto 5*/}
                  <Box
                    className="grid"
                    sx={{
                      position: "relative",
                      margin: "0 auto",
                      maxWidth: "1000px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <figure className="effect-chico">
                      <Box
                        className="foto"
                        width="21rem"
                        height="21rem"
                        sx={{
                          background: `url(https://f.fcdn.app/imgs/74aa80/www.kavehome.com.uy/kaveuy/9a1d/webp/recursos/50/600x0/banner-copia.jpg?auto=format&fit=crop&w=800)`,
                          backgroundPosition: "21rem 0px",
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <figcaption>
                          <Typography
                            className="text"
                            variant="h5"
                            color="white"
                            fontFamily={theme.fonts.title}
                            marginLeft="1rem"
                          >
                            Exterior
                          </Typography>
                          <p>Explora todos nuestros diseños.</p>
                        </figcaption>
                      </Box>
                    </figure>
                  </Box>
                </Box>
              </Grid>

              {/* column 4 */}
              <Grid
                item
                xs={3}
                width="21rem"
                paddingTop={{ xs: "0 !important" }}
                margin={"0 !important"}
                display="flex"
                justifyContent={"center !important"}
                alignItems={"start !important"}
                padding={"0 !important"}
                gap="4rem"
              >
                <Box
                  className="BoxVert3"
                  gap="4rem"
                  width={{
                    xs: "21rem",
                    sm: "21rem",
                    md: "21rem",
                    lg: "46rem",
                    xl: "21rem",
                  }}
                  height="46rem"
                  zIndex={5}
                  display="flex"
                  justifyContent={"flex-start !important"}
                  paddingTop={{ xs: "0rem" }}
                  marginTop={{
                    xs: "4rem",
                    sm: "4rem",
                    md: "4rem",
                    lg: "0rem",
                    xl: "0rem",
                  }}
                  flexDirection={{
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                    xl: "column",
                  }}
                >
                  {/* foto 6 */}
                  <Box
                    gap="4rem"
                    className="grid"
                    paddingTop={0}
                    sx={{
                      position: "relative",
                      margin: "0",
                      height: "21rem",
                      width: "21rem",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <figure className="effect-chico">
                      <Box
                        className="foto"
                        width="21rem"
                        height="21rem"
                        sx={{
                          background: `url(https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw644288a9/images/productsets/1685510.jpg?sw=1600?auto=format&fit=crop&w=800)`,
                          backgroundPosition: "-80px 0px",
                          backgroundSize: "200% 100%",
                        }}
                      ></Box>
                      <figcaption>
                        <Typography
                          className="text"
                          variant="h5"
                          color="white"
                          fontFamily={theme.fonts.title}
                        >
                          Dormitorio
                        </Typography>
                        <p>Explora todos nuestros diseños.</p>
                      </figcaption>
                    </figure>
                  </Box>

                  {/* foto 7 */}
                  <Box
                    className="grid7 "
                    sx={{
                      position: "relative",
                      margin: "0 ",
                      // maxWidth: "1000px",
                      listStyle: "none",
                      textAlign: "center",
                    }}
                  >
                    <figure className="effect-chico7">
                      <Box
                        className="foto7"
                        width={{
                          xs: "21rem",
                          sm: "21rem",
                          md: "21rem",
                          lg: "12rem",
                          xl: "12rem",
                        }}
                        minHeight={{
                          xs: "21rem",
                          sm: "21rem",
                          md: "21rem",
                          lg: "12rem",
                          xl: "12rem",
                        }}
                        marginTop="3rem"
                        sx={{
                          background: `url(https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b138f9f/images/productsets/1481921.jpg?sw=1200?auto=format&fit=crop&w=800)`,
                          backgroundPosition: "-50px 0px",
                          backgroundSize: "170% 100%",
                        }}
                      ></Box>
                      <figcaption className="figcaption7">
                        <Typography
                          className="text"
                          variant="h5"
                          color="#000"
                          fontFamily={theme.fonts.title}
                        >
                          Oficina
                        </Typography>
                      </figcaption>
                    </figure>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BannerFotos;

/*     xs, extra-small: 0px - 600px
       sm, small: 600px - 900px
       md, medium: 900px -1200px
       lg, large: 1200px -1536px
       xl, extra-large: 1536px */
