import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextProgress from 'next-progress';
import React from 'react';

import '../styles/globals.css';

import { mantineTheme } from '../../mantine';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | any;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const title = 'ZalCode | Portfolio 3.0';
  const description = 'Portfolio Rijal Ghodi';
  const url = `${process.env.NEXT_PUBLIC_URL}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.ico"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/meta-tag-img.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/meta-tag-img.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          // withGlobalStyles
          // withNormalizeCSS
          theme={{ colorScheme, ...mantineTheme }}
        >
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </ColorSchemeProvider>

      <NextProgress
        height={3}
        color="#22c55e"
        options={{ showSpinner: false }}
      />
    </>
  );
}

export default MyApp;
