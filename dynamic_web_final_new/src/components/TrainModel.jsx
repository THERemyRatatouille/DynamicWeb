import React from "react";
import styled from 'styled-components'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshStandardMaterial } from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useGLTF } from "@react-three/drei";
import Model from '../assets/Scene'
import { Suspense } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -998;
  background-color: transparent;
`

const TrainModel = () => {

const scale = 0.003;

  return (  
    <Container>
      <Canvas>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={100} />
        
        {/* Objects */}
        <mesh position={[0,-2.2,-2]} scale={[scale,scale,scale]} renderOrder={-998}>
        <Suspense fallback={null}>
        <Model />
        </Suspense>
        </mesh>
        
        {/* Controls */}
        <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} />
      </Canvas>
    </Container>
  );
}

export default TrainModel;
