import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const App: NextPage = () => (
  <div>
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
      <link
        rel="preload"
        href="/fonts/Rajdhani/Rajdhani-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rajdhani/Rajdhani-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <title>TaskPad Next</title>
    </Head>
    <h1>TaskPad Next</h1>
  </div>
);

export default App;
