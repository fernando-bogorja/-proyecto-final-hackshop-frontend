import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <h1>Cart</h1>
      {cart.cartItems.map((cartItem) => (
        <div>
          <p>{cartItem.name}</p>
          <p>
            Quantity: {cartItem.cartQuantity} Price: {cartItem.price}
          </p>
          <button onClick={() => handleRemoveFromCart(cartItem)}>
            QuitarDelCarro
          </button>
          <button onClick={() => handleAddToCart(cartItem)}>SumarUno</button>
          <button onClick={() => handleDecreaseCart(cartItem)}>
            RestarUno
          </button>
          <hr />
          <h4>
            TOTAL a Pagar: $
            {parseInt(cartItem.price) * parseInt(cartItem.cartQuantity)}
          </h4>
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
