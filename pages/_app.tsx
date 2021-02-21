/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import Head from "next/head";
import React from "react";
import PageProvider from "../store/page";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageProvider>
      <Head>
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <title>TaskPad Next</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
