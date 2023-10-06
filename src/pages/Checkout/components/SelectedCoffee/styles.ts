import styled from "styled-components"
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
`;

export const TitleText = styled.h1`
  color: ${(props) => props.theme.colors["base-title"]};
  font-size: ${(props) => props.theme.textSizes["title-m"]};
  font-family: ${(props) => props.theme.fonts["title"]};
  line-height: 130%;
  font-weight: 800;
`;

export const CoffeeCartCardContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;
