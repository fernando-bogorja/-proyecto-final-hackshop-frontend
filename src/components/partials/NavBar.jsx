import { useSelector } from "react-redux";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import useUserHook from "../../hooks/User";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBell,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { currentTheme as theme, effects } from "../../theme";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.css";

const withBackgroundPages = [
  "/cart",
  "/profile",
  "/profile/address",
  "/checkout",
  "/thanks",
  "/signup",
  "/signin",
  "/dashboard",
  "/product",
];

const willIncludeBackground = (currentPath) => {
  //if some of the rendereable pages items includes the current path
  return withBackgroundPages.some((path) => currentPath.includes(path));
};

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [user, handleSetUser, handleLogoutUser] = useUserHook();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleLogoutUser(null);
    navigate("/signin", { replace: true });
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = user.data && (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate("/profile")}>Mi perfil</MenuItem>
      {user.data.isAdmin && (
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
        </Link>
      )}
      <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Link to="/cart" className="link-none">
            <Badge badgeContent={cartTotalQuantity} color="error">
              <FontAwesomeIcon icon={faCartShopping} size="xs" />
            </Badge>
          </Link>
        </IconButton>
        <p>Carrito</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FontAwesomeIcon icon={faUser} size="xs" />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  let background;
  const location = useLocation();

  if (willIncludeBackground(location.pathname)) {
    background = theme.black30;
  }

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 800) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={color ? "navTransp navBlack" : "navTransp"}
        position="fixed"
        sx={{ height: "5.5rem" }}
      >
        <Toolbar
          sx={{
            backgroundColor: { background },
            height: "5.5rem",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              width="80%"
            >
              <Box width={{ xs: "130px", xl: "160px" }}>
                <Link to="/" className="link-none">
                  <img
                    style={{ width: "100%" }}
                    alt="logo"
                    srcSet={require("../../assets/reizen-logo.png")}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  width: "70%",
                }}
                ml={2}
              ></Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  disableRipple={true}
                >
                  <Typography
                    ml={1}
                    fontFamily={theme.fonts.text}
                    variant="p"
                    fontSize={14}
                    color="inherit"
                  >
                    {/* if user is logged in, show his name */}
                    {user.data ? (
                      <Link
                        to="#"
                        onClick={handleProfileMenuOpen}
                        className="link-none"
                      >
                        <Typography
                          fontFamily={theme.fonts.text}
                          color={theme.white}
                        >
                          {" "}
                          {user.data.name + " " + user.data.lastName}{" "}
                        </Typography>
                      </Link>
                    ) : (
                      <Link to="/signin" className="link-none">
                        <Typography
                          color={theme.white}
                          fontFamily={theme.fonts.text}
                        >
                          Iniciar sesión
                        </Typography>
                      </Link>
                    )}
                  </Typography>
                </IconButton>
                <IconButton
                  className={effects.zoom}
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  ml={11}
                >
                  <FontAwesomeIcon
                    width="50px"
                    icon={faUser}
                    color={theme.white}
                    size="xs"
                    ml={10}
                  />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge className={effects.zoom}>
                    <FontAwesomeIcon
                      icon={faBell}
                      color={theme.white}
                      size="xs"
                      width="20px"
                    />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Link to="/cart" className={`link-none ${effects.zoom}`}>
                    <Badge badgeContent={cartTotalQuantity} color="error">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        color={theme.white}
                        size="xs"
                      />
                    </Badge>
                  </Link>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <FontAwesomeIcon icon={faBars} size="xs" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
