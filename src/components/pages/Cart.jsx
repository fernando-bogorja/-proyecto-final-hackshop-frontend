import "./pages.css";
import { Link } from "react-router-dom";
import useCartHook from "../../hooks/Cart";
import { Box, Button } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faXmark,
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
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
            minHeight="600px"
            maxHeight="600px"
            width="100%"
            my={2}
            sx={{
              borderRadius: "10px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {cart.cartItems.length > 0 ? (
              cart.cartItems.map(article => (
                <Grid item xs={12} md={12} lg={12} key={article._id}>
                  <ArticleCard article={article} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12} md={12} lg={12} flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Box
                    width={{ xs: "100%", sm: "50%", lg: "25%" }}
                    display="flex"
                    justifyContent="center"
                  >
                    <img
                      src={require("../../assets/empty-cart.gif")}
                      alt="empty cart"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Typography
                    py={3}
                    level="h3"
                    fontSize={22}
                    textAlign="center"
                  >
                    Oops, todo muy vacío por aquí
                  </Typography>
                  <Link
                    to="/"
                    className="link-none"
                    style={{
                      backgroundColor: theme.black,
                      color: theme.white,
                      width: { xs: "10rem", lg: "20rem" },

                      marginTop: "4rem",
                      padding: "10px",
                      borderRadius: "10px",
                      ":hover": { backgroundColor: theme.black_hover },
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{}}
                    >
                      <Typography fontSize={20}>IR A LA TIENDA</Typography>
                    </Box>
                  </Link>
                </Box>
              </Grid>
            )}
          </Box>
          {cart.cartItems.length > 0 && (
            <Grid item xs={12}>
              <Box width="100%" display="flex" justifyContent="flex-end">
                <CheckoutContainer cart={cart} />
              </Box>
            </Grid>
          )}
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
          <Button
            variant="text"
            color="inherit"
            onClick={() => decreaseCart(article)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <Typography m={2} fontSize={20}>
            {article.cartQuantity}
          </Typography>
          <Button
            variant="text"
            color="inherit"
            onClick={() => addToCart(article)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
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
    <Box
      width={{ xs: "100%", sm: "50%" }}
      display="flex"
      justifyContent="flex-end"
    >
      <Box
        width={{ xs: "100%", sm: "75%", lg: "50%", xl: "40%" }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Box width="100%" display="flex" my={2} justifyContent="space-between">
          <Typography fontSize={20}>Subtotal</Typography>
          <Typography fontSize={20}>USD {cart.cartTotalAmount}</Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Link
            to="/checkout"
            className="link-none"
            style={{
              backgroundColor: theme.black,
              color: theme.white,
              width: "100%",
              padding: "20px",
              borderRadius: "10px",
              ":hover": { backgroundColor: theme.black_hover },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{}}
            >
              <Typography fontSize={20}>CHECKOUT</Typography>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
