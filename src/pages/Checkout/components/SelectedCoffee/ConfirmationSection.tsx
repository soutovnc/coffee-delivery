import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer, DeliveryPriceText, DeliveryText, TotalItemsPriceText, TotalItemsText, TotalPriceText, TotalText } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCarTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <TotalItemsText>Total de itens</TotalItemsText>
        <TotalItemsPriceText>R$ {formattedItemsTotal}</TotalItemsPriceText>
      </div>
      <div>
        <DeliveryText>Entrega</DeliveryText>
        <DeliveryPriceText>R$ {formattedDeliveryPrice}</DeliveryPriceText>
      </div>
      <div>
        <TotalText>Total</TotalText>
        <TotalPriceText>R$ {formattedCarTotal}</TotalPriceText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
