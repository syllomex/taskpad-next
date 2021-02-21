import React from "react";
import { GlobalShortcuts } from "../../utils/globalShortcuts";

import { Container } from "./styles";

const Wrapper: React.FC = ({ children }) => {
  GlobalShortcuts();

  return <Container>{children}</Container>;
};

export default Wrapper;
