import Header from './components/header';
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
