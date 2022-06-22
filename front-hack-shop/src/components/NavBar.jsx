import { useSelector } from "react-redux";
const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Productos en Carrito: {cartTotalQuantity}</h3>
    </div>
  );
};

export default NavBar;
