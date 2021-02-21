import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  width: 48px;

  overflow-y: auto;

  padding: 8px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  scrollbar-width: 0px;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Item = styled.div<{ active?: boolean; name: string }>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  flex-shrink: 0;
  margin-bottom: 16px;

  border-radius: 50%;
  z-index: 10;

  background-color: ${({ active }) =>
    active ? "var(--primary)" : "var(--secondary)"};

  &:hover {
    opacity: 0.9;

    &::after {
      height: 24px;

      content: "${({ name }) => name}";
      position: absolute;

      color: var(--text-regular);
      background-color: var(--background-secondary);

      border-radius: 7px;
      border-top-left-radius: 0px;

      padding: 4px 8px;

      z-index: 10;

      margin-top: 24px;
      left: 36px;

      transition-duration: 0.2s;
    }
  }

  &:active {
    opacity: 0.7;
  }
`;
