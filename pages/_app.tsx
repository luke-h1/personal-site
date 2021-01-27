import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import MDXComponents from '../components/MDXComponents/MDXComponents';
import Footer from '../components/Footer/Footer';
import { GlobalStyle } from '../styles/GlobalStyles';
import { theme } from '../styles/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Nav theme={theme} />
          <Component {...pageProps} {...theme} />
        </MDXProvider>
        <Footer theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
