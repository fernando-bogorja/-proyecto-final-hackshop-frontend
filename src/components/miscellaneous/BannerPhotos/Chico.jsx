import { Link, Box } from "@mui/material";
import "./BannerPhotos.css";

function Chico() {
  return (
    <Box
      className="grid"
      sx={{
        position: "relative",
        margin: "0 auto",
        padding: "1em 0 4em",
        maxWidth: "1000px",
        listStyle: "none",
        textAlign: "center",
      }}
    >
      <figure className="effect-chico">
        <img
          srcSet="https://f.fcdn.app/imgs/1bfe18/www.kavehome.com.uy/kaveuy/a20d/webp/recursos/48/600x0/banner-3.jpg"
          alt="img15"
        />
        <figcaption>
          <h2>
            Silly <span>Chico</span>
          </h2>
          <p>Chico's main fear was missing the morning bus.</p>
          <Link href="#">View more</Link>
        </figcaption>
      </figure>
    </Box>
  );
}

export default Chico;
