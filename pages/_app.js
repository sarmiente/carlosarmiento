import { ThemeProvider } from 'next-themes';
/* import Home from '.';
import Layout from '../components/Layout/Layout'; */
import '../styles/globals.css';
import Tree from './tree/tree';

function MyApp() {
  return (
    <>
      <Tree />
    </>
  );
}

export default MyApp;
