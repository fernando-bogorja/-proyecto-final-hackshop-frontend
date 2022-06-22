import "./Carousel.css";
import { Box } from "@mui/material";

export default function Carousel({ children, category }) {
  return (
    <div className="carousel">
      <h2 className="carousel-title">{category}</h2>
      <div className="carousel-content">{children}</div>
    </div>
  );
}
