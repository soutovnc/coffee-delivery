import { styled } from "styled-components";

export const CompleteOrderContainer = styled.div``;
export const Title = styled.h1``;
export const AddressFormContainer = styled.div``;
export const AddressSectionTitle = styled.h1``;
export const PaymentFormContainer = styled.div``;
export const PaymentSectionTitle = styled.h1``;

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
