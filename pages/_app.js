/* eslint-disable */

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider, useThemeContext } from '../context/theme';
import { CursorContextProvider } from '../context/cursor';
import { MenuContextProvider } from '../context/menu';
import GlobalStyles from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import AppBar from '../components/AppBar';
import BackToTop from '../components/BackToTop';
import Cursor from '../components/Cursor';
import Footer from '../components/Home/Footer';
import Menu from '../components/Menu';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const ThemedApp = ({ children }) => {
  const [state] = useThemeContext();
  const currentTheme = themes[state.theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const Header = () => <AppBar direction="down" renderAs="header" />;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>DataHarvestLabs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: barlow;
          font-weight: 700;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/barlow-700.woff2') format('woff2');
        }

        @font-face {
          font-family: calibre;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/calibre-test-regular.woff') format('woff'),
            url('/fonts/CalibreTest-Regular.otf') format('opentype');
        }

        @font-face {
          font-family: calibre;
          font-weight: 900;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/calibre-test-black.woff') format('woff'),
            url('/fonts/CalibreTest-Black.otf') format('opentype');
        }
      `}</style>
      <ThemeContextProvider>
        <MenuContextProvider>
          <CursorContextProvider>
            <ThemedApp>
              <Header />
              <Menu />
              <Component {...pageProps} />
              <Footer />
              <BackToTop />
              <WhatsAppButton />
              <Cursor />
            </ThemedApp>
          </CursorContextProvider>
        </MenuContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
