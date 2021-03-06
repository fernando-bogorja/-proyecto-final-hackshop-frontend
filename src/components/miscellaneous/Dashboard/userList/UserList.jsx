import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetUsers from "../../../../hooks/useGetUsers";
import { useState } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { toastConfig } from "../../../../theme";
import { toast } from "react-toastify";

export default function UserList() {
  const [users] = useGetUsers();
  const [temp, setTemp] = useState({});
  const handleClick = params => {
    setTemp(params);
  };
  const navigate = useNavigate();
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "name",
      headerName: "Nombre",
      width: 500,
      editable: false,
    },
    {
      field: "isAdmin",
      headerName: "Administrador",
      width: 120,
      editable: false,
      renderCell: params => {
        {
          if (params.row.isAdmin) {
            return "ADMINISTRADOR";
          } else {
            return "USUARIO";
          }
        }
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
              onClick={() => navigate("/orders")}
              style={{ margin: "5px" }}
              size="small"
              variant="outlined"
            >
              Ordenes
            </Button>
            <Button size="small" variant="outlined">
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
              rows={users}
              columns={columns}
              getRowId={row => row._id}
              pageSize={12}
              rowsPerPageOptions={[12]}
              checkboxSelection
              disableSelectionOnClick
              sx={{ minHeight: { xs: "500px" } }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100%", width: "100%" }}
        ></Box>
      </Grid>
    </Grid>
  );
}
