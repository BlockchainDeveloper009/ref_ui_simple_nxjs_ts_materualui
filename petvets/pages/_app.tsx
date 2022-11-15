import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import Head from 'next/head';

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Head>
      <title>BondBank</title>
      <meta name="description" content="BondBank-Dapp" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="App">
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  </ThemeProvider>
  )
}
