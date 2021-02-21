import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Landing: NextPage = () => (
  <h1 style={{ fontFamily: "Poppins", fontWeight: 700 }}>
    <Link href="/editor">TaskPad Next</Link>
  </h1>
);

export default Landing;
