import { Link } from "react-router-dom";
import "./Pages.css";
import useCartHook from "../../Hooks/Cart";
import CartItem from "../Miscellaneous/CartItem/CartItem";
import { Box } from "@mui/material";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";
import Chip from "@mui/joy/Chip";

export default function Cart() {
  const [cart, addToCart, removeFromCart, decreaseCart, clearCart] =
    useCartHook();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={14}>
        <Typography level="h2" fontWeight="bold" sx={{ color: "#8e806a" }}>
          Carrito de compras
        </Typography>
      </Box>
      <div className="cart-container">
        <CartItems items={cart.cartItems} />
        <Resume items={cart.cartItems} clearCart={clearCart} />
      </div>
    </>
  );
}

const NoItems = () => {
  return (
    <CssVarsProvider>
      <div className="no-items-container">
        <Typography level="h4">
          Parece que no tienes productos en el carrito
        </Typography>
        <Typography level="body2">
          {" "}
          Puedes agregar algunos desde la seccion de productos
        </Typography>
        <Link to="/" className="link-none">
          <Button variant="soft" color="neutral">
            Ir al catálogo
          </Button>
        </Link>
      </div>
    </CssVarsProvider>
  );
};

const CartItems = ({ items }) => {
  return (
    //If the cart is empty, show a message
    <>
      {items.length === 0 ? (
        <NoItems />
      ) : (
        <div className="cart-items-container">
          {items.map(item => (
            <CartItem item={item} />
          ))}
        </div>
      )}
    </>
  );
};

const Resume = ({ items, clearCart }) => {
  //Get the total price of the cart
  const totalPrice = items
    .reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
    .toFixed(2);

  return (
    <div className="resume-container">
      {items.length > 0 &&
        items.map(item => (
          <Chip
            variant="outlined"
            color="neutral"
            disabled
            size="lg"
            sx={{ minWidth: "80%", marginBottom: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "center",
                  width: "30%",
                }}
              >
                <Typography
                  level="body2"
                  fontSize="sm"
                  fontWeight="thin"
                  sx={{ color: "#000" }}
                  mr={1}
                >
                  {item.name}
                </Typography>
                <Chip variant="soft" color="danger" size="sm">
                  x{item.cartQuantity}
                </Chip>
              </Box>
              <Chip variant="soft" color="neutral" size="sm">
                Total: USD {item.price * item.cartQuantity}
              </Chip>
            </Box>
          </Chip>
        ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "80%",
        }}
      >
        <Typography level="body2" fontSize="sm" fontWeight="thin">
          Total: USD {totalPrice}
        </Typography>
        <Button
          variant="soft"
          color="neutral"
          onClick={clearCart}
          sx={{ marginLeft: "auto" }}
        >
          Realizar compra
        </Button>
      </Box>
    </div>
  );
};
