import { styled } from "styled-components";

export const CoffeeListContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.textSizes["title-l"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-family: ${(props) => props.theme.fonts["title"]};
  line-height: 130%;
  font-weight: 800;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;
