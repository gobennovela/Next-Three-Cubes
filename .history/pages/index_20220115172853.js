import Head from 'next/head';
import React, { useRef } from 'react';
import '../styles/Home.module.scss';
import { Canvas, useFrame } from '@react-three/fiber';

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  )
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas shadow colorManagement camera={{ position: [-5, 2, 10], fov: 30 }}>
        <directionalLight
          position={0, 10, 0}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10} />
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, 20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={0.5} />

        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={0, -3, 0}>
            <planeBufferGeometry args={[100, 100]} />
            {/* <meshStandardMaterial attach='material' color={'yellow'} /> */}
            <shaderMaterial attach='material' />
          </mesh>
        </group>

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' />
        <SpinningMesh position={[-2, 1, -5]} color='pink' />
        <SpinningMesh position={[5, 1, -2]} color='pink' />
      </Canvas>
    </>
  )
}
