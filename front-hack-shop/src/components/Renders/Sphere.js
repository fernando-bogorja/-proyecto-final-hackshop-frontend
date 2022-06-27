import { MeshBasicMaterial } from "three";

const Sphere = ({ color, position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry />
      {/* <meshStandardMaterial color={color} wireframe={false} /> */}
      <meshNormalMaterial color={color} />
    </mesh>
  );
};

export default Sphere;
