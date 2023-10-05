import { PaymentMethodOptions } from "./PaymentMethodOption";
import { AddressFormContainer, AddressSectionTitle, CompleteOrderContainer, PaymentFormContainer, PaymentSectionTitle, Title } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <Title>
        Complete seu Pedido
      </Title>

      <AddressFormContainer>
        <AddressSectionTitle />
      </AddressFormContainer>
      <PaymentFormContainer>
        <PaymentSectionTitle />
        <PaymentMethodOptions />
      </PaymentFormContainer>
    </CompleteOrderContainer>
  )
}
