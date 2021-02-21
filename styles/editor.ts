import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;

  margin: 0 auto;

  padding: 32px 5% 32px max(calc(5% - 32px), 32px);

  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: var(--primary) transparent;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    width: 1px;
  }
`;
