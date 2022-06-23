/* Stylesheet */
import "./ProductCard.css";
/* Material */
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
/* Material Icons */
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
/* Custom Components */
import SuperChip from "../MiniChip/SuperChip";
/* Hooks */
import useCartHook from "../../../Hooks/Cart";

export default function ProductCard({ product }) {
  const [cart, addToCart] = useCartHook();

  const handleAddToCart = () => {
    addToCart(product);
    console.log(cart);
  };

  return (
    <Card className="productCard">
      <SuperChip variant="soft" color="danger" size="md">
        En el carrito
      </SuperChip>
      <IconButton
        className="icon"
        aria-label="hearth Bahamas Islands"
        variant="plain"
        size="sm"
      >
        <FavoriteBorderRoundedIcon />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img className="productImage" srcSet={product.images[0]} alt="" />
        <img className="hoverImage" srcSet={product.images[1]} alt="" />
      </AspectRatio>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          shadow: "none",
        }}
      >
        <Typography
          level="h2"
          fontSize="md"
          sx={{ alignSelf: "flex-start", fontSize: ".8rem" }}
        >
          {product.name}
        </Typography>
        <Typography level="body2"></Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <div className="infoContainer">
          <Typography fontSize="sm" fontWeight="bold" sx={{ color: "#8E806A" }}>
            <span className="price-unit">USD</span> {product.price}
          </Typography>
          <button className="addToCart" onClick={handleAddToCart}>
            <ShoppingCartIcon fontSize="small" />
          </button>
        </div>
      </Box>
    </Card>
  );
}
