import React from "react";
import { useLoader } from "@react-three/fiber";
import { ThreeMFLoader } from "three/examples/jsm/loaders/3MFLoader";
import model from "../../assets/livingroom.3mf";

const LivingRoom = ({ position }) => {
  const geom = useLoader(ThreeMFLoader, model);
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <primitive position={position} object={geom}></primitive>
      </mesh>
    </group>
  );
};

export default LivingRoom;
