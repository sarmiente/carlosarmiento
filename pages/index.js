import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Steps from '../components/Steps';

export default function Home() {
  return (
    <>
      <Head>
        <title>Carlos Sarmiento - Desarrollador Web</title>
      </Head>
      <Hero />
      <Services />
      <Steps />
    </>
  );
}
