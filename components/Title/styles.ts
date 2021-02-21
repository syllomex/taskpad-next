import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  padding: 16px;

  &:hover {
    background-color: var(--background-secondary);
  }

  &:focus-within {
    background-color: var(--background-tertiary);
  }
`;

export const Text = styled.h1`
  color: var(--text-regular);
  outline: 0;
`;
