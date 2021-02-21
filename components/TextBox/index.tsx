import React, { useCallback, useRef } from "react";
import { usePage } from "../../store/page";
import { onEnter } from "../../utils/localShortcuts";

import { Container } from "./styles";

const TextBox: React.FC = () => {
  const { createLine } = usePage();

  const ref = useRef<HTMLDivElement>(null);

  const handleSubmit = useCallback(() => {
    const text = ref.current.innerText;
    if (!text || text === "") return;

    createLine(text);
    ref.current.innerText = "";
  }, [createLine]);

  return (
    <Container
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onKeyPress={(e) => onEnter(e, handleSubmit)}
    />
  );
};

export default TextBox;
