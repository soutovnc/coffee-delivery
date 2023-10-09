import styled from "styled-components"
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
/*
  > div {
    background: ${(props) => props.theme.colors["base-card"]};
  } */
`;

export const TitleText = styled.h1`
  color: ${(props) => props.theme.colors["base-title"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  font-family: ${(props) => props.theme.fonts["title"]};
  line-height: 130%;
  font-weight: 800;
`;

export const CoffeeCartCardContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;

`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  /* background: ${(props) => props.theme.colors["base-card"]}; */

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

//  TEXTS

export const TotalItemsText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  line-height: 130%;
  font-weight: 400;
`;

export const TotalItemsPriceText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 400;
`;

export const DeliveryText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  line-height: 130%;
  font-weight: 400;
`;

export const DeliveryPriceText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 400;
`;

export const TotalText = styled.p`
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 700;
`;

export const TotalPriceText = styled.p`
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 700;
`;
