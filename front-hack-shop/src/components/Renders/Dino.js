import { useLoader } from "@react-three/fiber";
import { ThreeMFLoader } from "three/examples/jsm/loaders/3MFLoader";
import model from "../../assets/dinosaurio.3mf";

const Piso = ({ position }) => {
  const geom = useLoader(ThreeMFLoader, model);
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <primitive position={position} object={geom}></primitive>
    </group>
  );
};

export default Piso;
