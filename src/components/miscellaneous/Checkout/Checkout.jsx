import * as React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";
import useUserHook from "../../../hooks/User";
import useCartHook from "../../../hooks/Cart";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { currentTheme as theme, effects } from "../../../theme";
import { Link } from "react-router-dom";
import useMakeOrder from "../../../hooks/useMakeOrder";

export default function Checkout({ token }) {
  const [user] = useUserHook();
  const [{ cartItems, cartTotalAmount }] = useCartHook();
  if (token) {
    if (cartItems.length === 0) {
      return <Navigate to="/cart" />;
    }
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                width={{ xs: "100%", lg: "45%" }}
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
                <Typography variant="body1" my={3} color={theme.text}>
                  A continuación usted está a punto de simular una compra en
                  nuestro sistema, por cuestiones de tiempo el procesamiento de
                  pagos quedó fuera del alcance de este proyecto.
                </Typography>
              </Box>
              <Box width="100%" display="flex" justifyContent="center" mt={3}>
                <PaymentForm
                  articles={cartItems}
                  address={user.data.address}
                  user={user.data}
                  total={cartTotalAmount}
                />
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

const PaymentForm = ({ articles, address, user, total }) => {
  const { sendOrder, clear } = useMakeOrder();
  let articlesIds = [];

  React.useEffect(() => {
    if (articlesIds.length === 0) {
      articles.forEach(article => {
        articlesIds.push(article._id);
      });
    }
  }, [articles]);

  const handleBuy = () => {
    sendOrder({
      shopList: articlesIds,
      shippingAddress: address._id,
      total: total.toString(),
      boughtBy: user._id,
    });
    clear();
  };
  return (
    <Grid container spacing={20}>
      <Grid item xs={12} lg={6} justifyContent="center">
        <Box width="100%" display="flex" justifyContent="center">
          <Box width={{ sx: "100%" }} display="flex" justifyContent="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily={theme.fonts.title}
                  fontSize={25}
                  sx={{ letterSpacing: "2px" }}
                >
                  Datos personales
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={user.name}
                    label="Nombre"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={user.lastName}
                    label="Apellido"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={user.phone}
                    label="Teléfono"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={user.email}
                    label="Correo electrónico"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily={theme.fonts.title}
                  fontSize={25}
                  sx={{ letterSpacing: "2px" }}
                >
                  Datos de envío
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={address.line_one}
                    label="Primera linea de dirección"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={address.line_two}
                    label="Segunda linea de dirección"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={address.city}
                    label="Ciudad"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={address.department}
                    label="Departamento"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value={address.zipCode}
                    label="Departamento"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily={theme.fonts.title}
                  fontSize={25}
                  sx={{ letterSpacing: "2px" }}
                >
                  Datos de pago
                </Typography>
              </Grid>
              <Grid item xs={12} sm={7}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value="1234 5678 9012 3456"
                    label="Número de tarjeta"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={2}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    fullWidth
                    variant="standard"
                    value="123"
                    label="CVV"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={8} sm={3}>
                <FormControl fullWidth>
                  <TextField
                    id="date"
                    label="Vencimiento"
                    type="month"
                    value="2017-05"
                    variant="standard"
                    disabled
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} justifyContent="center">
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ maxHeight: "600px", overflowY: "auto" }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            fontFamily={theme.fonts.title}
            sx={{ letterSpacing: "2px" }}
            fontSize={25}
            mb={3}
          >
            Artículos
          </Typography>
          {articles.map((article, index) => (
            <Box
              width="100%"
              key={index}
              display="flex"
              flexDirection="column"
              py={3}
            >
              <Box width="95%" display="flex" justifyContent="space-between">
                <Typography
                  variant="body1"
                  fontFamily={theme.fonts.title}
                  fontSize={{ xs: 15, md: 20 }}
                >
                  {article.name}
                </Typography>
                <Typography variant="body1" fontSize={{ xs: 15, md: 20 }}>
                  ${article.price}
                </Typography>
              </Box>
              <Typography variant="body1">x{article.cartQuantity}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Box width="95%" display="flex" justifyContent="flex-end">
            <Typography
              variant="body1"
              fontFamily={theme.fonts.title}
              fontSize={{ xs: 15, md: 20 }}
              textAlign="right"
              fontWeight="bold"
              marginRight={10}
            >
              Total:
            </Typography>
            <Typography
              variant="body1"
              textAlign="right"
              fontSize={{ xs: 15, md: 20 }}
            >
              ${total}
            </Typography>
          </Box>
          <Box width="100%" my={1} height="2px" bgcolor={theme.black}></Box>
          <Box width="100%" display="flex" justifyContent="flex-end">
            <a
              className={`link-none ${effects.zoom}`}
              onClick={handleBuy}
              style={{
                backgroundColor: theme.black,
                color: theme.white,
                transition: "0.2s",
                padding: "15px 40px",
                borderRadius: "5px",
              }}
            >
              CONFIRMAR COMPRA
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
