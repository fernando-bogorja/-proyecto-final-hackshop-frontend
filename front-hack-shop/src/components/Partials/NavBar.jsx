import { useSelector } from "react-redux";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import useUserHook from "../../Hooks/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBell,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { currentTheme as theme, effects } from "../../theme";

const pages = [
  {
    name: "Dashboard",
    path: "dashboard",
  },
];

export default function PrimarySearchAppBar() {
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
    handleLogoutUser();
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
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
      <MenuItem onClick={handleMenuClose}>Mi perfil</MenuItem>
      <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleMenuClose}>Panel de Control</MenuItem>
      </Link>
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
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <FontAwesomeIcon icon={faBell} size="xs" />
          </Badge>
        </IconButton>
        <p>Notificaciones</p>
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "transparent", height: "5.5rem" }}
      >
        <Toolbar
          sx={{
            backgroundColor: "transparent",
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
              justifyContent="center"
              width="80%"
            >
              <Link to="/" className="link-none">
                <img
                  style={{ width: "160px" }}
                  srcSet={require("../../assets/reizen-logo.png")}
                />
              </Link>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  width: "70%",
                }}
                ml={2}
              >
                {pages.map((page) => (
                  <Link
                    className="nav-link"
                    to={`/${page.path.toLowerCase()}`}
                    key={page.name}
                    sx={{ my: 2, display: "block" }}
                  >
                    <Typography color={theme.white}>{page.name}</Typography>
                  </Link>
                ))}
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  disableRipple={true}
                >
                  <Typography ml={1} variant="p" fontSize={14} color="inherit">
                    {/* if user is logged in, show his name */}
                    {user.data ? (
                      <Link
                        to="#"
                        onClick={handleProfileMenuOpen}
                        className="link-none"
                      >
                        <Typography color={theme.white}>
                          {" "}
                          {user.data.name + " " + user.data.lastName}{" "}
                        </Typography>
                      </Link>
                    ) : (
                      <Link to="/signin" className="link-none">
                        <Typography color={theme.white}>
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
                  marginLeft={10}
                >
                  <FontAwesomeIcon
                    width="50px"
                    icon={faUser}
                    color={theme.white}
                    size="xs"
                    marginLeft={10}
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
