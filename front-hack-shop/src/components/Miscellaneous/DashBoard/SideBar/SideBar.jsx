import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, ShoppingBag, Class, Group, PlusOne } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHouse,
  faShoppingBag,
  faPlus,
  faUserPlus,
  faWallet,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { currentTheme as theme, effects } from "../../../../theme";

const categories = [
  {
    name: "Inicio",
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: "/dashboard",
  },
  {
    name: "Lista de productos",
    icon: <FontAwesomeIcon icon={faWallet} />,
    link: "/dashboard/products",
  },
  {
    name: "Agregar producto",
    icon: <FontAwesomeIcon icon={faPlus} />,
    link: "/dashboard/createProductForm",
  },
  {
    name: "Categorias",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    link: "/dashboard/categories",
  },
  {
    name: "Lista de usuarios",
    icon: <FontAwesomeIcon icon={faUsers} />,
    link: "/dashboard/users",
  },
  {
    name: "Agregar usuario",
    icon: <FontAwesomeIcon icon={faUserPlus} />,
    link: "/dashboard/createUserForm",
  },
];

const drawerWidth = 240;

export default function Sidebar(props) {
  const { mobileOpen, setMobileOpen, container, handleDrawerToggle } = props;
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Typography
        ml={2}
        fontSize={13}
        fontWeight="bolder"
        textAlign={"left"}
        color="#fff"
        noWrap
      >
        ADMIN PANEL
      </Typography>
      <List>
        {categories.map((category, index) => (
          <ListItem
            key={category.name}
            sx={{
              ":hover": {
                backgroundColor: theme.black_hover,
              },
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText
                primary={category.name}
                sx={{ color: theme.white }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sx: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.black,
            marginTop: "85px",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
