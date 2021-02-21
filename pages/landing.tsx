import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Container } from "../styles/landing";

const Landing: NextPage = () => (
  <Container>
    <h1 style={{ fontFamily: "Poppins", fontWeight: 700 }}>
      <Link href="/editor">TaskPad Next</Link>
    </h1>
  </Container>
);

export default Landing;
