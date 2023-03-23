import Head from 'next/head';
import type { AppProps } from 'next/app';

// Styles
import GlobalStyles from '@/styles/globals';

// Provider
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { useEffect } from 'react';

// Translate
import "../i18nextInit";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  useEffect(() => {
    if (localStorage.i18nextLng) {
      localStorage.setItem("i18nextLng", "pt");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Waiuru</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <GlobalStyles />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
};
