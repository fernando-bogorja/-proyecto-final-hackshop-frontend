import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy";
import useCartHook from "../../../Hooks/Cart.js";

export default function CartItem({ item }) {
  const [cart, addToCart, removeFromCart, decreaseCart, clearCart] =
    useCartHook();
  const deleteProduct = () => {
    console.log("deleteProduct");
    removeFromCart(item);
  };

  return (
    <CssVarsProvider>
      <Card
        variant="outlined"
        row
        sx={{
          margin: ".5rem 0",
          minWidth: "100%",
          minHeight: "150px",
          gap: 2,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img src={item.images[0]} alt="" />
        </AspectRatio>
        <Box>
          <Box sx={{ ml: 0.5 }}>
            <Chip
              variant="outlined"
              color="neutral"
              size="sm"
              sx={{ zIndex: "2" }}
            >
              Hace 5 minutos
            </Chip>
            <Typography level="h2" fontSize="md">
              {item.name}
              <Button
                size="sm"
                variant="plain"
                color="danger"
                onClick={deleteProduct}
                sx={{ zIndex: "2", ml: 1 }}
              >
                Eliminar
              </Button>
            </Typography>
            <Typography
              fontSize="sm"
              aria-describedby="card-description"
              fontWeight="bold"
              mb={1}
            >
              <Typography
                fontSize="sm"
                fontWeight="bold"
                aria-describedby="card-description"
                mb={1}
              >
                USD {item.price}
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Chip
                color="danger"
                variant="soft"
                size="sm"
                sx={{ marginRight: "10px" }}
              >
                Cantidad ({item.cartQuantity})
              </Chip>
              <Chip variant="outlined" color="neutral" size="sm">
                Categoria ({item.category})
              </Chip>
            </Box>
          </Box>
        </Box>
      </Card>
    </CssVarsProvider>
  );
}
