import * as React from "react";
import ThreeScene from "./ThreeScene";
import { OrbitControls } from "@react-three/drei";
import Couch from "./Couch";

function Model() {
  return (
    <ThreeScene>
      <OrbitControls autoRotate />
      <ambientLight intensity={0.1} />
      <pointLight position={[-35, 35, 0]} intensity={0.5} />
      <pointLight position={[35, 35, 0]} intensity={0.5} />
      <Couch />
    </ThreeScene>
  );
}

export default Model;
