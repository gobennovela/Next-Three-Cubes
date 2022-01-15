import Head from 'next/head';
import React from 'react';
import Canvas from '../Canvas';
import '../styles/Home.module.scss';

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canva />
    </>
  )
}
