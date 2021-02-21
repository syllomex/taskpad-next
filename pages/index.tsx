import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
      <title>TaskPad Next</title>
    </Head>
    <h1 style={{ fontFamily: "Poppins", fontWeight: 700 }}>
      <Link href="/editor">TaskPad Next</Link>
    </h1>
  </div>
);

export default App;
