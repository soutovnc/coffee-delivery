import styled, { css } from "styled-components"

interface InputContainerProps {
  hasError: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${(props) => props.theme.colors["base-error"]};
  }
`;

export const InputStyleContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  background: ${(props) => props.theme.colors["base-input"]};
  display: flex;
  align-items: center;
  transition: 0.4s;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme.colors["yellow-dark"]}
  }

  ${({ theme, hasError }) => hasError && css`
    border-color: ${theme.colors["base-error"]};
  `}
`;

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors["base-text"]};

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const RightText = styled.p`
  font-size: ${(props) => props.theme.textSizes["text-xs"]};
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors["base-label"]};
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  line-height: 130%;
  font-weight: 400;
`;
