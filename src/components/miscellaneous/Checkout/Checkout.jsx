import * as React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";
import useUserHook from "../../../hooks/User";
import useCartHook from "../../../hooks/Cart";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import { currentTheme as theme } from "../../../theme";

export default function Checkout({ token }) {
  const [user] = useUserHook();
  const [{ cartItems }] = useCartHook();

  if (token) {
    if (!user.data.address) {
      return <Navigate to="/profile/address" />;
    }
    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        <Box width="78%" display="flex" justifyContent="center">
          <Grid container>
            <Grid item lg={12}>
              <Box
                width="55%"
                sx={{ borderBottom: `3px solid ${theme.black}` }}
              >
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  fontFamily={theme.fonts.title}
                  sx={{ letterSpacing: "2px" }}
                >
                  Checkout
                </Typography>
              </Box>
              <Box width="50%" display="flex" justifyContent="center">
                <PaymentForm articles={cartItems} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  } else {
    return <Navigate to="/signin" />;
  }
}

const PaymentForm = ({ articles }) => {
  return (
    <Grid container>
      <Grid item xs={12} justifyContent="center">
        <Box width="100%" display="flex" justifyContent="center">
          <Box width={{ sm: "100%" }} ml={5}>
            <Typography
              width="100%"
              variant="h4"
              fontWeight="bold"
              textAlign="left"
              fontFamily={theme.fonts.title}
            >
              Compras
            </Typography>
            <Box width="100%" mt={2}>
              {articles.map(article => (
                <Box width="100%" display="flex">
                  <Typography
                    key={article.id}
                    variant="body1"
                    lineHeight="30px"
                    color={theme.text}
                  >
                    {article.name} x {article.cartQuantity}
                  </Typography>
                </Box>
              ))}
              <Box width="100%" mt={2}>
                <Typography
                  variant="h6"
                  lineHeight="30px"
                  fontWeight="bold"
                  color={theme.text}
                >
                  {" "}
                  {`Total: $${articles.reduce(
                    (acc, article) =>
                      acc + article.price * article.cartQuantity,
                    0
                  )}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
