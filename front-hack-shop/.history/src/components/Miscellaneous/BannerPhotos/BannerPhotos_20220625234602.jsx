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
      img: "https://f.fcdn.app/imgs/0c0ceb/www.kavehome.com.uy/kaveuy/49f5/webp/recursos/51/600x0/banner-1.jpg",
      title: "Comedor",
    },
    {
      img: "https://f.fcdn.app/imgs/6c396f/www.kavehome.com.uy/kaveuy/a5a7/webp/recursos/47/600x0/banner.jpg",
      title: "Exterior",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Dormitorio",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Oficina",
    },
  ];
  return (
    <>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default BannerFotos;
