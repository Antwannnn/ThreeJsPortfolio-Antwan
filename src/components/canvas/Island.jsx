import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { CanvasLoader } from "../CanvasLoader";


const Island = () => {

  const Model = useGLTF("/island/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive object={Model.scene} />
    </mesh>
  )
}

const IslandCanvas = () => {
  return(
    <Canvas frameloop="demand" shadows camera={{position: [20,3,5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={false} />
        <Island />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Island