import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: .75rem 2.8rem;
  color: ${(props) => props.theme.colors["white"]};
  font-weight: 700;
  background: ${(props) => props.theme.colors["yellow"]};
  font-size: ${(props) => props.theme.textSizes["button-g"]};
  border: none;
  border-radius: 6px;
  margin-top: .7rem;
  text-transform: uppercase;
  transition: .4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7s;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["yellow-dark"]};
  }
`;
