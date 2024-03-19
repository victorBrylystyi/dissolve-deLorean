/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { DissolveMaterial } from "../DissolveMaterial";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Plane008: THREE.Mesh;
    Plane008_1: THREE.Mesh;
    Plane008_2: THREE.Mesh;
    lFAxel: THREE.Mesh;
    Circle025: THREE.Mesh;
    Circle025_1: THREE.Mesh;
    lRAxel: THREE.Mesh;
    Circle026: THREE.Mesh;
    Circle026_1: THREE.Mesh;
    rfAxel: THREE.Mesh;
    Circle021: THREE.Mesh;
    Circle021_1: THREE.Mesh;
    rRAxel: THREE.Mesh;
    Circle028: THREE.Mesh;
    Circle028_1: THREE.Mesh;
  };
  materials: {
    ["baseGradient.005"]: THREE.MeshStandardMaterial;
    ["gradientEmmisive.005"]: THREE.MeshStandardMaterial;
    ["blackGlass.005"]: THREE.MeshStandardMaterial;
    ["flatBlack.002"]: THREE.MeshStandardMaterial;
  };
};

const path = "/deLorean.glb";

type CustopmProps = {
  dissolveVisible: boolean,
  onFadeOut: () => void,
  dissolveColor?: string
}

export const DeLorean = (props: JSX.IntrinsicElements["group"] & CustopmProps) => {
  
  const { nodes, materials } = useGLTF(path) as GLTFResult;

  const car = useRef<THREE.Group| null>(null);

  useFrame((state) => {

    if (car.current){
      car.current.position.y = -0.3 + Math.sin(state.clock.elapsedTime)/8;
      car.current.rotation.z = Math.cos(state.clock.elapsedTime)/16;
      car.current.rotation.x = Math.sin(state.clock.elapsedTime)/20;
      car.current.rotation.y = Math.PI/2 - Math.sin(state.clock.elapsedTime)/14;
    }

  });

  return (
    <group ref={car} {...props} dispose={null}>
      <group
        name="deLoreonBody"
        position={[-0.91, 0.964, 0]}
        rotation={[Math.PI / 2, -1.571, 0]}
        scale={0.917}
      >
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          // material={materials["baseGradient.005"]}
        >
          <DissolveMaterial 
            baseMaterial={materials["baseGradient.005"]}
            color={props.dissolveColor}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
        </mesh>
        <mesh
          name="Plane008_1"
          geometry={nodes.Plane008_1.geometry}
          // material={materials["gradientEmmisive.005"]}
        > 
          <DissolveMaterial 
            baseMaterial={materials["gradientEmmisive.005"]}
            color={props.dissolveColor}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
        </mesh>
        <mesh
          name="Plane008_2"
          geometry={nodes.Plane008_2.geometry}
          // material={materials["blackGlass.005"]}
        >
          <DissolveMaterial 
            baseMaterial={materials["blackGlass.005"]}
            color={props.dissolveColor}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
        </mesh>
        <mesh
          name="lFAxel"
          geometry={nodes.lFAxel.geometry}
          // material={materials["flatBlack.002"]}
          position={[0.492, 0.744, 0.057]}
          rotation={[-Math.PI, -0.025, -Math.PI / 2]}
          scale={0.082}
        >
          <DissolveMaterial 
            baseMaterial={materials["flatBlack.002"]}
            color={props.dissolveColor}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
          <group
            name="Empty006"
            position={[4.534, 2.923, 0.515]}
            rotation={[-0.025, -0.025, 0]}
            scale={-3.902}
          >
            <group name="lFWheel" rotation={[0, -0.754, 0]} scale={1.144}>
              <mesh
                name="Circle025"
                geometry={nodes.Circle025.geometry}
                // material={materials["baseGradient.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["baseGradient.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh>
              <mesh
                name="Circle025_1"
                geometry={nodes.Circle025_1.geometry}
                // material={materials["gradientEmmisive.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["gradientEmmisive.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh>
            </group>
          </group>
        </mesh>
        <mesh
          name="lRAxel"
          geometry={nodes.lRAxel.geometry}
          // material={materials["flatBlack.002"]}
          position={[0.446, 0.744, -2.8]}
          rotation={[3.116, 0, -Math.PI / 2]}
          scale={0.082}
        >
          <DissolveMaterial 
            baseMaterial={materials["flatBlack.002"]}
            color={props.dissolveColor}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
          <group
            name="Empty008"
            position={[4.548, 2.909, 0.475]}
            scale={-3.902}
          >
            <group name="lRWheel" rotation={[0, -0.754, 0]} scale={1.144}>
              <mesh
                name="Circle026"
                geometry={nodes.Circle026.geometry}
                // material={materials["baseGradient.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["baseGradient.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh>
              <mesh
                name="Circle026_1"
                geometry={nodes.Circle026_1.geometry}
                material={materials["gradientEmmisive.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["gradientEmmisive.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh> 
            </group>
          </group>
        </mesh>
        <mesh
          name="rfAxel"
          geometry={nodes.rfAxel.geometry}
          // material={materials["flatBlack.002"]}
          position={[0.505, -0.714, 0.051]}
          rotation={[0.025, 0, Math.PI / 2]}
          scale={-0.082}
        >
          <DissolveMaterial 
            baseMaterial={materials["flatBlack.002"]}
            color={props.dissolveColor}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
          <group
            name="Empty005"
            position={[4.548, 2.909, 0.475]}
            scale={-3.902}
          >
            <group name="rFWheel" rotation={[0, -0.754, 0]} scale={1.144}>
              <mesh
                name="Circle021"
                geometry={nodes.Circle021.geometry}
                // material={materials["baseGradient.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["baseGradient.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh>
              <mesh
                name="Circle021_1"
                geometry={nodes.Circle021_1.geometry}
                // material={materials["gradientEmmisive.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["gradientEmmisive.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh>
            </group>
          </group>
        </mesh>
        <mesh
          name="rRAxel"
          geometry={nodes.rRAxel.geometry}
          // material={materials["flatBlack.002"]}
          position={[0.446, -0.722, -2.8]}
          rotation={[0.025, 0, Math.PI / 2]}
          scale={-0.082}
        >
          <DissolveMaterial 
            baseMaterial={materials["flatBlack.002"]}
            color={props.dissolveColor}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
          <group
            name="Empty009"
            position={[4.548, 2.909, 0.475]}
            scale={-3.902}
          >
            <group name="rRWheel" rotation={[0, -0.754, 0]} scale={1.144}>
              <mesh
                name="Circle028"
                geometry={nodes.Circle028.geometry}
                // material={materials["baseGradient.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["baseGradient.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh>
              <mesh
                name="Circle028_1"
                geometry={nodes.Circle028_1.geometry}
                // material={materials["gradientEmmisive.005"]}
              >
                <DissolveMaterial 
                  baseMaterial={materials["gradientEmmisive.005"]}
                  color={props.dissolveColor}
                  visible={props.dissolveVisible}
                  onFadeOut={props.onFadeOut}
                />
              </mesh>
            </group>
          </group>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(path);
