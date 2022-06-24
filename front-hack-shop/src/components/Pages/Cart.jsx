import { Link } from "react-router-dom";
import "./Pages.css";
import useCartHook from "../../Hooks/Cart";
import CartItem from "../Miscellaneous/CartItem/CartItem";
import { Box } from "@mui/material";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";

export default function Cart() {
  const [cart, addToCart, removeFromCart, decreaseCart, clearCart] =
    useCartHook();
  return (
    <div className="cart-container">
      <CartItems items={cart.cartItems} />
      <Resume items={cart.cartItems} clearCart={clearCart} />
    </div>
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
      <h1>USD {totalPrice}</h1>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};
