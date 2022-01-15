import Head from 'next/head';
import React,{useRef} from 'react';
import '../styles/Home.module.scss';
import { Canvas, useFrame } from '@react-three/fiber';

export default function Home() {
  const mesh = useRef(null);
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1,1,1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </>
  )
}
