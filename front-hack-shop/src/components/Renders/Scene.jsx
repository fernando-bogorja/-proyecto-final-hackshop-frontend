import * as React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
//import Sillanegra from "./Sillanegra/Sillanegra";
//import Sillalu2 from "./Sillalu2";
//import Couch from "./Couch";
function Allscenes() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: "#87A5DF",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.4} />
      <pointLight position={[-35, 35, 0]} intensity={1.4} />
      <pointLight position={[35, 35, 0]} intensity={1.4} />
      <Suspense fallback={null}>
        {/* <Couch position={[0.025, -0.9, 1]} /> */}
        <Sillanegra position={[-2, -0.9, 0]} />
        <Sillanegra position={[0.025, -0.9, 3]} />
        <Sillanegra position={[1.025, -0.9, 2]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Allscenes;
