import { Link } from "react-router-dom";
import "./Pages.css";
import useCartHook from "../../Hooks/Cart";
import { Box } from "@mui/material";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";
import Chip from "@mui/joy/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import { currentTheme as theme } from "../../theme";

export default function Cart() {
  const [cart, addToCart, removeFromCart, decreaseCart, clearCart] =
    useCartHook();

  console.log(cart.cartItems);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        my={14}
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="80%"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography level="h2" fontWeight="bold" textAlign="center">
                Carrito de compras
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <ShoppingList cart={cart.cartItems} />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Resume cart={cart.cartItems} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

const ShoppingList = ({ cart }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: theme.white }}
      minHeight="600px"
      maxHeight="600px"
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
      }}
      className="shopping-list"
    >
      <Box
        width="70%"
        ml={1}
        pb={1.5}
        sx={{
          borderBottom: `2px solid ${theme.black}`,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography component="h2" fontSize={30} fontFamily={theme.fonts.title}>
          Articulos en el carrito
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 10, sm: 2 }} sx={{ marginTop: "10px" }}>
        {cart.map(item => (
          <Grid item xs={12} key={item.id} flexDirection="row">
            {/* BOX WITH 40% OF WIDTH*/}
            <Box width="100%" ml={1} flexDirection="row">
              <Box
                width="100%"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="flex-start"
                alignItems="center"
                m={0}
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  style={{ width: "20%" }}
                />
                <Box
                  width={{ xs: "20%", lg: "20%" }}
                  ml={1}
                  display="flex"
                  flexWrap="wrap"
                >
                  <Typography
                    sx={{
                      width: { sm: { width: "80%" }, md: { width: "20%" } },
                      display: { xs: "none", sm: "block" },
                    }}
                    level="h2"
                    textOverflow={"ellipsis"}
                    fontSize={15}
                    fontFamily={theme.fonts.title}
                  >
                    {item.name}
                  </Typography>
                </Box>
                <Box
                  width={{ xs: "80%", md: "50%" }}
                  ml={1}
                  flexDirection="column"
                  justifyContent="flex-start"
                >
                  <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    sx={{ borderBottom: `1px solid ${theme.black}` }}
                    mb={2}
                  >
                    <Typography
                      level="h5"
                      fontSize={10}
                      sx={{ marginRight: "5px" }}
                      textAlign="center"
                    >
                      CANTIDAD
                    </Typography>
                    <Typography
                      level="h5"
                      fontSize={10}
                      sx={{ marginRight: "5px" }}
                      textAlign="center"
                    >
                      PRECIO
                    </Typography>
                    <Typography
                      level="h5"
                      fontSize={10}
                      sx={{ marginRight: "5px" }}
                      textAlign="center"
                    >
                      TOTAL
                    </Typography>
                  </Box>
                  <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FontAwesomeIcon size="xs" icon={faMinus} />
                      <Typography
                        level="h5"
                        fontSize={15}
                        fontWeight="bold"
                        sx={{ margin: "0 5px" }}
                      >
                        {item.cartQuantity}
                      </Typography>
                      <FontAwesomeIcon size="xs" icon={faPlus} />
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        level="h5"
                        fontSize={15}
                        fontWeight="bold"
                        sx={{ margin: "0 5px" }}
                      >
                        USD {item.price}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        level="h5"
                        fontSize={15}
                        fontWeight="bold"
                        sx={{ margin: "0 5px" }}
                      >
                        USD {item.price * item.cartQuantity}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* BOX WITH 20% OF WIDTH*/}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Resume = ({ cart }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ backgroundColor: theme.white }}
      minHeight="600px"
    ></Box>
  );
};
