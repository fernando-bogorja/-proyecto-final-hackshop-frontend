import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useGetUsers from "../../../../hooks/useGetUsers";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import EditUser from "../../Dashboard/EditUser/EditUser";

export default function UserList() {
  const [users] = useGetUsers();
  const [temp, setTemp] = useState({});
  const handleClick = (params) => {
    setTemp(params);
  };

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
      renderCell: (params) => {
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
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={`/user/` + params.row.id}> */}
            <Button
              onClick={() => handleClick(params.row)}
              style={{ margin: "5px" }}
              size="small"
              variant="outlined"
            >
              Editar
            </Button>
            {/* </Link> */}
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
              getRowId={(row) => row._id}
              pageSize={12}
              rowsPerPageOptions={[12]}
              checkboxSelection
              disableSelectionOnClick
              sx={{ minHeight: { xs: "650px" } }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100%", width: "100%" }}
        >
          <Box width="80%" height="100%">
            <EditUser user={temp} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
