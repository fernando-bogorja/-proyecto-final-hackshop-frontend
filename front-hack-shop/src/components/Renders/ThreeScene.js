import React from "react";
import { Canvas } from "@react-three/fiber";
const ThreeScene = ({ children }) => {
  return (
    <div
      style={{
        marginTop: "85px",
        height: "500px",
        width: "100%",
        overflow: "hidden",
        zIndex: "1",
        // position: "absolute",
      }}
    >
      <Canvas
        camera={{
          position: [3.5, 1.1, 1],
          zoom: 1.5,
        }}
      >
        {children}
      </Canvas>
      {/* <Canvas camera={{ position: [3.5, 1.1, 1] }}>{children}</Canvas> */}
      {/* camera=position={[-100, -50, -9]} */}
    </div>
  );
};

export default ThreeScene;
