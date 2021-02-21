/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from "react";
import PageProvider from "../store/page";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
