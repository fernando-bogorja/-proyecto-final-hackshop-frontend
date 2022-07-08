import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { currentTheme as theme } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link, useParams, Navigate } from "react-router-dom";
import Loader from "../miscellaneous/Loader";
import axios from "axios";
import global from "../../global";

const useGetOrder = id => {
  const [order, setOrder] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const getOrder = async () => {
    setLoading(true);
    const response = await axios.get(`${global.api}/orders/${id}`);
    setOrder(response.data.order);
    setLoading(false);
  };

  React.useEffect(() => {
    getOrder();
  }, [id]);
  return { order, loading };
};

export default function Thanks() {
  const { orderId } = useParams();
  const { order, loading } = useGetOrder(orderId);

  if (order) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        width="100%"
        bgcolor={theme.gray}
      >
        <Box
          minHeight="60%"
          width={{ xs: "90%", sm: "60%", lg: "40%", xl: "35%" }}
          bgcolor={theme.white}
          my={15}
        >
          <Box
            width="100%"
            p={2}
            sx={{ borderBottom: `2px solid ${theme.gray}` }}
          >
            <Typography
              variant="h6"
              fontFamily={theme.fonts.title}
              fontSize={25}
              fontWeight="bold"
              sx={{ letterSpacing: "2px" }}
            >
              Estado de la orden
            </Typography>
          </Box>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={5}
            >
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="10x"
                color={theme.green}
              />
            </Box>
            <Box mt={3} textAlign="center" width="60%">
              <Typography
                variant="h4"
                fontFamily={theme.fonts.title}
                fontWeight="bold"
              >
                ¡Muchas gracias!
              </Typography>
              <Typography
                variant="h4"
                fontFamily={theme.fonts.title}
                fontWeight="bold"
              >
                Tu orden está siendo procesada
              </Typography>
              <Typography variant="body1" color={theme.text} mt={2}>
                Tu orden ha sido ingresada y está siendo procesada, podrás ver
                los avances de tu orden en tu perfil, por cualquier duda o
                problema, puedes contactarnos a través de nuestro email.
              </Typography>
              <Typography variant="body1" color={theme.black} mt={2}>
                ID de la orden: {order._id}
              </Typography>
            </Box>
            <Box
              mt={5}
              width="90%"
              sx={{ border: `1px solid ${theme.gray}`, borderRadius: "5px" }}
            >
              <Box
                p={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ borderBottom: `2px solid ${theme.gray}` }}
              >
                <Typography variant="body1" color={theme.text}>
                  Pago total
                </Typography>
                <Typography
                  variant="body1"
                  color={theme.black}
                  fontWeight="bold"
                >
                  $ {order.total}
                </Typography>
              </Box>
              <Box
                p={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body1" color={theme.text}>
                  Realizada el
                </Typography>
                <Typography
                  variant="body1"
                  color={theme.black}
                  fontWeight="bold"
                >
                  {
                    //format date
                    new Date(order.createdAt).toLocaleDateString("es-AR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  }
                </Typography>
              </Box>
            </Box>
            <Box mt={3} width="90%">
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor={theme.black}
                sx={{ borderRadius: "5px" }}
                mb={1}
                p={2}
              >
                <Link to="/" className="link-none">
                  <Typography variant="body1" color={theme.white}>
                    Volver a la tienda
                  </Typography>
                </Link>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={1}
                p={1.5}
                sx={{ borderRadius: "5px", border: `2px solid ${theme.text}` }}
              >
                <Link to="/" className="link-none">
                  <Typography variant="body1" color={theme.black}>
                    Ver mis ordenes
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
