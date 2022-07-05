import "./Carousel.css";

export default function Carousel({ children, category }) {
  return (
    <div className="carousel">
      <h2 className="carousel-title">{category}</h2>
      <h4 className="carousel-subtitle">
        Descripcion de la categoría de productos
      </h4>
      <div className="divider">
        <div className="line"></div>
      </div>
      <div className="carousel-content">{children}</div>
    </div>
  );
}
