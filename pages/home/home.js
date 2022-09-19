import Head from 'next/head';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Steps from '../../components/Steps';

export default function Home() {
  return (
    <>
      <Head>
        <title>Carlos Sarmiento - Desarrollador Web</title>
        <meta
          name="p:domain_verify"
          content="70355c79926cf892e8c3ee9f91b72aba"
        />
      </Head>
      <Hero />
      <Services />
      <Steps />
    </>
  );
}
