import { Link } from "react-router-dom";
import "./Pages.css";
import useCartHook from "../../Hooks/Cart";
import CartItem from "../Miscellaneous/CartItem/CartItem";
import { Box } from "@mui/material";

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

const CartItems = ({ items }) => {
  return (
    <Box className="cart-items-container">
      {items.map(item => (
        <CartItem item={item} />
      ))}
    </Box>
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
