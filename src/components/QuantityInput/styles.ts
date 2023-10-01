import styled, { css } from "styled-components";

export interface QuantityInputContainerProps {
  size: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1%;
  background: ${(props) => props.theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    line-height: 130%;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors["base-title"]};
    font-size: ${(props) => props.theme.textSizes["text-m"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) => size === "medium" && css`
    padding: 0.5rem;
  `}

  ${({ size }) => size === "small" && css`
    padding: 0.3rem 0.5rem;
  `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors["purple"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors["purple-dark"]}
  }
`;
