import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme.colors["background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

// TEXTS


export const TitleText = styled.h1`
  color: ${(props) => props.theme.colors["base-title"]};
  font-size: ${(props) => props.theme.textSizes["title-l"]};
  font-family: ${(props) => props.theme.fonts["title"]};
  line-height: 130%;
  font-weight: 800;
`;

export const Subtittle = styled.p`
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-size: ${(props) => props.theme.textSizes["text-l"]};
  line-height: 130%;
  font-weight: 400;
`;

export const LocaleDeliveryText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 400;
`;

export const ForecastDeliveryText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 400;
`;

export const PaymentDeliveryText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 400;
`;
