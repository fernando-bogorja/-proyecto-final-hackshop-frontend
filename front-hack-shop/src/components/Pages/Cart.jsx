import "./Pages.css";
import useCartHook from "../../Hooks/Cart";
import { Box, Button } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import { currentTheme as theme } from "../../theme";

export default function Cart() {
  const [cart, addToCart, removeFromCart, decreaseCart, clearCart] =
    useCartHook();
  return (
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
        <Grid container>
          <Grid
            item
            xs={12}
            bgcolor={theme.white}
            sx={{ borderRadius: "10px" }}
          >
            <Box>
              <Typography
                py={3}
                level="h2"
                fontSize={35}
                fontWeight="bold"
                textAlign="center"
                letterSpacing={4}
              >
                Carrito de compras
              </Typography>
            </Box>
          </Grid>
          <Box
            maxHeight="600px"
            my={2}
            sx={{
              borderRadius: "10px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {cart.cartItems.map(article => (
              <Grid item xs={12} md={12} lg={12}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Box>
          <Grid item xs={12}>
            <Box width="100%" display="flex" justifyContent="flex-end">
              <CheckoutContainer cart={cart} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const ArticleCard = ({ article }) => {
  const [cart, addToCart, removeFromCart, decreaseCart, clearCart] =
    useCartHook();
  return (
    <Box
      width="100%"
      my={2}
      display="flex"
      justifyContent="space-between"
      flexDirection={{ xs: "column", md: "row" }}
      bgcolor={theme.white}
      sx={{
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
      }}
    >
      <Box
        width={{ xs: "100%", md: "40%" }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img width="40%" src={article.images[0]} alt={article.name} />
        </Box>
        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          alignItems="center"
        >
          <Box width="100%">
            <Typography
              fontSize={17}
              fontFamily={theme.fonts.title}
              textAlign="center"
            >
              {article.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box width="50%" display={{ xs: "none", md: "flex" }} alignItems="center">
        <Box width="100%" display="flex">
          <Box width="25%" display="flex" justifyContent="space-around">
            <Button
              variant="text"
              color="inherit"
              onClick={() => decreaseCart(article)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            <Typography fontSize={16}>{article.cartQuantity}</Typography>
            <Button
              variant="text"
              color="inherit"
              onClick={() => addToCart(article)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Box>
          <Box width="25%" display="flex" justifyContent="center">
            <Typography fontSize={16}>USD {article.price}</Typography>
          </Box>
          <Box width="25%" display="flex" justifyContent="center">
            <Typography fontSize={16} noWrap>
              USD {(article.price * article.cartQuantity).toFixed(2)}
            </Typography>
          </Box>
          <Box width="25%" display="flex" justifyContent="center">
            <Button
              variant="text"
              color="inherit"
              onClick={() => removeFromCart(article)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        display={{ xs: "flex", md: "none" }}
        flexDirection="column"
        alignItems="center"
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ borderTop: `10px solid ${theme.gray}` }}
        >
          <FontAwesomeIcon icon={faMinus} />
          <Typography m={2} fontSize={20}>
            {article.cartQuantity}
          </Typography>
          <FontAwesomeIcon icon={faPlus} />
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          sx={{ borderTop: `10px solid ${theme.gray}` }}
        >
          <Typography m={2} fontSize={20}>
            USD {article.price}
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          sx={{ borderTop: `10px solid ${theme.gray}` }}
        >
          <Typography m={2} fontSize={20}>
            USD {(article.price * article.cartQuantity).toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const CheckoutContainer = ({ cart }) => {
  return (
    <Box width="50%" display="flex" justifyContent="center">
      <Box
        width="75%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography fontSize={20}>Subtotal</Typography>
          <Typography fontSize={20}>USD {cart.cartTotalAmount}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
