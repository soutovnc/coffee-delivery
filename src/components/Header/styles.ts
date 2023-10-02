import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.colors["background"]};
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: sticky; */
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocaleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  color: ${(props) => props.theme.colors["purple-dark"]};
  background: ${(props) => props.theme.colors["purple-light"]};


`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  color: ${(props) => props.theme.colors["yellow-dark"]};
  background: ${(props) => props.theme.colors["yellow-light"]};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors["yellow-dark"]};
    color: ${(props) => props.theme.colors["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;

    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
  }
`;
