import Head from 'next/head';
import React, { useRef } from 'react';
import '../styles/Home.module.scss';
import { Canvas, useFrame } from '@react-three/fiber';

const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach='material' color='green' />
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
      <Canvas>
        <ambientLight intensity={0.3} />
        <Box />
      </Canvas>
    </>
  )
}
