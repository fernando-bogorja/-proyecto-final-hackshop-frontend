import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function BannerFotos() {
  const itemData = [
    {
      img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbacbee64/images/productsets/1482365.jpg?sw=1600",
      title: "Todos los Espacios",
    },
    {
      img: "https://f.fcdn.app/imgs/1bfe18/www.kavehome.com.uy/kaveuy/a20d/webp/recursos/48/600x0/banner-3.jpg",
      title: "Recibidor",
    },
    {
      img: "https://f.fcdn.app/imgs/90a7ed/www.kavehome.com.uy/kaveuy/ccde/webp/recursos/49/600x0/banner-4-vo2.jpg",
      title: "Living",
    },
    {
      img: "https://f.fcdn.app/imgs/6c396f/www.kavehome.com.uy/kaveuy/a5a7/webp/recursos/47/600x0/banner.jpg",
      title: "Comedor",
    },
    {
      img: "https://f.fcdn.app/imgs/74aa80/www.kavehome.com.uy/kaveuy/9a1d/webp/recursos/50/600x0/banner-copia.jpg",
      title: "Exterior",
    },
    {
      img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw644288a9/images/productsets/1685510.jpg?sw=1600",
      title: "Dormitorio",
    },
    {
      img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b138f9f/images/productsets/1481921.jpg?sw=1200",
      title: "Oficina",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "600px",
          marginBottom: "500px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "600px",
            marginBottom: "600px",
            marginTop: "200px",
            marginLeft: "100px",
            backgroundColor: "rgba(219, 209, 200, 0.5)",
            position: "absolute",
          }}
        ></Box>
        <Box
          sx={{
            width: "85%",
            height: "450px",
            marginBottom: "500px",
            marginTop: "300px",
            backgroundColor: "rgba(212, 209, 202, 0.5)",
            position: "absolute",
          }}
        ></Box>
      </Box>
      {/* <Box
        sx={{
          width: "90%",
          height: 400,
          marginBottom: "50%",
          marginTop: "200px",
        }}
      >
        <ImageList variant="quilted" cols={4} gap={"3rem"}>
          <ImageListItem
            sx={{
              width: "300px",
              height: "600px",
              background: `url(${itemData[0].img})`,
              backgroundPosition: "55px 25px",
            }}
          >
            <img
              srcSet={itemData[0].img}
              alt={itemData[0].title}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Box> */}
    </>
  );
}

export default BannerFotos;
