import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Landing from "./landing";

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
    <Landing />
  </div>
);

export default App;
