import useUserHook from "../../Hooks/User";
import { Box, Button, Grid, Typography } from "@mui/material";
import { currentTheme as theme } from "../../theme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function createData(id, address, status, date, total) {
  return { id, address, status, date, total };
}

const rows = [
  createData(
    1,
    "18 de Julio - 65100 (Young, Río Negro - Uruguay)",
    "Entregado",
    "22/01/22",
    "USD 1500"
  ),
  createData(
    2,
    "18 de Julio - 65100 (Young, Río Negro - Uruguay)",
    "Entregado",
    "22/01/22",
    "USD 1500"
  ),
  createData(
    3,
    "18 de Julio - 65100 (Young, Río Negro - Uruguay)",
    "Entregado",
    "22/01/22",
    "USD 1500"
  ),
  createData(
    4,
    "18 de Julio - 65100 (Young, Río Negro - Uruguay)",
    "Entregado",
    "22/01/22",
    "USD 1500"
  ),
];

export default function Profile() {
  const [user] = useUserHook();
  if (user.data) {
    const personalInformation = {
      title: "Información personal",
      description: "Información relevante sobre tu cuenta",
      data: [
        "Nombre: " + user.data.name + user.data.lastName,
        "Email: " + user.data.email,
        "Teléfono: " + user.data.phone,
      ],
    };
    let shippingInformation = null;

    if (user.data.address) {
      shippingInformation = {
        title: "Datos de envio",
        description: "Datos de envio por defecto de tus compras",
        data: [
          "Linea 1: " + user.data.address.line_one,
          "Linea 2: " + user.data.address.line_two,
          "Ciudad: " +
            user.data.address.city +
            ", " +
            user.data.address.department,
          "Código postal: " + user.data.address.zipCode,
          "País: " + user.data.address.country,
        ],
      };
    }

    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={18.2}
      >
        <Box
          width="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} justifyContent="center">
              {/*Title*/}
              <Box width="100%">
                <Typography
                  variant="h2"
                  textAlign="left"
                  fontFamily={theme.fonts.title}
                >
                  {user.data.name} {user.data.lastName}
                </Typography>
                <Typography level="body1" variant="p" textAlign="left">
                  ¡Hola {user.data.name}! este es tu perfil, aquí podrás ver y
                  editar la información de relacionada a tu cuenta.
                </Typography>
              </Box>
              {/*Orders*/}
              <Box
                width="97%"
                height="400px"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography
                  variant="h5"
                  textAlign="left"
                  fontFamily={theme.fonts.title}
                >
                  Mis Pedidos
                </Typography>
                <DataTable rows={rows} />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              justifyContent="center"
              alignItems="center"
            >
              {/*Shipping Address*/}
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row", md: "column" }}
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
                px={4}
                py={{ md: 10, xs: 0 }}
              >
                <InfoContainer information={personalInformation} />
                {shippingInformation ? (
                  <InfoContainer
                    information={shippingInformation}
                    user={user}
                  />
                ) : (
                  <NoAddress />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
  return <Navigate to="/signin" />;
}

const DataTable = ({ rows }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ textTransform: "uppercase" }}>
          <TableRow>
            <TableCell>Dirección de envio</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const InfoContainer = ({ information, user }) => {
  return (
    <Box width={{ xs: "100%", sm: "50%", md: "100%" }} mb={4}>
      <Typography variant="h5" textAlign="left" fontFamily={theme.fonts.title}>
        {information.title}
      </Typography>
      <Typography level="body1" variant="p" textAlign="left">
        {information.description}
      </Typography>
      <Box mt={2}>
        {information.data.map((data, index) => (
          <Box width="100%" key={index}>
            <Typography variant="p" fontSize={14} textAlign="left">
              {data}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const NoAddress = () => {
  return (
    <Box width={{ xs: "100%", sm: "50%", md: "100%" }} mb={4}>
      <Typography variant="h5" textAlign="left" fontFamily={theme.fonts.title}>
        Dirección de facturación
      </Typography>
      <Box maxWidth="80%">
        <Typography level="body1" variant="p" textAlign="left">
          Parece que no tienes una dirección de facturación asociada a tu
          cuenta.
        </Typography>
      </Box>
      <Box width="100%" mt={2}>
        <Link
          to="/profile/address"
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: theme.black,
            "&:hover": { backgroundColor: theme.black_hover },
          }}
          className="link-none"
        >
          <Typography
            variant="button"
            sx={{
              color: theme.white,
              fontFamily: theme.fonts.title,
              fontSize: 16,
              textTransform: "none",
            }}
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />
            Agregar dirección
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
