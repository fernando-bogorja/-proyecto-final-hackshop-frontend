import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, ShoppingBag, Class, Group } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Inicio",
    icon: <Home />,
    link: "/dashboard",
  },
  {
    name: "Productos",
    icon: <ShoppingBag />,
    link: "/dashboard/products",
  },
  {
    name: "Categorias",
    icon: <Class />,
    link: "/dashboard/categories",
  },
  {
    name: "Usuarios",
    icon: <Group />,
    link: "/dashboard/users",
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
          <ListItem key={category.name} disablePadding>
            <ListItemButton>
              <Link to={category.link} className="link-none">
                <ListItemIcon sx={{ color: "#fff !important" }}>
                  {category.icon}
                  {category.name}
                </ListItemIcon>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
          display: { xs: "block", sm: "none" },
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
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#8e806a7c",
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
