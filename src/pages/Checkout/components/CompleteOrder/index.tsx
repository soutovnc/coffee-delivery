import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";
import { PaymentMethodOptions } from "./PaymentMethodOption";
import { CompleteOrderContainer, DeliveryAddressFormContainer, PaymentFormContainer, Title } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";

export function CompleteOrder() {
  const { colors } = useTheme();

  return (
    <CompleteOrderContainer>
      <Title>
        Complete seu Pedido
      </Title>

      <DeliveryAddressFormContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["yellow-dark"]} size={22} />}
        />

        <AddressForm />
      </DeliveryAddressFormContainer>
      <PaymentFormContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors["purple"]} size={22} />}
        />
        <PaymentMethodOptions />
      </PaymentFormContainer>
    </CompleteOrderContainer>
  )
}
