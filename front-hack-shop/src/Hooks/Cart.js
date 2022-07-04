import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function useCartHook() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(getTotals());
    };
    const handleRemoveFromCart = product => {
        dispatch(removeFromCart(product));
        dispatch(getTotals());
    };
    const handleDecreaseCart = product => {
        dispatch(decreaseCart(product));
        dispatch(getTotals());
    };
    const handleAddToCart = product => {
        dispatch(addToCart(product));
        dispatch(getTotals());
    };

    return [cart, handleAddToCart, handleRemoveFromCart, handleDecreaseCart, handleClearCart, getTotals];
}
