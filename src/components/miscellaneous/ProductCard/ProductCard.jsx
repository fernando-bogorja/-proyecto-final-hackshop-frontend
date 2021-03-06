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
import useCartHook from "../../../hooks/Cart";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { currentTheme as theme, effects, toastConfig } from "../../../theme";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const [cart, addToCart] = useCartHook();
  const isInCart = cart.cartItems.some(item => item._id === product._id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToFavorite = () => {
    toast.error("Funcionalidad fuera del alcance del proyecto", toastConfig);
  };

  return (
    <Card className="productCard" sx={{ padding: "0", marginRight: "20px" }}>
      {isInCart ? (
        <SuperChip variant="soft" color="dark" size="md">
          En el carrito
        </SuperChip>
      ) : (
        <SuperChip variant="soft" color="transparent" size="md">
          En el carrito
        </SuperChip>
      )}
      <IconButton
        className="icon"
        aria-label="hearth Bahamas Islands"
        variant="plain"
        size="sm"
        onClick={handleAddToFavorite}
      >
        <FavoriteBorderRoundedIcon />
      </IconButton>
      <Link to={`/product/${product.slug}`}>
        <AspectRatio
          minHeight="120px"
          maxHeight="200px"
          sx={{ my: 2, borderRadius: "10px" }}
        >
          <img className="productImage" srcSet={product.images[0]} alt="" />
          <img className="hoverImage" srcSet={product.images[1]} alt="" />
        </AspectRatio>
      </Link>
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
          sx={{ alignSelf: "flex-start", fontSize: ".9rem" }}
        >
          {product.name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <div className="infoContainer">
          <Typography
            fontSize="sm"
            fontWeight="bold"
            sx={{ color: theme.black }}
          >
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
