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

function Model() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
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
  );
}

export default Model;
