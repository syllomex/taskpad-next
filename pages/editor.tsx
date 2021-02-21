import Head from "next/head";
import React from "react";

import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import TextBox from "../components/TextBox";
import Lines from "../components/Lines";

import { usePage } from "../store/page";

import { isServer } from "../utils/isServer";

import { Container } from "../styles/editor";

const Editor: React.FC = () => {
  const { current, get } = usePage();

  if (isServer) return null;

  return (
    <Wrapper>
      <Head>
        <title>
          {isServer
            ? "TaskPad"
            : `${get(current) ? `${get(current).name} - TaskPad` : "TaskPad"}`}
        </title>
      </Head>
      <Nav />

      {current && (
        <Container>
          <Title />
          <Lines />
          <TextBox />
        </Container>
      )}
    </Wrapper>
  );
};

export default Editor;
