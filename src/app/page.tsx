import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import Header from './header';
import 'typeface-roboto';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/amberrie-test/src/app/globals.css' />
      </Head>

      <Header />
    </>
  );
}
