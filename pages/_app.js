import { ThemeProvider } from 'next-themes';
import Home from '.';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

function MyApp() {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
