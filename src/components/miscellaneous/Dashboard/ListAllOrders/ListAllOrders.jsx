import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetOrders from "../../../../hooks/useGetOrders";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import useDeleteOrder from "../../../../hooks/useDeleteOrder";
//import { useNavigate } from "react-router-dom";

export default function UserList() {
  const deleteOrder = useDeleteOrder();
  const handleClick = id => {
    deleteOrder(id);
  };
  const [orders] = useGetOrders();

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "boughtBy",
      headerName: "Comprador",
      width: 100,
      editable: false,
      renderCell: params => {
        return <>{params.row.boughtBy.name}</>;
      },
    },
    {
      field: "Fecha",
      headerName: "Fecha",
      width: 100,
      editable: false,
      renderCell: params => {
        return (
          <>
            {new Date(params.row.createdAt).toLocaleDateString("es-AR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </>
        );
      },
    },
    {
      field: "Artículos",
      headerName: "Artículos",
      width: 70,
      editable: false,
      renderCell: params => {
        return <>{params.row.shopList.length}</>;
      },
    },
    {
      field: "Monto",
      headerName: "Monto",
      width: 90,
      editable: false,
      renderCell: params => {
        return <>${params.row.total}</>;
      },
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 200,
      editable: false,
      renderCell: params => {
        return (
          <>
            <Button
              //onClick={() => handleClick(params.row)}
              style={{ margin: "5px" }}
              size="small"
              variant="outlined"
            >
              <RemoveRedEyeOutlinedIcon />
            </Button>
            <Button
              size="small"
              onClick={() => handleClick(params.row._id)}
              variant="outlined"
            >
              Borrar
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        item
        xs={12}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100%", width: "100%" }}
        >
          <Box width="80%" height="100%">
            <DataGrid
              rows={orders}
              columns={columns}
              getRowId={row => row._id}
              pageSize={12}
              rowsPerPageOptions={[12]}
              checkboxSelection
              disableSelectionOnClick
              sx={{ minHeight: { xs: "650px" } }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
