import React, { FocusEvent, KeyboardEvent, useCallback, useRef } from "react";
import { Line, usePage } from "../../store/page";
import { onEnter } from "../../utils/localShortcuts";

import {
  Container,
  Content,
  LineContainer,
  TimerContainer,
  TimerIcon,
} from "./styles";

const Lines: React.FC = () => {
  const { lines, editLine, running, timer } = usePage();

  const previous = useRef<string>();

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLDivElement>, line: Line) => {
      const text = e.currentTarget.innerText;
      if (!text || text === "" || text === previous.current) return;

      editLine(line, text);
    },
    [editLine]
  );

  const handleKeyPress = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const hasContent = e.currentTarget.innerText.trim().length > 0;
    onEnter(e, () => hasContent && e.currentTarget.blur());
  }, []);

  const handleFocus = useCallback((content: string) => {
    previous.current = content;
  }, []);

  return (
    <Container>
      {lines.map((line) => (
        <LineContainer key={line.id}>
          <Content
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(e, line)}
            onFocus={() => handleFocus(line.content)}
            onKeyPress={handleKeyPress}
          >
            {line.content}
          </Content>
          <TimerContainer onClick={() => timer(line.id)}>
            <TimerIcon
              src={
                running === line.id
                  ? "/icons/timer-stop.png"
                  : "/icons/timer-start.png"
              }
              height="32"
              width="32"
            />
          </TimerContainer>
        </LineContainer>
      ))}
    </Container>
  );
};

export default Lines;
