import { styled } from "styled-components";

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
  /* background: ${(props) => props.theme.colors["base-card"]}; */
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors["base-title"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  font-family: ${(props) => props.theme.fonts["title"]};
  font-weight: 800;
  line-height: 130%;
`;

export const DeliveryAddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 4px;
  background: ${(props) => props.theme.colors["base-card"]};
`;

export const PaymentFormContainer = styled.div`
  margin-top: .75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 4px;
`;


export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${(props) => props.theme.colors["base-error"]}
  }
`;

export const PaymentText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["title-xs"]};
  line-height: 130%;
  font-weight: 400;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: .75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;
