import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import Review from "./Review";

const steps = ["Datos de envío", "Datos de facturación", "Revisión"];
export default function Checkout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Box mt={6}>
          <Paper>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4" gutterBottom component="h1">
                Checkout
              </Typography>
            </Box>
            <Box p={2}>
              <Form />
            </Box>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
}
