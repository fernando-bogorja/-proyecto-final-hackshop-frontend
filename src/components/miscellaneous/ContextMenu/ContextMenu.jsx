import { useEffect, useState, useCallback } from "react";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { Link, useNavigate } from "react-router-dom";

const logout = ({ hover }) => (hover ? "logout-hover" : "logout");

export default function ContextMenu() {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

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

  const goTo = path => {
    navigate(path);
  };

  return (
    <ControlledMenu
      {...menuProps}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
      menuClassName="context-menu"
      style={{ zIndex: 11000 }}
    >
      <MenuItem onClick={goTo("/profile")} className="link-none">
        Mi perfil
      </MenuItem>
      <MenuItem onClick={goTo("/cart")} className="link-none">
        Mi carrito
      </MenuItem>
      <MenuItem onClick={goTo("/checkout")} className="link-none">
        Ir al checkout
      </MenuItem>
    </ControlledMenu>
  );
}
