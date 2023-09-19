import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${(props) => props.theme.colors['background']};
    color: ${(props) => props.theme.colors['base-text']};
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.fonts.base};
    font-weight: 400;
    font-size: ${(props) => props.theme.textSizes['text-m']};
    -webkit-font-smoothing: antialiased;
  }
`;
