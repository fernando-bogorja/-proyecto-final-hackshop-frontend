import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function useCartHook() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  return [
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseCart,
    handleClearCart,
  ];
}
