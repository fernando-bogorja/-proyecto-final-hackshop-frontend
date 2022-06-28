//import { useGetSingleProductQuery } from "../../../../redux/api-requests/products-req";
import * as React from "react";
//import { useParams } from "react-router-dom";
//import { useState, useEffect } from "react";
//import axios from "axios";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
//import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
//import { ImageList, ImageListItem } from "@mui/material";
//import useCartHook from "../../../../Hooks/Cart";
//import Sphere from "./Sphere";
import ThreeScene from "./ThreeScene";
import { OrbitControls } from "@react-three/drei";
import Sillanegra from "./Sillanegra/Sillanegra";
//import LivingRoom from "./LivingRoom";
//import Piso from "./Piso";
//import Dino from "./Dino";
//import Werehouse from "./Werehouse";
//import Newliving from "./Newliving";

function Allscenes() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container sx={{ height: "71vh", marginTop: 15 }} fixed>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={7}>
          <Box sx={{ height: "600px" }}>
            <ThreeScene>
              {/* <Newliving /> */}
              <OrbitControls autoRotate />
              <ambientLight intensity={0.3} />
              <pointLight position={[-35, 35, 0]} intensity={1.4} />
              <pointLight position={[35, 35, 0]} intensity={1.4} />
              {/* <color attach="background" args={["#fffff"]} /> */}
              {/* <Sphere color={"orange"} position={[-2, 0, 0]} />
              <Sphere color={"red"} position={[2, 0, 0]} /> */}
              <Sillanegra />
              {/* <LivingRoom position={[-100, -50, -9]} /> */}
              {/* <Werehouse /> */}
              {/* <Dino position={[-100, -50, -9]} />
              <Piso position={[-100, -60, -10]} /> */}
              {/* <OrbitControls autoRotate /> */}
            </ThreeScene>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Container>
              <Typography
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                ProductName
              </Typography>{" "}
              <Typography
                sx={{
                  marginTop: 5,
                  marginBottom: 5,
                  textAlign: "center",
                  fontWeight: 600,
                }}
                variant="h5"
                align="center"
                color="textPrimary"
                paragraph
              >
                USD Price
              </Typography>
              <Typography
                sx={{ textAlign: "justify", fontWeight: 600 }}
                variant="subtitle2"
                align="center"
                color="textPrimary"
                paragraph
              >
                <p>Tapicería: tapiceria</p>
                <p>Tamaño: tamañop</p>
                <p>Hecho en: Narnia</p>
                <p>Largo: </p>
                <p>Profunidad:</p>
                <p>Altura: </p>
              </Typography>
              <Typography
                sx={{ textAlign: "justify", fontWeight: 600 }}
                variant="subtitle2"
                align="center"
                color="textPrimary"
                paragraph
              >
                <p>
                  <PersonIcon /> Operating since 1993
                </p>
                <p>
                  <StarOutlineIcon /> Avg Review 4.4/5
                </p>
                <p>
                  <CheckIcon />
                  Certifications: BSCI & SMECTA
                </p>
              </Typography>
              <Button variant="contained" disableElevation>
                Agregar al Carrito
              </Button>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Allscenes;
