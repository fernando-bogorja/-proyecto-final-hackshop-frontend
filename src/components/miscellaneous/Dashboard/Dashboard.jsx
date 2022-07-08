import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./Sidebar/SideBar";
import SignIn from "../../pages/Signin";
import { userData } from "./dummyData";
import useUserHook from "../../../hooks/User";
import { Navigate } from "react-router-dom";

import ProductList from "../ProductList/ProductList";
const drawerWidth = 240;

function Dashboard(props) {
  const { window, component, token } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user] = useUserHook();
  //console.log("DASHBOARD");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  if (!user.data.isAdmin) {
    //console.log("USER ES ADMINN???", user.data.isAdmin);
    return <Navigate to="/signin" />;
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* SIDEBAR */}
        <Sidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          container={container}
        />
        <Box
          display="flex"
          component="main"
          mt="128px"
          mb="30px"
          sx={{
            flexDirection: "column",
            flexGrow: 1,
            p: 3,
            width: { sm: "100%", md: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {component}
        </Box>
      </Box>
    );
  }
  return <Navigate to="/signin" />;
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
