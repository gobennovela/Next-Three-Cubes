import Head from 'next/head';
import React from 'react';
import '../styles/Home.module.scss';
import Container from '../Container';


export default function Home() {

  return (
    <div id='root'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </div>
  )
}
