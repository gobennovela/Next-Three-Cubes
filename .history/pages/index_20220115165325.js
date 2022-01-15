import Head from 'next/head'
import '../styles/Home.module.scss';
import { Canvas } from '@react-three/fiber';

export default function Home() {
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
          <circleBufferGeometry attach="geometry" args={[8,1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </>
  )
}
