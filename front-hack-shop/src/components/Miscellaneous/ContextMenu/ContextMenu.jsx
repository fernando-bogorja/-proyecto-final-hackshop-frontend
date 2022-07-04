import { useEffect, useState, useCallback } from "react";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { Link } from "react-router-dom";

const logout = ({ hover }) => (hover ? "logout-hover" : "logout");

export default function ContextMenu() {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  document.addEventListener(
    "contextmenu",
    useCallback(
      event => {
        event.preventDefault();
        setAnchorPoint({ x: event.clientX, y: event.clientY });
        toggleMenu(true);
      },
      [setAnchorPoint, toggleMenu]
    )
  );

  return (
    <ControlledMenu
      {...menuProps}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
      menuClassName="context-menu"
      style={{ zIndex: 11000 }}
    >
      <MenuItem href="/profile" className="link-none">
        Mi perfil
      </MenuItem>
      <MenuItem href="/cart" className="link-none">
        Mi carrito
      </MenuItem>
      <MenuItem href="/checkout" className="link-none">
        Ir al checkout
      </MenuItem>
      <MenuItem className={`${logout} link-none`}>Cerrar sesión</MenuItem>
    </ControlledMenu>
  );
}
