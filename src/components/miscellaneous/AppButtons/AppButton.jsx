import React from "react";
import Button from "@mui/material/Button";

function AppButton({ backgroundColor, color, children, onClick }) {
  return (
    <Button
      style={{ backgroundColor: "#000", color: color, padding: "9px 40px" }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
// color #ACA092
export default AppButton;
