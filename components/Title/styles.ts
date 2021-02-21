import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 16px;

  &:hover {
    background-color: var(--background-secondary);
  }

  &:focus-within {
    background-color: var(--background-secondary);
  }
`;

export const Text = styled.h1`
  color: var(--text-regular);
  outline: 0;
`;
