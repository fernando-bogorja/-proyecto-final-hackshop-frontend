import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  useEffect(() => {
    //  dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>Cart</h1>
      {cart.cartItems.map((cartItem) => (
        <div>
          <p>{cartItem.name}</p>
          <p>Quantity: {cartItem.cartQuantity}</p>
        </div>
      ))}
      <Link to="/">
        <span>Volver al Shop</span>
      </Link>
      <button onClick={() => handleClearCart()}>Limpiar Carrito</button>
    </div>
  );
};

export default Cart;
