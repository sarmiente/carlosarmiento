import Head from 'next/head';
import LinkTree from '../../components/LinkTree';
import { ThemeProvider } from 'next-themes';

export default function Tree() {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <ThemeProvider attribute="class">
        <LinkTree />
      </ThemeProvider>
    </>
  );
}
