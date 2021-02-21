import React, { useCallback, useEffect, useRef } from "react";
import { usePage } from "../../store/page";
import { isServer } from "../../utils/isServer";
import { onEnter } from "../../utils/localShortcuts";

import { Container, Text } from "./styles";

const Title: React.FC = () => {
  const { current, get, changeTitle } = usePage();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const previous = useRef<string>();

  const handleBlur = useCallback(
    (id: string) => {
      const text = titleRef.current.innerText;
      if (text && text !== "" && text !== previous.current)
        changeTitle(id, text);
    },
    [changeTitle]
  );

  useEffect(() => {
    previous.current = get(current).name;
  }, [current, get]);

  const blur = useCallback(() => {
    titleRef.current.blur();
  }, []);

  if (isServer) return null;

  return (
    <Container onClick={() => titleRef.current?.focus()}>
      <Text
        ref={titleRef}
        contentEditable
        suppressContentEditableWarning
        onBlur={() => handleBlur(current)}
        onKeyPress={(e) => onEnter(e, blur)}
      >
        {get(current)?.name}
      </Text>
    </Container>
  );
};

export default Title;
