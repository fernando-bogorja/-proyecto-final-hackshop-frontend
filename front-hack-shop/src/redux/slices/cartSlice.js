import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(
          `Agregada otra unidad de ${state.cartItems[itemIndex].name} al carrito`,
          { position: "bottom-center", theme: "dark" }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        tempProduct.addedAt = new Date().toLocaleDateString();
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} ha sido agregado al carrito`, {
          position: "bottom-center",
          theme: "dark",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`Se ha limpiado el carrito`, {
        position: "bottom-center",
        theme: "dark",
      });
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} ha sido eliminado del carrito`, {
        position: "bottom-center",
        theme: "dark",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.error(`Reducida una unidad de ${action.payload.name}`, {
          position: "bottom-center",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItems = nextCartItems;
        toast.error(`${action.payload.name} ha sido removido del carrito`, {
          position: "bottom-center",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      /* Loop through the cart items and get the total values */
      state.cartItems.forEach((cartItem) => {
        /* Add the quantity of each item to the total quantity */
        state.cartTotalQuantity += cartItem.cartQuantity;
        /* Add the price of each item to the total amount */
        state.cartTotalAmount += cartItem.cartQuantity * cartItem.price;
      });
    },
  }
});
export const { addToCart, clearCart, getTotals, removeFromCart, decreaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
