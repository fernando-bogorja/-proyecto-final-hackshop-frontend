import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/montserrat";

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

  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: "transparent",
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box
        xs={3}
        md={6}
        lg={9}
        xl={12}
        className="Contain"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "600px",
          // border: "1px solid red",
          marginBottom: "500px",
          marginTop: "200px",
          position: "relative",
        }}
      >
        <Box
          className="timberwolf"
          sx={{
            width: "80%",
            height: "650px",
            marginBottom: "600px",
            // marginLeft: "-100px",
            backgroundColor: "rgba(219, 209, 200, 0.5)",
            position: "absolute",
          }}
        ></Box>
        <Box
          xs={3}
          md={6}
          lg={12}
          className="timberwolf-2"
          sx={{
            width: "85%",
            height: "450px",
            marginBottom: "500px",
            marginTop: "100px",
            // marginLeft: "-320px",
            backgroundColor: "rgba(212, 209, 202, 0.85)",
            position: "absolute",
          }}
        ></Box>
        <Box
          className="fotos"
          sx={{
            display: "flex",
            justifyContent: "center",
            zIndex: "5",
            width: "130rem",
            // border: "2px solid blue",
          }}
        >
          {/* xs, extra-small: 0px
  	          sm, small: 600px
              md, medium: 900px
              lg, large: 1200px
              xl, extra-large: 1536px */}

          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "90rem",
            }}
            container
            spacing={3}
            columns={{ xs: 3, md: 6, lg: 9, xl: 12 }}
          >
            <Grid item xs={3} sx={{ marginBottom: 0 }}>
              <Item
                className="Foto1"
                sx={{
                  zIndex: 5,
                  width: "20rem",
                  height: "550px",
                  marginTop: "70px",
                  background: `url(https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw433eddd7/images/productsets/1512503.jpg??auto=format&fit=crop&w=800)`,
                  backgroundPosition: "20rem 0",
                  backgroundSize: "300% 100%",
                }}
              >
                <Typography variant="h6" color="white">
                  Todos los Espacios
                </Typography>
              </Item>
            </Grid>

            {/* column 2 y 3 */}
            <Grid item xs={3}>
              <Item
                className="fotosBoxVert1"
                sx={{
                  zIndex: 5,
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  width: "20rem",
                  marginTop: "130px",
                  // border: "1px solid red",
                }}
              >
                <Box
                  className="Foto2"
                  sx={{
                    zIndex: 5,
                    width: "20rem",
                    height: "20rem",
                    background: `url(https://f.fcdn.app/imgs/1bfe18/www.kavehome.com.uy/kaveuy/a20d/webp/recursos/48/600x0/banner-3.jpg?auto=format&fit=crop&w=800)`,
                    backgroundPosition: "20rem 0px",
                    backgroundSize: "100% 100%",
                  }}
                >
                  Foto 2{" "}
                </Box>
                <Box
                  className="Foto3"
                  sx={{
                    zIndex: 5,
                    // backgroundColor: "red",
                    width: "20rem",
                    height: "20rem",
                    background: `url(https://f.fcdn.app/imgs/90a7ed/www.kavehome.com.uy/kaveuy/ccde/webp/recursos/49/600x0/banner-4-vo2.jpg?auto=format&fit=crop&w=800)`,
                    backgroundPosition: "20rem 0px",
                    backgroundSize: "100% 100%",
                  }}
                >
                  Foto 3{" "}
                </Box>
              </Item>
            </Grid>

            {/* column 4 y 5 */}
            <Grid item xs={3}>
              <Item
                className="fotosBoxVert2"
                sx={{
                  zIndex: 5,
                  // backgroundColor: "red",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  width: "20rem",
                  maxHeight: "700px",
                  marginTop: "30px",
                  // border: "1px solid red",
                }}
              >
                <Box
                  className="Foto4"
                  sx={{
                    zIndex: 5,
                    // backgroundColor: "red",
                    width: "20rem",
                    height: "550px",
                    background: `url(https://f.fcdn.app/imgs/6c396f/www.kavehome.com.uy/kaveuy/a5a7/webp/recursos/47/600x0/banner.jpg?auto=format&fit=crop&w=800)`,
                    backgroundPosition: "20rem 0px",
                    backgroundSize: "100% 100%",
                  }}
                >
                  Foto 4{" "}
                </Box>
                <Box
                  className="Foto5"
                  sx={{
                    zIndex: 5,
                    // backgroundColor: "red",
                    width: "20rem",
                    height: "550px",
                    background: `url(https://f.fcdn.app/imgs/74aa80/www.kavehome.com.uy/kaveuy/9a1d/webp/recursos/50/600x0/banner-copia.jpg?auto=format&fit=crop&w=800)`,
                    backgroundPosition: "20rem 0px",
                    backgroundSize: "100% 100%",
                  }}
                >
                  Foto 5{" "}
                </Box>
              </Item>
            </Grid>
            {/* column 6 y 7 */}
            <Grid item xs={3}>
              <Item
                className="fotosBoxVert3"
                sx={{
                  zIndex: 5,
                  // backgroundColor: "red",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  width: "21rem",
                  maxHeight: "42rem",
                  marginTop: "30px",
                  // border: "1px solid red",
                }}
              >
                <Box
                  className="Foto6"
                  sx={{
                    zIndex: 5,
                    width: "21rem",
                    height: "21rem",
                    background: `url(https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw644288a9/images/productsets/1685510.jpg?sw=1600?auto=format&fit=crop&w=800)`,
                    backgroundPosition: "-80px 0px",
                    backgroundSize: "200% 100%",
                  }}
                >
                  Foto 6{" "}
                </Box>
                <Box
                  className="Foto7"
                  sx={{
                    zIndex: 5,
                    // backgroundColor: "red",
                    maxWidth: "12rem",
                    maxHeight: "12rem",
                    height: "550px",
                    background: `url(https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b138f9f/images/productsets/1481921.jpg?sw=1200?auto=format&fit=crop&w=800)`,
                    backgroundPosition: "-50px 0px",
                    backgroundSize: "170% 100%",
                  }}
                >
                  Foto 7{" "}
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* background: `url(${itemData[0].img})`,
            
            <img
              srcSet={itemData[0].img}
              alt={itemData[0].title}
              loading="lazy"
            /> */}
    </>
  );
}

export default BannerFotos;
