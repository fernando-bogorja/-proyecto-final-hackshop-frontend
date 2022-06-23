import { Link } from "react-router-dom";
import "./Pages.css";
import useCartHook from "../../Hooks/Cart";
import CartItem from "../Miscellaneous/CartItem/CartItem";

export default function Cart() {
  const [cart, addToCart, removeFromCart, decreaseCart, clearCart] =
    useCartHook();
  return (
    <div className="cart-container">
      <CartItems items={cart.cartItems} />
      <Resume items={cart.cartItems} />
    </div>
  );
}

const CartItems = ({ items }) => {
  return (
    <div className="cart-items-container">
      {items.map(item => (
        <CartItem item={item} />
      ))}
    </div>
  );
};

const Resume = ({ items }) => {
  const total = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="resume-container">
      <h1>{total}</h1>
    </div>
  );
};
