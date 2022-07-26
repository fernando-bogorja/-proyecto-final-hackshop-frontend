import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./Modal.css";

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        id="modal-content"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bienvenidos a REIZEN"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Puedes ir a la ADMIN PAGE y acceder usando las siguientes
            credenciales:
            <ul>
              <li>Email: admin@admin.com</li>
              <li>Password: 123456</li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontFamily: "Raleway",
              backgroundColor: "#000",
              color: "white",
              padding: "9px 5%",
            }}
            variant="contained"
            onClick={handleClose}
            autoFocus
          >
            CERRAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
