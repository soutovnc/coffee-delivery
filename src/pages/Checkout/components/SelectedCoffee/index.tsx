import { useCart } from "../../../../hooks/useCart"

export function SelectedCoffee() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeeContainer>
      <TitleText>
        Cafés selecionados
      </TitleText>

      
    </SelectedCoffeeContainer>
  )
}
