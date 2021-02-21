import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  max-width: 1024px;
  margin: 16px auto;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 18px;
  line-height: 32px;

  &:hover {
    background-color: var(--background-secondary);
  }

  &:focus-within {
    background-color: var(--background-tertiary);
  }
`;

export const Content = styled.div`
  outline: 0;
  padding: 4px 16px;

  flex: 1;
`;

export const TimerContainer = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 8px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const TimerIcon = styled(Image)``;
