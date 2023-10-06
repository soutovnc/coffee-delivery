import { useCart } from "../../../../hooks/useCart"
import { CoffeeCart } from "../CoffeeCart";
import { CoffeeCartCardContainer, SelectedCoffeeContainer, TitleText } from "./styles";

export function SelectedCoffee() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeeContainer>
      <TitleText>
        Cafés selecionados
      </TitleText>

      <CoffeeCartCardContainer>
        {cartItems.map((item) => (
          <CoffeeCart key={item.id} coffee={item}/>
        ))}
      </CoffeeCartCardContainer>


    </SelectedCoffeeContainer>
  )
}
