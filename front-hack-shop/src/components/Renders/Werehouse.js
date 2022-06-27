import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/werehouse.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3.51}>
        <group position={[4.07, 0.01, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.TexturesCom_WindowsBacklit0019_13_M_0.geometry}
            material={materials["fenetre.006"]}
          />
        </group>
        <group position={[2.78, 0.01, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.TexturesCom_WindowsBacklit0019_14_M_0.geometry}
            material={materials["fenetre.005"]}
          />
        </group>
        <group position={[1.4, 0.01, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.TexturesCom_WindowsBacklit0019_15_M_0.geometry}
            material={materials["fenetre.002"]}
          />
        </group>
        <group position={[0, 0.01, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.TexturesCom_WindowsBacklit0019_12_M_0.geometry}
            material={materials["fenetre.004"]}
          />
        </group>
        <group position={[0, 0, -0.62]}>
          <mesh
            geometry={nodes.Cube_0.geometry}
            material={materials["briques-ss-fenetre"]}
          />
        </group>
        <group position={[-0.1, 0, 0.85]}>
          <mesh
            geometry={nodes.Cube002_0.geometry}
            material={materials["briques-sur-fenetre"]}
          />
        </group>
        <group position={[-0.76, 0.05, -0.2]}>
          <mesh
            geometry={nodes.Cube001_0.geometry}
            material={materials["colonne-beton"]}
          />
        </group>
        <group position={[0, 0, -0.84]} scale={10}>
          <mesh
            geometry={nodes.Plane_0.geometry}
            material={materials.material}
          />
        </group>
        <group position={[0.19, 2.87, -0.07]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane002_0.geometry}
            material={materials["mur-gauche"]}
          />
        </group>
        <group position={[4.81, 0.95, 0.93]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            geometry={nodes.Plane003_0.geometry}
            material={materials["mur-fond"]}
          />
        </group>
        <group position={[-3.48, 0.95, 0.93]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            geometry={nodes.Plane004_0.geometry}
            material={materials["mur-arriere"]}
          />
        </group>
        <group position={[-2.14, -0.04, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane005_0.geometry}
            material={materials["mur-droite"]}
          />
        </group>
        <group position={[-0.76, 2.77, -0.2]}>
          <mesh
            geometry={nodes.Cube003_0.geometry}
            material={materials["colonne-beton.001"]}
          />
        </group>
        <group position={[4.76, 1.46, 0.76]}>
          <mesh
            geometry={nodes.Cube004_0.geometry}
            material={materials["poutre-toit.001"]}
          />
        </group>
        <group position={[4.76, 1.46, 1.07]} rotation={[0.12, 0, 0]}>
          <mesh
            geometry={nodes.Plane001_0.geometry}
            material={materials["toiture-tole"]}
          />
        </group>
        <group position={[4.76, 1.46, 1.07]} rotation={[-0.14, 0, 0]}>
          <mesh
            geometry={nodes.Plane006_0.geometry}
            material={materials["toiture-tole.001"]}
          />
        </group>
        <group position={[0.64, -0.03, 0.88]}>
          <mesh
            geometry={nodes.Cube005_0.geometry}
            material={materials["poutre-toit.002"]}
          />
        </group>
        <group position={[0.64, 2.85, 0.89]}>
          <mesh
            geometry={nodes.Cube006_0.geometry}
            material={materials["poutre-toit.003"]}
          />
        </group>
        <group
          position={[2.49, 3.39, 0.67]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.9, 0.28, 1]}
        >
          <mesh
            geometry={nodes.TexturesCom_WindowsBacklit0019_13_M002_0.geometry}
            material={materials["fenetre.006"]}
          />
        </group>
        <group position={[0.64, 3.37, 0.89]}>
          <mesh
            geometry={nodes.Cube008_0.geometry}
            material={materials["poutre-toit.000"]}
          />
        </group>
        <group
          position={[4.81, 0.75, -0.36]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.68}
        >
          <mesh
            geometry={nodes.TexturesCom_DoorsRollup0044_M_0.geometry}
            material={materials.TexturesCom_DoorsRollup0044_M}
          />
        </group>
        <group
          position={[4.81, 2.16, -0.41]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        >
          <mesh
            geometry={nodes.TexturesCom_DoorsWoodBarn0017_M_0.geometry}
            material={materials.TexturesCom_DoorsWoodBarn0017_M}
          />
        </group>
        <group
          position={[1.09, 1.69, -0.7]}
          rotation={[0, 0, 0.92]}
          scale={0.05}
        >
          <mesh
            geometry={nodes.Plane008_0.geometry}
            material={materials.chaise}
          />
        </group>
        <group
          position={[2.09, 1.85, -0.78]}
          rotation={[-1.56, 0.83, 3.14]}
          scale={0.05}
        >
          <mesh
            geometry={nodes.Plane009_0.geometry}
            material={materials.chaise}
          />
        </group>
        <group
          position={[1.63, 2.1, -0.78]}
          rotation={[-1.41, -1.17, -1.42]}
          scale={0.05}
        >
          <mesh
            geometry={nodes.Plane010_0.geometry}
            material={materials.chaise}
          />
        </group>
        <group position={[-0.8, 2.51, 0.74]}>
          <mesh
            geometry={nodes.BezierCurve006_0.geometry}
            material={materials["cable.001"]}
          />
        </group>
        <group position={[-0.8, 0.67, 0.74]}>
          <mesh
            geometry={nodes.BezierCurve004_0.geometry}
            material={materials.cable}
          />
        </group>
        <group
          position={[0, 0.67, 0.21]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle001_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle001_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[1.28, 0.69, 0.3]}
          rotation={[0.13, 0, 1.33]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle002_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle002_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[2.71, 0.67, 0.43]}
          rotation={[-0.05, 0, 1.91]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle003_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle003_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[4.23, 0.67, 0.3]}
          rotation={[0.06, 0, 1.91]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle004_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle004_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[0.03, 2.52, 0.14]}
          rotation={[0.07, -0.02, 1.57]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle005_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle005_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[1.38, 2.51, 0.24]}
          rotation={[0.06, -0.04, 1.37]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle006_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle006_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[2.71, 2.51, 0.33]}
          rotation={[0.07, 0.01, 1.98]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle007_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle007_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[4.19, 2.51, 0.41]}
          rotation={[-0.05, 0.05, -2.05]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.Circle008_0.geometry}
            material={materials.lampe}
          />
          <mesh
            geometry={nodes.Circle008_1.geometry}
            material={materials["lampe-interieure"]}
          />
        </group>
        <group
          position={[-1.23, -0.04, -0.53]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.64}
        >
          <mesh
            geometry={nodes.pandagun_1280_0.geometry}
            material={materials.pandagun_1280}
          />
        </group>
        <group
          position={[-1.19, -0.04, 0.08]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={0.52}
        >
          <mesh
            geometry={nodes.DM_Watch_Your_Step_graffiti_0.geometry}
            material={materials.DM_Watch_Your_Step_graffiti}
          />
        </group>
        <group
          position={[0.07, 2.09, -0.81]}
          rotation={[0, 0, -2.34]}
          scale={0.12}
        >
          <mesh
            geometry={nodes.Cube009_0.geometry}
            material={materials.palette}
          />
        </group>
        <group
          position={[-1.21, 2.11, -0.83]}
          rotation={[0, 0, -1.73]}
          scale={0.12}
        >
          <mesh
            geometry={nodes.Cube010_0.geometry}
            material={materials["palette.001"]}
          />
        </group>
        <group
          position={[-0.47, 1.58, -0.84]}
          rotation={[0, 0.01, 0.59]}
          scale={0.12}
        >
          <mesh
            geometry={
              nodes.TexturesCom_CardboardPlain0019_2_alphamasked_S049_0.geometry
            }
            material={materials.TexturesCom_CardboardPlain0019_2_alphamasked_S}
          />
          <mesh
            geometry={
              nodes.TexturesCom_CardboardPlain0019_2_alphamasked_S049_1.geometry
            }
            material={materials.TexturesCom_CardboardPlain0022_2_alphamasked_S}
          />
          <mesh
            geometry={
              nodes.TexturesCom_CardboardPlain0019_2_alphamasked_S049_2.geometry
            }
            material={materials.TexturesCom_CardboardPlain0026_2_alphamasked_S}
          />
        </group>
        <group
          position={[0.01, 1.15, -0.84]}
          rotation={[-0.01, 0.02, 0.04]}
          scale={[0.1, 0.18, 0.08]}
        >
          <mesh
            geometry={nodes.BezierCurve033_0.geometry}
            material={materials.Material}
          />
        </group>
        <group
          position={[-1.14, 1.39, -0.84]}
          rotation={[-0.01, 0.01, 0.69]}
          scale={0.01}
        >
          <mesh
            geometry={nodes.Icosphere1295_0.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_1.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_2.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_3.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_4.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_5.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_6.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_7.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_8.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_9.geometry}
            material={materials.gravas}
          />
          <mesh
            geometry={nodes.Icosphere1295_0_10.geometry}
            material={materials.gravas}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/werehouse.gltf");
