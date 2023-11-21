import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Island = () => {

  const Model = useGLTF("./island/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive object={Model.scene}         scale={0.1} position={[0, 2.5, 0]}/>
    </mesh>
  );
};

const IslandCanvas = () => {
  return(
    <Canvas frameloop="demand" shadows camera={{position: [20,3,5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false}/>
        <Island />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default IslandCanvas